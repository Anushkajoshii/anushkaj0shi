

import React, { useState } from "react";
import "../styles/projects.css";

const Projects = () => {
  const [showWebDev, setShowWebDev] = useState(false);
  const [showML, setShowML] = useState(false);
  const [showKaggle, setShowKaggle] = useState(false);

  const toggleSection = (sectionSetter) => sectionSetter((prev) => !prev);

  return (
    <div className="projects-container">
      <div className="projects-content">

        {/* ML and Data Science Section - moved before Fullstack/Web Development */}
        <h2 className="section-title" onClick={() => toggleSection(setShowML)}>
          {showML ? "▼" : "▶"} Machine Learning and Data Science
        </h2>
        {showML && (
          <>
            {/* BigMoneyEnergy */}
            <div className="project">
              <div className="project-header">
                <div className="project-icons">
                  <a href="https://github.com/Anushkajoshii/BigMoneyEnergy" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="project-icon" />
                  </a>
                </div>
                <h3>BigMoneyEnergy</h3>
              </div>
              <p>
                An interactive personal finance simulator using Monte Carlo simulations and Groq AI for affordability prediction, with a Streamlit dashboard for real-time modeling and PDF exports.
              </p>
              <p><strong>Tech Stack:</strong> Python, Streamlit, Groq, NumPy, Pandas, Matplotlib, Scikit-learn</p>
            </div>

            {/* CodePilot */}
            <div className="project">
              <div className="project-header">
                <div className="project-icons">
                  <a href="https://github.com/Anushkajoshii/CodePilot" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="project-icon" />
                  </a>
                </div>
                <h3>CodePilot</h3>
              </div>
              <p>
              AI-powered coding assistant that acts like a multi-agent developer team — it takes a natural language prompt like ‘Build a calculator web app’ and automatically plans, codes, and packages a complete, working project file-by-file.
              </p>
              <p><strong>Tech Stack:</strong> Python, LangGraph, LangChain, Streamlit, Groq Cloud</p>
            </div>

            {/* SMS Spam Detection (kept in ML section) */}
            <div className="project">
              <div className="project-header">
                <div className="project-icons">
                  <a href="https://github.com/Anushkajoshii/SMS-Spam-Detection" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="project-icon" />
                  </a>
                </div>
                <h3>SMS Spam Detection</h3>
              </div>
              <p>A real-time SMS Spam Detection system using Natural Language Processing (NLP) and Machine Learning, deployed via an interactive Streamlit web app for instant message classification.</p>
              <p><strong>Tech Stack:</strong> Python, Streamlit, Scikit-Learn, NumPy, Pandas, Matplotlib </p>
            </div>

            {/* MathHelp with Gestures */}
            <div className="project">
              <div className="project-header">
                <div className="project-icons">
                  <a href="https://github.com/Anushkajoshii/MathHelp-with-Gestures" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="project-icon" />
                  </a>
                </div>
                <h3>MathHelp with Gestures</h3>
              </div>
              <p>A deep learning-based system that recognizes hand gestures to solve basic math problems.</p>
              <p><strong>Tech Stack:</strong> Python, OpenCV, TensorFlow, Numpy</p>
            </div>

            {/* Live Anomaly Detection */}
            <div className="project">
              <div className="project-header">
                <div className="project-icons">
                  <a href="https://github.com/Anushkajoshii/liveAnomly" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="project-icon" />
                  </a>
                </div>
                <h3>Live Anomaly Detection</h3>
              </div>
              <p>A real-time anomaly detection system that flags irregularities in time series data using statistical and ML techniques.</p>
              <p><strong>Tech Stack:</strong> Python, Scikit-Learn, Pandas, Matplotlib</p>
            </div>

            {/* Harry Potter RAG Q&A */}
            <div className="project">
              <div className="project-header">
                <div className="project-icons">
                  <a href="https://github.com/Anushkajoshii/Harry-Potter-RAG-Q-A" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="project-icon" />
                  </a>
                </div>
                <h3>Harry Potter RAG Q&A</h3>
              </div>
              <p>A retrieval-augmented generation chatbot for answering questions about the Harry Potter series using NLP and LLMs.</p>
              <p><strong>Tech Stack:</strong> Python, LangChain, OpenAI API</p>
            </div>


            {/* Predict Employee Performance */}
            <div className="project">
              <div className="project-header">
                <div className="project-icons">
                  <a href="https://github.com/Anushkajoshii/Predict-Employee-Performance" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="project-icon" />
                  </a>
                </div>
                <h3>Predict Employee Performance</h3>
              </div>
              <p>A machine learning model to predict employee performance using workplace metrics.</p>
              <p><strong>Tech Stack:</strong> Python, Scikit-Learn, Pandas, Matplotlib</p>
            </div>

            {/* Customer Churn Prediction */}
            <div className="project">
              <div className="project-header">
                <div className="project-icons">
                  <a href="https://github.com/Anushkajoshii/customer-churn-prediction/tree/main" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="project-icon" />
                  </a>
                </div>
                <h3>Customer Churn Prediction</h3>
              </div>
              <p>Predicts customer churn using classification techniques for accuracy.</p>
              <p><strong>Tech Stack:</strong> Python, Scikit-learn, Pandas, NumPy, Streamlit</p>
            </div>

            {/* LLM-based RAG Search */}
            <div className="project">
              <div className="project-header">
                <div className="project-icons">
                  <a href="https://github.com/Anushkajoshii/LLM-based-RAG-Search" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="project-icon" />
                  </a>
                </div>
                <h3>LLM-based RAG Search</h3>
              </div>
              <p>A RAG system with custom data and Hugging Face LLMs for semantic search.</p>
              <p><strong>Tech Stack:</strong> Python, Hugging Face Transformers, FAISS, Streamlit</p>
            </div>

            {/* Wine Quality Prediction MLflow */}
            <div className="project">
              <div className="project-header">
                <div className="project-icons">
                  <a href="https://github.com/Anushkajoshii/Wine-Quality-Prediction-MLflow" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="project-icon" />
                  </a>
                </div>
                <h3>Wine Quality Prediction MLflow</h3>
              </div>
              <p>ML model for wine quality prediction using MLflow for tracking and tuning.</p>
              <p><strong>Tech Stack:</strong> Python, Scikit-Learn, MLflow, Pandas, Matplotlib, Numpy</p>
            </div>

          </>
        )}

        {/* Web Development / Fullstack Section */}
        <h2 className="section-title" onClick={() => toggleSection(setShowWebDev)}>
          {showWebDev ? "▼" : "▶"} Web Development
        </h2>
        {showWebDev && (
          <>

            {/* Sorting Visualizer */}
            <div className="project">
              <div className="project-header">
                <div className="project-icons">
                  <a
                    href="https://github.com/Anushkajoshii/Sorting-Visualizer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="GitHub"
                      className="project-icon"
                    />
                  </a>
                </div>
                <h3>Sorting Visualizer</h3>
              </div>
              <p>
                A visually interactive tool that demonstrates various sorting algorithms like Merge Sort, Quick Sort, and Bubble Sort using animations.
              </p>
              <p><strong>Tech Stack:</strong> React-JS, JavaScript, HTML5, CSS</p>
            </div>

            {/* Helperr */}
            <div className="project">
              <div className="project-header">
                <div className="project-icons">
                  <a
                    href="https://github.com/Anushkajoshii/Helperr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="GitHub"
                      className="project-icon"
                    />
                  </a>
                </div>
                <h3>Helperr</h3>
              </div>
              <p>
                A freelancing platform for daily wage workers, connecting workers with consumers for various tasks.
              </p>
              <p><strong>Tech Stack:</strong> MongoDB, Express-JS, React-JS, Node-JS</p>
            </div>

            {/* InsightGuide-AI */}
            <div className="project">
              <div className="project-header">
                <div className="project-icons">
                  <a
                    href="https://github.com/Anushkajoshii/InsightGuide-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="GitHub"
                      className="project-icon"
                    />
                  </a>
                </div>
                <h3>InsightGuide-AI</h3>
              </div>
              <p>
                InsightGuide AI is an intelligent virtual assistant developed using the MERN stack and powered by Google Gemini AI.
              </p>
              <p><strong>Tech Stack:</strong> MongoDB, Express.js, React.js, Node.js</p>
            </div>

            {/* My Notes AWS */}
            <div className="project">
              <div className="project-header">
                <div className="project-icons">
                  <a
                    href="https://github.com/Anushkajoshii/my-notes-aws"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="GitHub"
                      className="project-icon"
                    />
                  </a>
                </div>
                <h3>My Notes AWS</h3>
              </div>
              <p>
                A cloud-based notes application that enables users to create, edit, and store notes securely using AWS services.
              </p>
              <p><strong>Tech Stack:</strong> AWS Lambda, DynamoDB, API Gateway, S3, React</p>
            </div>

            {/* Meme Game */}
            <div className="project">
              <div className="project-header">
                <div className="project-icons">
                  <a
                    href="https://github.com/Anushkajoshii/Meme-Game"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="GitHub"
                      className="project-icon"
                    />
                  </a>
                </div>
                <h3>Meme Game</h3>
              </div>
              <p>
                A memory card matching game deployed using AWS S3 for static website hosting and AWS CodePipeline for CI/CD.
              </p>
              <p><strong>Tech Stack:</strong> AWS S3, AWS CodePipeline, React-JS</p>
            </div>

          </>
        )}

        {/* Kaggle Notebooks and Competitions Section */}
        <h2 className="section-title" onClick={() => toggleSection(setShowKaggle)}>
          {showKaggle ? "▼" : "▶"} Kaggle Notebooks & Competitions
        </h2>
        {showKaggle && (
          <>
            <div className="project">
              <h3>Kaggle Notebooks</h3>
              <p>Explore my Kaggle notebooks for various data science projects and analysis.</p>
                <ul>
                  <li>
                    <a href="https://www.kaggle.com/code/anushkajoshii/apple-financials-2009-2024-eda" target="_blank" rel="noopener noreferrer">
                      Apple Financials 2009-2024 EDA
                    </a>
                  </li>
                  <li>
                    <a href="https://www.kaggle.com/code/anushkajoshii/restaurant-s-cuisine-rating-eda" target="_blank" rel="noopener noreferrer">
                      Restaurant's Cuisine Rating EDA
                    </a>
                  </li>
                </ul>
            </div>

            <div className="project">
              <h3>Kaggle Competitions</h3>
              <p>
                Check out my participation in various Kaggle competitions:
                <ul>
                  <li>
                    <a href="https://www.kaggle.com/code/anushkajoshii/titanic-disaster-prediction" target="_blank" rel="noopener noreferrer">
                      Titanic: Machine Learning from Disaster
                    </a>
                  </li>
                  <li>
                    <a href="https://www.kaggle.com/code/anushkajoshii/house-price-prediction" target="_blank" rel="noopener noreferrer">
                      House Prices: Advanced Regression Techniques
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
