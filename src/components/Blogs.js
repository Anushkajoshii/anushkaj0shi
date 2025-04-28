import React from "react";
import "../styles/blogs.css";
import blogImage from "../assets/aa.jpg"; // Existing blog image
import newBlogImage from "../assets/mm.jpg"; // Import a second image for the new blog

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
            href="https://medium.com/@anushkajoshi020503/your-first-brain-dump-on-machine-learning-f9fe6f271a05"
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
            href="https://medium.com/@anushkajoshi020503/machine-learning-but-its-not-that-deep-yet-68e718bbec3a"
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
