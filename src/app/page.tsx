'use client';

import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Github,  Linkedin, Mail, Download, Code, Database, Globe, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { LuUser } from "react-icons/lu";
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              Lokesh AV
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                About
              </Link>
              <Link href="#achievements" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Achievements
              </Link>
              <Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#blog" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - About Me */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Photo and Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="relative w-64 h-64 mx-auto lg:mx-0 mb-8">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-2">
                    <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">

                    <LuUser className='xl'/>
                    </div>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Lokesh AV
              </h1>
              <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                Full-Stack Developer | MERN | AI-Integrated Web App 
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <MapPin size={16} />
                  <span>Vaniyambadi, Tamilnadu, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Calendar size={16} />
                  <span>1 year experience</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="/resume.pdf"
                  download
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </a>
                <Link 
                  href="#projects"
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Code size={20} />
                  View Projects
                </Link>
                <Link
                  href="#contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <span>💼</span>
                  Hire Me
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Pitch */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Building the Future, One App at a Time
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m a dedicated full-stack developer specializing in the MERN stack, focused on building scalable and intuitive web applications. With a strong interest in integrating AI, I develop solutions that are both efficient and user-friendly.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Over the past few years, I’ve built a range of projects—from productivity tools like Task Master to intelligent platforms like CodeSensei, an AI-powered code review assistant. I value clean, maintainable code, a seamless user experience, and a mindset of continuous growth.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Tech Tools Mastered</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Achievements & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Projects Built</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Full-stack applications with modern tech stack</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Technologies Mastered</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">From frontend to backend and AI integration</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Project Success Rate</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">All projects completed and deployed successfully</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">1+</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Year Experience</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Continuous learning and skill development</div>
            </motion.div>
          </div>
          
          {/* Certifications & Awards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                Certification
              </h3>

              <p className="text-ml font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">🎓</span>
                The Complete Full-Stack Web Development Bootcamp (Udemy, 2024)
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="font-semibold">Frontend:</span> HTML5, CSS3, JavaScript (ES6+), React.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="font-semibold">Backend:</span> Node.js, Express.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="font-semibold">Database:</span> MongoDB
                </li>
              </ul>
              <div className="mt-4">
                <a 
                  href="https://t.co/qkaOV09T7D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium transition-colors"
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>
              <div className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                <span className="font-semibold">Issued by:</span> Udemy &nbsp;|&nbsp;
                <span className="font-semibold">Year:</span> 2024
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-yellow-500">⭐</span>
                Key Achievements
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Achieved 99.9% uptime and reduced code review time by 60% (Codesensei)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Implemented real-time code analysis with Cohere AI API (10,000+ lines/day at 95% accuracy)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Deployed microservices with Docker & Kubernetes (75% faster deployment)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Supported 1000+ concurrent users (Codesensei)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Built a responsive task manager with CRUD, drag-and-drop, and localStorage
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Set up CI/CD pipelines with 90%+ test coverage and faster production rollout
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Tech Stack & Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800"
            >
              <Globe className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-300">
                React.js (Hooks, Context API, Redux), JavaScript (ES6+), HTML5, CSS3 (Flexbox, Grid, Responsive),<br/>
                Material-UI, Bootstrap, Tailwind CSS, RESTful API Integration
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800"
            >
              <Code className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Node.js, Express.js, MongoDB, Mongoose,<br/>
                REST API Design & Development, Authentication (JWT, OAuth), SSR Basics
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800"
            >
              <Database className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tools & Methodologies</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Docker, CI/CD Pipelines, Git, GitHub, Postman,<br/>
                Agile Methodologies
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">July 8, 2025</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                How I Built an AI-Powered Task Manager with Next.js
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              As someone passionate about crafting clean, responsive, and scalable web apps, 
              I decided to build a productivity tool that could serve as both a learning project and a practical daily-use app. That’s how Task Master was born
              </p>
              <Link 
                href="https://lokeshlogs.blogspot.com/2025/07/how-i-built-ai-inspired-task-manager.html" target='_blank'
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                Read More <ExternalLink size={16} />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">July 8, 2025</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              How I Learned and Built an AI-Integrated Code Review Web App – CodeSensei
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              How I Built an AI-Integrated Code Review App – CodeSensei As a full-stack developer with a growing interest in AI, 
              I wanted to build something that combined my passion for clean code and intelligent systems.
              </p>
              <Link 
                href="https://lokeshlogs.blogspot.com/2025/07/how-i-learned-and-built-ai-integrated.html" target='_blank'
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                Read More <ExternalLink size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Let&apos;s Connect
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Send me a message
              </h3>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Get in touch
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:lokeshtech564@gmail.com"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Mail size={20} />
                  <span>lokeshtech564@gmail.com</span>
                </a>
                
                <a 
                  href="https://github.com/loki135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Github size={20} />
                  <span>github.com/loki135</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/loki5654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                  <span>linkedin.com/in/loki5654</span>
                </a>
                <a 
                  href="https://leetcode.com/loki135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {/* If you have a LeetCode icon, use it here. Otherwise, use ExternalLink icon. */}
                  <ExternalLink size={20} />
                  <span>leetcode.com/loki135</span>
                </a>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Available for:
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Full-time opportunities</li>
                  <li>• Freelance projects</li>
                  <li>• Technical consulting</li>
                  <li>• Open source contributions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </LazyMotion>
  );
}
