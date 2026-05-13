import './App.css'

function App() {
  const projects = [
    {
      title: "Asteroid Hazard Classifier",
      desc: "Machine Learning based asteroid classification using NASA API and ensemble models.",
      tech: "Python, Sklearn, NASA API",
    },
    {
      title: "Disease Detector Models",
      desc: "ML models for diabetes and cancer prediction with high accuracy.",
      tech: "Python, Pandas, Scikit-learn",
    },
    {
      title: "Fertilizer Optimizer",
      desc: "Smart fertilizer recommendation system for soil optimization.",
      tech: "HTML, CSS, JavaScript",
    },
  ];

  const skills = [
    "Python",
    "Machine Learning",
    "Java",
    "JavaScript",
    "React",
    "SAP ABAP",
    "CSS",
    "SQL",
    "GitHub",
    "Pandas",
    "Scikit-learn",
    "Data Science",
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav>
        <div className="container">
          <h1>Raghuveer Mishra</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Hi, I'm Raghuveer</h1>
          <p>Final Year IT student passionate about Machine Learning, Data Science, SAP ABAP, and Full Stack Development.</p>
          <div className="hero-buttons">
            <a href="https://github.com/" target="_blank" className="btn btn-primary">
              ⭐ GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" className="btn btn-secondary">
              💼 LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-card">
              <h3>🤖 Machine Learning</h3>
              <p>Building intelligent systems using modern ML algorithms and ensemble models for real-world problems.</p>
            </div>
            <div className="about-card">
              <h3>📊 Data Science</h3>
              <p>Skilled in data preprocessing, analysis, visualization, and predictive modeling with Python and Pandas.</p>
            </div>
            <div className="about-card">
              <h3>🌐 Web Development</h3>
              <p>Developing responsive and modern web applications with clean UI and great user experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-tag">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <p className="project-tech">Tech: {project.tech}</p>
                <button className="btn">View Project →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2>Let's Connect</h2>
          <p>Open to internship opportunities, software engineering roles, machine learning projects, and collaborations.</p>
          <div className="contact-buttons">
            <a href="mailto:gopalcriro123@gmail.com" className="btn">
              ✉️ Email
            </a>
            <a href="tel:+916371071610" className="btn">
              📞 Phone
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Raghuveer Mishra. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App