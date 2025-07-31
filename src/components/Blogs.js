import React from "react";
import "../styles/blogs.css";
import blogImage from "../assets/b1.jpg"; // Existing blog image
import newBlogImage from "../assets/b2.jpg"; // Second blog image
import thirdBlogImage from "../assets/b3.png"; // Third blog image
import fourthBlogImage from "../assets/b4.jpg"; // Fourth blog image

const Blogs = () => {
  return (
    <section id="blogs" className="blogs">
      <h2>my blogs</h2>

      {/* Blog 1 */}
      <div className="blog-card">
        <img
          src={blogImage}
          alt="Your First Brain Dump on Machine Learning"
          className="blog-image"
        />
        <div className="blog-content">
          <h3>🧠 Your First Brain Dump on Machine Learning</h3>
          <p>
            An introductory perspective on machine learning, breaking down concepts in a beginner-friendly way.
          </p>
          <a
            href="https://medium.com/@anushkaj0shi/your-first-brain-dump-on-machine-learning-f9fe6f271a05"
            target="_blank"
            rel="noopener noreferrer"
            className="read-more"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Blog 2 */}
      <div className="blog-card">
        <img
          src={newBlogImage}
          alt="Machine Learning, But It's Not That Deep (Yet)"
          className="blog-image"
        />
        <div className="blog-content">
          <h3>🤖 Machine Learning, But It's Not That Deep (Yet)</h3>
          <p>
            A complete guide to ML algorithms — from supervised, unsupervised, and reinforcement learning, explained clearly for all levels.
          </p>
          <a
            href="https://medium.com/@anushkaj0shi/machine-learning-but-its-not-that-deep-yet-68e718bbec3a"
            target="_blank"
            rel="noopener noreferrer"
            className="read-more"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Blog 3 */}
      <div className="blog-card">
        <img
          src={thirdBlogImage}
          alt="The Ultimate Guide to Machine Learning Algorithms: From Theory to Implementation"
          className="blog-image"
        />
        <div className="blog-content">
          <h3>📚 The Ultimate Guide to Machine Learning Algorithms: From Theory to Implementation</h3>
          <p>
            A comprehensive walkthrough of the most popular machine learning algorithms with practical implementation tips.
          </p>
          <a
            href="https://medium.com/@anushkaj0shi/the-ultimate-guide-to-machine-learning-algorithms-from-theory-to-implementation-fe14e8a7c05d"
            target="_blank"
            rel="noopener noreferrer"
            className="read-more"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Blog 4 */}
      <div className="blog-card">
        <img
          src={fourthBlogImage}
          alt="Business Automation Evolved: GenAI vs Agentic AI"
          className="blog-image"
        />
        <div className="blog-content">
          <h3>⚙️ Business Automation Evolved: GenAI vs Agentic AI</h3>
          <p>
            Exploring the real-world impact and differences between Generative AI and Agentic AI in the future of business automation.
          </p>
          <a
            href="https://medium.com/@anushkaj0shi/business-automation-evolved-genai-vs-agentic-ai-def1b8a0e66a"
            target="_blank"
            rel="noopener noreferrer"
            className="read-more"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
