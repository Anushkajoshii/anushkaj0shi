import React from "react";
import "../styles/blogs.css";
import blogImage from "../assets/aa.jpg"; // ✅ Import image

const Blogs = () => {
  return (
    <section id="blogs" className="blogs">
      <h2>my blogs</h2>
      <div className="blog-card">
        <img
          src={blogImage} // ✅ Use imported image here
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
    </section>
  );
};

export default Blogs;
