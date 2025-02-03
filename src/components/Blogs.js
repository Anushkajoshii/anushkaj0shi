import React from "react";
import "../styles/blogs.css";

const Blogs = () => {
  return (
    <section id="blogs" className="blogs">
      <h2>my blogs</h2>
      <div className="blog-card">
        <h3>Blog 1</h3>
        <p>Exploring the fundamentals of React.js and its ecosystem.</p>
        <button className="read-more" onClick={() => alert("Blog coming soon!")}>
          Read More
        </button>
      </div>
      <div className="blog-card">
        <h3>Blog 2</h3>
        <p>Understanding Machine Learning models and their applications.</p>
        <button className="read-more" onClick={() => alert("Blog coming soon!")}>
          Read More
        </button>
      </div>
      <div className="blog-card">
        <h3>Blog 3</h3>
        <p>Optimizing performance in web applications using best practices.</p>
        <button className="read-more" onClick={() => alert("Blog coming soon!")}>
          Read More
        </button>
      </div>
    </section>
  );
};

export default Blogs;