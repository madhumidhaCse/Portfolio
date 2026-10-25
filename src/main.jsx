import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight, ArrowRight, Github, Linkedin, Mail, Menu, X, Sun, Moon,
  Code2, BrainCircuit, Database, Globe, ExternalLink, GraduationCap,
  Download, Check, ChevronRight, FileText, Sparkles, BriefcaseBusiness,
  CircleUserRound, Instagram
} from 'lucide-react';
import './styles.css';

const projectData = [
  {
    id: 'news-app', number: '01', title: 'News App', category: 'Web development',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Newspapers and current-affairs reading material',
    description: 'A news-focused web application that presents current-affairs content in an accessible, organised interface.',
    details: 'The News App is a deployed web project built to make browsing news content straightforward. It reflects my interest in building practical interfaces where information is easy to scan and navigate. Visit the live app to explore the version currently published on Vercel.',
    stack: ['JavaScript', 'HTML', 'CSS', 'Vercel'], liveUrl: 'https://news-app-lime-pi-59.vercel.app/'
  },
  {
    id: 'movie-description', number: '02', title: 'Movie Description App', category: 'Web development',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=85',
    alt: 'Cinema seats in a movie theatre',
    description: 'A web app focused on exploring movie information and descriptions through a clean, user-friendly experience.',
    details: 'This deployed project brings movie-related information into a simple web interface. I focused on making the experience easy to explore and understand, while practising front-end development and connecting interface elements to useful content. Open the live deployment to try the application.',
    stack: ['JavaScript', 'HTML', 'CSS', 'Web development'], liveUrl: 'https://movie-description-app.vercel.app/'
  },,
  {
    id: 'mental-health-chatbot', number: '03', title: 'AI Mental Health Support Chatbot', category: 'AI / NLP',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    alt: 'Laptop and notebook on a desk representing a digital project',
    description: 'A mental-wellbeing chatbot concept that uses text analysis to recognise sentiment and identify possible signs of emotional distress.',
    details: 'This academic project explores how natural language processing and sentiment analysis can help a conversational interface respond more thoughtfully to emotional language. The planned workflow includes text preprocessing, sentiment scoring, an emotion-classification model, and a crisis-detection path that can guide a user toward appropriate human support. It is intended as a supportive prototype, not a replacement for professional mental-health care.',
    stack: ['Python', 'NLP', 'TextBlob', 'CNN', 'Flask'], liveUrl: ''
  },,
  {
    id: 'stopwatch', number: '04', title: 'Enhanced Stopwatch Application', category: 'Application / Data',
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=85',
    alt: 'Minimal desk setup with a clock',
    description: 'A stopwatch application designed to make timing sessions easier to record, review, and analyse.',
    details: 'The application combines stopwatch and lap-time tracking with a Flask backend and SQLite database. Recorded timings can be stored for later review and exported to CSV, while visual summaries can help users inspect timing patterns. The project gave me practical exposure to backend routes, persistent storage, data handling, and presenting useful information through a simple interface.',
    stack: ['Python', 'Flask', 'SQLite', 'CSV', 'Matplotlib'], liveUrl: ''
  },
];

const certificates = [
  { title: 'Problem Solving (Basic)', issuer: 'HackerRank', file: '/certificates/hackerrank-problem-solving-basic.pdf', type: 'PDF', detail: 'Foundational problem-solving and programming practice.' },
  { title: 'Introduction to MongoDB', issuer: 'MongoDB', file: '/certificates/introduction-to-mongodb.pdf', type: 'PDF', detail: 'Introduction to document databases and MongoDB concepts.' },
  { title: 'MERN Stack Development', issuer: 'Certificate of completion', file: '/certificates/mern-stack-development.jpg', type: 'JPG', detail: 'MERN stack development learning certificate.' },
  { title: 'Programming in Java', issuer: 'NPTEL', file: '/certificates/nptel-programming-in-java.pdf', type: 'PDF', detail: 'Course certificate in Java programming.' },
  { title: 'ChatGPT for Beginners', issuer: 'Simplilearn', file: '/certificates/simplilearn-chatgpt.pdf', type: 'PDF', detail: 'Introductory learning in ChatGPT and generative AI.' },
  { title: 'Java for Beginners', issuer: 'Simplilearn', file: '/certificates/simplilearn-java-for-beginners.pdf', type: 'PDF', detail: 'Java language fundamentals.' },
  { title: 'JavaScript for Beginners', issuer: 'Simplilearn', file: '/certificates/simplilearn-javascript-for-beginners.pdf', type: 'PDF', detail: 'JavaScript fundamentals for web development.' }
];

