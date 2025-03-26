import streamlit as st
import os
from langchain_groq import ChatGroq
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains import create_retrieval_chain
from langchain_community.vectorstores import FAISS
from langchain_community.document_loaders import TextLoader
from langchain_google_genai import GoogleGenerativeAIEmbeddings

# Configure page settings
st.set_page_config(
    page_title="DONNA - HR Assist",
    page_icon="💼",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Apply minimal clean CSS
st.markdown("""
<style>
    .main {
        background-color: white;
    }
    .stButton button {
        background-color: #4169E1;
        color: white;
    }
    .chat-container {
        padding: 10px;
        border-radius: 5px;
    }
</style>
""", unsafe_allow_html=True)

# HARDCODED FILE PATH - Update this to your actual file path
HR_DATA_PATH = "hr_data.txt"

# Simple sidebar for API keys
with st.sidebar:
    st.title("HRlytics Setup")
    groq_api_key = st.text_input("Groq API Key:", type="password")
    google_api_key = st.text_input("Google API Key:", type="password")
    
    if st.button("Initialize System"):
        if groq_api_key and google_api_key:
            with st.spinner("Setting up HR analytics system..."):
                try:
                    os.environ["GOOGLE_API_KEY"] = google_api_key
                    
                    # Initialize model and embeddings
                    st.session_state.llm = ChatGroq(groq_api_key=groq_api_key, model_name="gemma2-9b-it")
                    st.session_state.embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
                    
                    # Load and process the static text file
                    loader = TextLoader(HR_DATA_PATH)
                    docs = loader.load()
                    
                    # Split text into chunks
                    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
                    final_documents = text_splitter.split_documents(docs)
                    
                    # Create vector store
                    st.session_state.vectors = FAISS.from_documents(final_documents, st.session_state.embeddings)
                    
                    # Create enhanced HR assistant prompt
                    st.session_state.prompt = ChatPromptTemplate.from_template(
                        """
                        You are HRlytics, an advanced HR analytics assistant with expertise in workforce analytics, 
                        employee engagement, talent management, and organizational development.
                        
                        Your task is to analyze the HR data provided and extract valuable business insights.
                        Always maintain a professional tone and respect confidentiality of HR data.
                        
                        When analyzing data:
                        1. Identify patterns and trends relevant to the query
                        2. Provide specific, actionable recommendations when appropriate
                        3. Consider implications for employee experience, retention, and business outcomes
                        4. Reference specific data points from the context to support your insights
                        
                        <context>
                        {context}
                        </context>
                        
                        Human query: {input}
                        
                        Provide a data-driven response that addresses the specific HR query.
                        """
                    )
                    
                    st.success("System initialized successfully!")
                    st.session_state.system_ready = True
                except Exception as e:
                    st.error(f"Error: {str(e)}")
        else:
            st.error("Please enter both API keys.")

# Main content area - Simple and clean
st.title("DONNA - HR Analytics Assistant")
st.markdown("Ask questions about HR data to get business insights")

# Initialize chat history
if "messages" not in st.session_state:
    st.session_state.messages = []
    welcome_message = "Ready to analyze HR data. Please initialize the system and ask a question."
    st.session_state.messages.append({"role": "assistant", "content": welcome_message})

# Display chat messages
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# Chat input
if human_input := st.chat_input("Ask about HR data..."):
    st.session_state.messages.append({"role": "user", "content": human_input})
    with st.chat_message("user"):
        st.markdown(human_input)
    
    # Process the query if system is ready
    if "system_ready" in st.session_state and st.session_state.system_ready:
        with st.spinner("Analyzing..."):
            try:
                # Create document chain and retriever
                document_chain = create_stuff_documents_chain(st.session_state.llm, st.session_state.prompt)
                retriever = st.session_state.vectors.as_retriever(search_kwargs={"k": 3})
                retrieval_chain = create_retrieval_chain(retriever, document_chain)
                
                # Get response
                response = retrieval_chain.invoke({"input": human_input})
                assistant_response = response["answer"]
                
                # Store context for the expander
                st.session_state.current_references = response["context"]
                
                st.session_state.messages.append({"role": "assistant", "content": assistant_response})
                with st.chat_message("assistant"):
                    st.markdown(assistant_response)
                    
                # Simple expander for supporting information
                with st.expander("View Supporting Data"):
                    for i, doc in enumerate(response["context"]):
                        st.markdown(f"**Reference {i+1}**")
                        st.markdown(doc.page_content)
                        st.divider()
                
            except Exception as e:
                error_message = f"An error occurred: {str(e)}"
                st.session_state.messages.append({"role": "assistant", "content": error_message})
                with st.chat_message("assistant"):
                    st.markdown(error_message)
    else:
        reminder = "Please initialize the system using the sidebar first."
        st.session_state.messages.append({"role": "assistant", "content": reminder})
        with st.chat_message("assistant"):
            st.markdown(reminder)