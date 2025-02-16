import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-4xl font-bold text-gray-800">Omar Barhoumi</h1>
              <h2 className="text-xl text-primary mt-2">Full Stack Developer</h2>
              <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZZQrBGhmnvvhgTrcWxTFfQVbTWXnnRsZNXRgTLSMVLjqJFPPrKKgvlWGsZlrxKQTFBbxV" className="flex items-center text-gray-600 hover:text-primary">
                  <FaEnvelope className="mr-2" /> omarbarhoumy229@gmail.com
                </a>
                <a href="tel:+216 94 327 895 " className="flex items-center text-gray-600 hover:text-primary">
                  <FaPhone className="mr-2" /> +216 94 327 895
                </a>
                <span className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-2" /> Tunisia
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/barhoumiomar" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-primary text-2xl"> 
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/omar-barhoumi-1b5560247/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-primary text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* About Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="section-title">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            Passionate Full Stack Developer with experience in building responsive and scalable web applications.
            Skilled in modern web technologies and frameworks.
          </p>
        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="section-title">Skills</h2>
          <div className="flex flex-wrap gap-2">
          <span className="skill-tag">HTML</span>
          <span className="skill-tag">Css</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">API </span>
            <span className="skill-tag">Express</span>
            <span className="skill-tag">Mongoose</span>
            
          </div>
        </section>

      
        {/* Education Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="section-title">Education</h2>
          <div className="timeline-item">
            <h3 className="text-xl font-semibold text-gray-800">Bachelor's in Computer Science</h3>
            <p className="text-primary">2018 - 2022</p>
            <p className="text-gray-600 mt-2">High school menzel bouzelfa</p>
          </div> 
          <div className="timeline-item">
            <h3 className="text-xl font-semibold text-gray-800">python certification </h3>
            <p className="text-primary">2020</p>
            <p className="text-gray-600 mt-2">oxygen training center</p>
          </div> 
          <div className="timeline-item">
            <h3 className="text-xl font-semibold text-gray-800"> telecommunications student at the higher institute of information and communication </h3>
            <p className="text-primary">2024-2028</p>
            <p className="text-gray-600 mt-2">borj cedria, BEN AROUS.</p>
          </div>
          <div className="timeline-item">
            <h3 className="text-xl font-semibold text-gray-800"> full stack web developpment certification </h3>
            <p className="text-primary">2024-2025</p>
            <p className="text-gray-600 mt-2">GOMYCODE</p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="section-title">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-800">chess application</h3>
              <p className="text-gray-600 mt-2">
                Built a full-stack application using React.js, Node.js, and MongoDB.
                Implemented payment integration and making users login and signup .
                <a
                  href="https://chess-ckgw.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline font-semibold"
                >
  Visit Chess App
</a>

              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-800">book finder</h3>
              <p className="text-gray-600 mt-2">
                created application of finding books using html, css and javascript  and API .
                <a
                  href="https://findbooks-1hnx.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline font-semibold"
                >
  Visit book finder
</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md mt-8">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Omar Barhoumi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
