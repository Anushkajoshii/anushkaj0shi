import React from "react";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      {/* Main content */}
      <div className="projects-content">
        <h2 className="section-title">web development</h2>

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
            A visually interactive tool that demonstrates various sorting
            algorithms like Merge Sort, Quick Sort, and Bubble Sort using
            animations.
          </p>
          <p>
            <strong>Tech Stack:</strong> React-JS, JavaScript, HTML5, CSS
          </p>
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
            A freelancing platform for daily wage workers, connecting workers
            with consumers for various tasks.
          </p>
          <p>
            <strong>Tech Stack:</strong> MongoDB, Express-JS, React-JS, Node-JS
          </p>
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
            InsightGuide AI is an intelligent virtual assistant developed using
            the MERN stack and powered by Google Gemini AI. It provides users
            with personalized insights and guidance on various topics.
          </p>
          <p>
            <strong>Tech Stack:</strong> MongoDB, Express.js, React.js, Node.js
          </p>
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
            A cloud-based notes application that enables users to create, edit,
            and store notes securely using AWS services.
          </p>
          <p>
            <strong>Tech Stack:</strong> AWS Lambda, DynamoDB, API Gateway, S3,
            React
          </p>
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
            <h3>Meme-Game</h3>
          </div>
          <p>
            A memory card matching game deployed using AWS S3 for static website
            hosting and AWS CodePipeline for CI/CD.
          </p>
          <p>
            <strong>Tech Stack:</strong> AWS S3, AWS CodePipeline, React-JS
          </p>
        </div>

        <h2 className="section-title">ml and data science</h2>

        {/* Harry Potter RAG Q&A */}
        <div className="project">
          <div className="project-header">
            <div className="project-icons">
              <a
                href="https://github.com/Anushkajoshii/Harry-Potter-RAG-Q-A"
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
            <h3>Harry Potter RAG Q&A</h3>
          </div>
          <p>
            A retrieval-augmented generation (RAG) based chatbot for answering
            questions about the Harry Potter series using NLP and LLMs.
          </p>
          <p>
            <strong>Tech Stack:</strong> Python, LangChain, OpenAI API
          </p>
        </div>

        {/* MathHelp with Gestures */}
        <div className="project">
          <div className="project-header">
            <div className="project-icons">
              <a
                href="https://github.com/Anushkajoshii/MathHelp-with-Gestures"
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
            <h3>MathHelp with Gestures</h3>
          </div>
          <p>
            A deep learning-based system that recognizes hand gestures to solve
            basic math problems.
          </p>
          <p>
            <strong>Tech Stack:</strong> Python, OpenCV, TensorFlow, Numpy
          </p>
        </div>

        {/* Predict Employee Performance */}
        <div className="project">
          <div className="project-header">
            <div className="project-icons">
              <a
                href="https://github.com/Anushkajoshii/Predict-Employee-Performance"
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
            <h3>Predict Employee Performance</h3>
          </div>
          <p>
            A machine learning model designed to predict employee performance based on various workplace metrics.
          </p>
          <p>
            <strong>Tech Stack:</strong> Python, Scikit-Learn, Pandas, Matplotlib
          </p>
        </div>

        {/* Wine Quality Prediction MLflow */}
        <div className="project">
          <div className="project-header">
            <div className="project-icons">
              <a
                href="https://github.com/Anushkajoshii/Wine-Quality-Prediction-MLflow"
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
            <h3>Wine Quality Prediction MLflow</h3>
          </div>
          <p>
            A machine learning model for predicting wine quality using MLflow
            for experiment tracking and hyperparameter tuning.
          </p>
          <p>
            <strong>Tech Stack:</strong> Python, Scikit-Learn, MLflow, Pandas, Matplotlib, Numpy
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default Projects;
