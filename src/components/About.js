import React from "react";
import "../styles/about.css";

const About = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" className="about-container">
      <h1 className="about-title">Me</h1>
      <div className="about-content">
        <p>
          Hi, I'm Anushka Joshi, a dedicated learner pursuing a B.Tech in Computer Science and Engineering with a specialization in AI and ML from Vellore Institute of Technology, Bhopal. I have also earned certifications including AWS Cloud Practitioner and Applied Machine Learning by the University of Michigan. These achievements, combined with my passion for problem-solving, have equipped me with the skills to build impactful solutions.
        </p>
        <p>
          I am a passionate MERN stack web developer and an enthusiast in machine learning and data science. With a strong foundation in technologies like React, Node.js, Express, and MongoDB, I specialize in building efficient and scalable web applications. My experience extends to machine learning frameworks such as Scikit-learn, TensorFlow, and PyTorch, with a focus on solving complex problems and delivering impactful solutions.
        </p>
        <p>
          Outside of work, I enjoy expressing myself through dance and exploring new places while traveling. These hobbies keep me inspired and bring balance to my journey as a lifelong learner.
        </p>
      </div>

      {/* Education Section */}
<div className="about-education">
  <h2 className="section-title">Education</h2>
  
  <div className="education-item">
    <h3>10th Grade</h3>
    <p>● Completed my 10th grade in the Class of 2019 with an excellent academic record from Central India Academy, Dewas.</p>
    <p>● Achieved an overall grade of 85.8%, demonstrating strong analytical and problem-solving skills.</p>
  </div>
  
  <div className="education-item">
    <h3>12th Grade</h3>
    <p>● Graduated in the Class of 2021 with a focus on Science (PCM) from Shri Gurukul H.S School, Sonkatch.</p>
    <p>● Scored 87.4% overall, excelling in Mathematics and Science.</p>
  </div>
  
  <div className="education-item">
    <h3>B.Tech in Computer Science & Engineering</h3>
    <p>● Currently pursuing B.Tech in CSE (AI & ML specialization) at Vellore Institute of Technology, Bhopal (Class of 2025).</p>
    <p>● Gaining hands-on experience in Artificial Intelligence, Machine Learning, and Data Science applications.</p>
  </div>
</div>


      {/* Certifications Section */}
      <div className="about-certifications">
        <h2 className="section-title">Certifications</h2>
        <div className="certification-item">
          <h3>AWS Cloud Practitioner</h3>
          <p>
            Earned the AWS Cloud Practitioner certification, which validates foundational cloud knowledge and skills. You can view my certification_ 
            <a 
              href="https://www.credly.com/badges/2f3fb0d1-047d-45a0-84cc-e12f5d3886e5"
              target="_blank" 
              rel="noopener noreferrer"
            >
              here
            </a>.
          </p>
        </div>
        <div className="certification-item">
          <h3>Applied Machine Learning by University of Michigan</h3>
          <p>
            Completed the Applied Machine Learning certification by the University of Michigan, focusing on practical machine learning techniques. You can view my certification_ 
            <a 
              href="https://coursera.org/share/03533228c505d3c5525d28592c1e7580"
              target="_blank" 
              rel="noopener noreferrer"
            >
              here
            </a>.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="about-skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-list">
          <div className="skill-item">
            <h3>Web Development</h3>
            <p>Proficient in HTML5, CSS3, JavaScript, React, Node.js, Express, MongoDB, and RESTful APIs.</p>
          </div>
          <div className="skill-item">
            <h3>Machine Learning & AI</h3>
            <p>Experienced with Scikit-learn, TensorFlow, PyTorch, and deep learning frameworks. Passionate about solving problems with machine learning and AI.</p>
          </div>
          <div className="skill-item">
            <h3>Cloud Computing</h3>
            <p>Familiar with AWS services, including Lambda, S3, API Gateway, DynamoDB, and CloudFormation.</p>
          </div>
          <div className="skill-item">
            <h3>Data Science & Analytics</h3>
            <p>Skilled in data analysis using Python, Pandas, NumPy, and visualization tools like Matplotlib and Seaborn.</p>
          </div>
          <div className="skill-item">
            <h3>Version Control</h3>
            <p>Proficient with Git and GitHub for version control and collaborative development.</p>
          </div>
        </div>
      </div>

      {/* Connect With Me Section */}
      <div className="about-connect">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/joshi-anushka/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="social-icon" />
          </a>

          <a href="https://github.com/Anushkajoshii" target="_blank" rel="noopener noreferrer">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="social-icon" />
          </a>

          <a href="mailto:anushkajoshi020503@gmail.com">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Email" className="social-icon" />
          </a>

          <a href="https://leetcode.com/u/anushkajoshi_/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="social-icon" />
          </a>
        </div>
      </div>

    </section>
  );
});

export default About;