const skillGroups = [
  { title: 'Programming Languages', items: ['Java', 'Python', 'JavaScript'] },
  { title: 'Web development', items: ['HTML', 'CSS', 'React', 'Flask'] },
  { title: 'AI & machine learning', items: ['Machine Learning', 'NLP', 'CNN', 'OpenCV'] },
  { title: 'Database & tools', items: ['MySQL', 'SQLite', 'Git', 'GitHub'] }
];

function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const email = 'madhumidhacse883@gmail.com';
  const github = 'https://github.com/'; // Replace with your GitHub profile.
  const linkedin = 'https://www.linkedin.com/'; // Replace with your LinkedIn profile.

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  const closeMenu = () => setMenuOpen(false);

  return <div className="app-shell">
    <header className="site-header">
      <a className="logo" href="#home" onClick={closeMenu} aria-label="Madhu home"><span className="logo-mark">m.</span><span>madhu<span className="logo-period">.</span></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        {[['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Certificates', '#certificates'], ['Education', '#education']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={15}/></a>
      </nav>
      <button className="theme-toggle" onClick={() => setDark(v => !v)} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} title={dark ? 'Switch to light theme' : 'Switch to dark theme'}>{dark ? <Sun size={17}/> : <Moon size={17}/>}</button>
    </header>

    <main>
      <section className="hero wrap" id="home">
        <div className="hero-text">
          <div className="intro-pill"><span className="online-dot"/> OPEN TO ENTRY-LEVEL OPPORTUNITIES</div>
          <p className="overline">COMPUTER SCIENCE & ENGINEERING</p>
          <h1>Hi, I’m Madhu.<br/><span className="headline-accent">I build things for the web</span><br/>and explore AI.</h1>
          <p className="hero-summary">I’m a Computer Science and Engineering student interested in software development, practical web applications, and AI-powered ideas. I enjoy learning by building projects, experimenting with tools, and improving small details that make a product easier to use.</p>
          <div className="hero-buttons">
            <a className="btn btn-dark" href="#projects">Explore projects <ArrowRight size={16}/></a>
            <a className="btn btn-light" href="#contact"><Mail size={16}/> Get in touch</a>
          </div>
          <div className="social-links">
            <a href={github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={12}/></a>
            <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={12}/></a>
          </div>
        </div>
        <div className="hero-photo-area">
          <div className="photo-frame">
            <img className="hero-photo" src="/madhu-photo.png" alt="Madhu, Computer Science and Engineering graduate" />
            <div className="photo-overlay"><span>HELLO, WORLD!</span><b>Curious by nature.<br/>Developer in progress.</b></div>
          </div>
          <div className="photo-note"><Sparkles size={16}/><span>Learning, building, improving.</span></div>
          <div className="hero-stamp"><Code2 size={20}/><span>CODE<br/>WITH CARE</span></div>
        </div>
        <a href="#about" className="hero-scroll"><span/> Scroll to know me <ChevronRight size={14}/></a>
      </section>

      <section className="trust-strip"><div className="wrap strip-content"><span className="strip-label">MY INTERESTS</span><span><BrainCircuit/> AI & machine learning</span><span><Code2/> Software development</span><span><Database/> Data & databases</span><span><Globe/> Web experiences</span></div></section>

      <section className="section wrap" id="about">
        <div className="section-kicker">01 <span>ABOUT ME</span></div>
        <div className="section-split">
          <h2>Curious mind.<br/><span className="soft-accent">Practical mindset.</span></h2>
          <div className="about-copy">
            <p className="large-copy">I like understanding how things work — then turning that understanding into something useful.</p>
            <p>I’m a Computer Science and Engineering graduate with a growing interest in building useful software. Through academic and personal projects, I’ve explored Python programming, front-end development, databases, natural language processing, and machine-learning workflows. I enjoy taking a problem, breaking it into smaller steps, and learning the tools needed to build a practical solution.</p>
            <p>I’m looking for an entry-level opportunity where I can contribute with curiosity, consistency, and a willingness to learn. I value clear communication, thoughtful problem-solving, and feedback that helps me become a stronger developer. My goal is to keep strengthening my fundamentals while contributing to products that solve real user problems.</p>
            <a className="inline-link" href="#contact">Let’s connect and build something useful <ArrowRight size={16}/></a>
          </div>
        </div>
        <div className="quick-facts">
          <article><span className="fact-icon"><GraduationCap/></span><div><small>EDUCATION</small><b>B.E. Computer Science & Engineering</b><p>Velammal Engineering College, Chennai</p></div></article>
          <article><span className="fact-icon"><BrainCircuit/></span><div><small>INTERESTS</small><b>Python · AI/ML · Web development</b><p>Learning through projects and practice</p></div></article>
          <article><span className="fact-icon"><BriefcaseBusiness/></span><div><small>CAREER GOAL</small><b>Junior software / AI developer</b><p>Ready to learn and collaborate</p></div></article>
        </div>
      </section>

      <section className="section skills-section" id="skills"><div className="wrap">
        <div className="section-kicker">02 <span>SKILLS</span></div>
        <div className="section-title-row"><h2>Tools I’m growing with.</h2><p>Keep the skills you can comfortably explain in an interview.</p></div>
        <div className="skills-grid skill-cards">{skillGroups.map((group, i) => <article className="skill-group skill-card" key={group.title}><div className="skill-illustration">{[<Code2 size={54}/>,<Globe size={54}/>,<BrainCircuit size={54}/>,<Database size={54}/>][i]}</div><h3>{group.title}</h3><div className="skill-items">{group.items.map(skill => <span className="skill-item" key={skill}>{skill}</span>)}</div><div className="skill-status"><Check size={16}/> Familiar / practiced</div></article>)}</div>
      </div></section>

      <section className="section wrap" id="projects">
        <div className="section-kicker">03 <span>SELECTED PROJECTS</span></div>
        <div className="section-title-row"><h2>Things I’ve worked on.</h2><p>From AI concepts to deployed web apps, these projects show how I practise new skills, solve problems, and turn ideas into working experiences.</p></div>
        <div className="projects-grid">{projectData.map(project => <article className="project-card" key={project.id}>
          <button className="project-image-button" onClick={() => setActiveProject(project)} aria-label={`View details for ${project.title}`}>
            <img src={project.image} alt={project.alt} loading="lazy"/>
            <span className="image-category">{project.category}</span>
            <span className="image-open"><ArrowUpRight size={19}/></span>
          </button>
          <div className="project-info"><div className="project-number">{project.number} / 04</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-bottom"><div className="chips">{project.stack.slice(0,3).map(tag => <span key={tag}>{tag}</span>)}</div>{project.liveUrl ? <a className="arrow-button" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open live ${project.title}`} title="Open live app"><ArrowUpRight size={19}/></a> : <button className="arrow-button" onClick={() => setActiveProject(project)} aria-label={`Read ${project.title} details`}><ArrowUpRight size={19}/></button>}</div></div>
        </article>)}</div>
      </section>

      <section className="section certificates-section" id="certificates"><div className="wrap">
        <div className="section-kicker">04 <span>CERTIFICATES</span></div>
        <div className="section-title-row"><h2>Learning beyond the classroom.</h2><p>Courses and certificates that reflect my continued practice in programming, databases, and modern web technologies. Open any certificate to view the original file.</p></div>
        <div className="certificates-grid">{certificates.map((cert, i) => <article className="certificate-card" key={cert.title}>
          <div className="certificate-top"><span className="certificate-icon"><FileText size={22}/></span><span className="certificate-number">CERT. 0{i+1}</span></div>
          <h3>{cert.title}</h3><p className="certificate-issuer">{cert.issuer}</p><p className="certificate-detail">{cert.detail}</p>
          <a className="certificate-link" href={cert.file} target="_blank" rel="noreferrer">View certificate <ArrowUpRight size={16}/></a>
        </article>)}</div>
      </div></section>

      <section className="section education-section" id="education"><div className="wrap">
        <div className="section-kicker">05 <span>EDUCATION</span></div>
        <h2>Where the journey started.</h2>
        <div className="education-list">
          <article className="education-card"><div className="education-icon"><GraduationCap size={25}/></div><div><span className="education-label">BACHELOR’S DEGREE</span><h3>B.E. Computer Science & Engineering</h3><p>Velammal Engineering College · Chennai, Tamil Nadu</p><div className="education-meta"><span>2022 – 2026</span><span className="meta-dot"/><span>CGPA: 7.53 / 10</span></div></div></article>
          <article className="education-card"><div className="education-icon"><GraduationCap size={25}/></div><div><span className="education-label">HIGHER SECONDARY · CLASS 12</span><h3>RMK Matriculation Higher Secondary School</h3><p>Higher Secondary Certificate (HSC)</p><div className="education-meta"><span>2021 – 2022</span><span className="meta-dot"/><span>85.17%</span></div></div></article>
          <article className="education-card"><div className="education-icon"><GraduationCap size={25}/></div><div><span className="education-label">SECONDARY · CLASS 10</span><h3>RMK Matriculation Higher Secondary School</h3><p>Secondary School Leaving Certificate (SSLC)</p><div className="education-meta"><span>2019 – 2020</span><span className="meta-dot"/><span>83.60%</span></div></div></article>
        </div>
        <div className="resume-callout"><div className="resume-icon"><FileText/></div><div><b>My Resume</b><p>Download or open my latest resume to explore my education, technical skills, projects, training, and certifications.</p></div><div className="resume-actions"><a className="btn btn-dark resume-btn" href="/Madhu-Resume.pdf" download><Download size={16}/> Download Resume</a><a className="btn btn-light resume-btn" href="/Madhu-Resume.pdf" target="_blank" rel="noreferrer">Open in a new tab <ArrowUpRight size={15}/></a></div></div>
      </div></section>

      <section className="contact-section" id="contact"><div className="wrap contact-card">
        <div className="contact-decoration" aria-hidden="true">✳</div><div className="section-kicker">06 <span>CONTACT</span></div>
        <h2>Have an opportunity<br/>or idea in mind?</h2><p className="contact-sub">I’d love to hear from you. Let’s connect and make something useful.</p>
        <div className="contact-actions"><button className="btn btn-dark" onClick={copyEmail}>{emailCopied ? <Check size={16}/> : <Mail size={16}/>} {emailCopied ? 'Email copied' : 'Copy email address'}</button><a className="btn btn-light" href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> Connect on LinkedIn <ArrowUpRight size={15}/></a></div>
        <p className="email-text">{email} <span>— replace with your real email in src/main.jsx</span></p>
      </div></section>
    </main>

    <footer className="site-footer wrap"><a className="logo" href="#home"><span className="logo-mark">m.</span><span>madhu<span className="logo-period">.</span></span></a><p>Made with curiosity and a lot of learning.</p><a href="#home" className="back-top">Back to top ↑</a></footer>

    {activeProject && <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setActiveProject(null); }}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X/></button>
        <img className="modal-image" src={activeProject.image} alt={activeProject.alt}/>
        <div className="modal-content"><span className="modal-category">{activeProject.category}</span><h2 id="modal-title">{activeProject.title}</h2><p>{activeProject.details}</p><div className="chips">{activeProject.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
          <div className="modal-actions">{activeProject.liveUrl ? <a className="btn btn-dark" href={activeProject.liveUrl} target="_blank" rel="noreferrer"><Globe size={16}/> Open live app <ExternalLink size={14}/></a> : <p className="repo-reminder">This project is presented as a project overview. A live demo or source-code link can be added when available.</p>}<button className="btn btn-light" onClick={() => setActiveProject(null)}>Close details</button></div>
        </div>
      </section>
    </div>}
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
