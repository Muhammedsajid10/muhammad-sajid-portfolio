import { useEffect, useState } from 'react'

import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Server,
  ShieldCheck,
  Terminal,
  X
} from 'lucide-react'

import { projects, skills, type Project } from './data'

const EMAIL = 'sajidalhijas@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/mhdsajid8939/'
const GITHUB = 'https://github.com/Muhammedsajid10'
const filters = ['All','Company','Independent','Portfolio','Freelance'] as const

type Filter = typeof filters[number]

function ProjectArtwork({project}:{project:Project}) {
  return <div className={`project-art art-${project.style}`} aria-hidden="true">
    <div className="art-no">{project.number} / 07</div>
    {project.id === 'allora' ? <div className="illustration calendar"><div className="cal-header"><span/><span/><span/></div><div className="cal-grid">{Array.from({length:21},(_,i)=><i key={i} className={i===10||i===11||i===17?'selected':''}/>)}</div><div className="cal-tag">APPOINTMENT CONFIRMED <Check size={12}/></div></div>
    : project.id === 'travel' ? <div className="illustration travel-art"><Globe2 size={108} strokeWidth={0.65}/><div className="travel-path"/><div className="travel-label">EXPLORE / BOOK / GO</div></div>
    : project.id === 'workflow' ? <div className="illustration workflow-art"><div className="flow-node"><Check size={19}/> DESIGN</div><div className="flow-node second"><Code2 size={20}/> BUILD</div><div className="flow-node third"><ShieldCheck size={19}/> SHIP</div></div>
    : project.id === 'dukaan' ? <div className="illustration retail-art"><div className="retail-bar"/><div className="retail-cards"><span/><span/><span/></div><div className="retail-stat">₹ <strong>POS</strong></div></div>
    : project.id === 'himate' ? <div className="illustration chat-art"><div className="bubble bubble-one">Hello 👋</div><div className="bubble bubble-two">Connected ●</div><div className="bubble bubble-three">•••</div></div>
    : project.id === 'tahfeel' ? <div className="illustration architecture-art"><div className="arch-line a1"/><div className="arch-line a2"/><div className="arch-line a3"/><div className="arch-line a4"/><div className="arch-word">TAHFEEL</div></div>
    : <div className="illustration employee-art"><div className="user-orb">●</div><div className="user-lines"><span/><span/><span/></div><div className="shift-label">SHIFT SCHEDULE</div></div>}
    <div className="art-bottom">{project.type.toUpperCase()}</div>
  </div>
}

function Header(){
  const [open,setOpen]=useState(false)
  useEffect(()=>{document.body.classList.toggle('menu-open',open);return ()=>document.body.classList.remove('menu-open')},[open])
  const links=[['About','#about'],['Work','#work'],['Skills','#skills'],['Experience','#experience']]
  return <header className="site-header"><div className="container nav-inner"><a href="#home" className="logo" aria-label="Muhammad Sajid home"><span>MS</span><span className="logo-dot">.</span></a><nav className={open?'nav-links nav-open':'nav-links'} aria-label="Main navigation">{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<a className="mobile-contact" href="#contact" onClick={()=>setOpen(false)}>Let's talk <ArrowUpRight size={15}/></a></nav><a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16}/></a><button className="menu-button" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={23}/>:<Menu size={23}/>}</button></div></header>
}

function SectionTitle({eyebrow,title,description}:{eyebrow:string,title:string,description?:string}){return <div className="section-title"><span className="eyebrow"><span className="eyebrow-square"/>{eyebrow}</span><h2>{title}</h2>{description&&<p>{description}</p>}</div>}

function ProjectCard({project}:{project:Project}) {return <article className="project-card"><ProjectArtwork project={project}/><div className="project-info"><div className="project-topline"><span className="project-category">{project.category} project</span><span className="project-index">/ {project.number}</span></div><h3>{project.name}</h3><p className="project-summary">{project.summary}</p><p className="project-detail">{project.details}</p><div className="tech-tags">{project.stack.map(t=><span key={t}>{t}</span>)}</div><div className="project-footer">{project.url?<a target="_blank" rel="noopener noreferrer" href={project.url} className="project-link">View on GitHub <ArrowUpRight size={17}/></a>:<span className="private-note"><ShieldCheck size={15}/> Private source</span>}{project.status&&<span className="project-status">{project.status}</span>}</div></div></article>}

function App(){
 const [filter,setFilter]=useState<Filter>('All');const [copied,setCopied]=useState(false)
 const visible=filter==='All'?projects:projects.filter(p=>p.category===filter)
 const copyEmail=async()=>{try{await navigator.clipboard.writeText(EMAIL);setCopied(true);window.setTimeout(()=>setCopied(false),1800)}catch{window.location.href=`mailto:${EMAIL}`}}
 return <><Header/><main id="home">
  <section className="hero"><div className="hero-orbit orbit-1"/><div className="hero-orbit orbit-2"/><div className="container hero-content"><div className="hero-top"><div className="availability"><span className="pulse-dot"/> OPEN TO OPPORTUNITIES IN UAE</div><span className="hero-place"><MapPin size={14}/> Dubai, United Arab Emirates</span></div><div className="hero-heading-wrap"><div className="hero-kicker">HELLO, I'M MUHAMMAD SAJID <span className="hand">✳</span></div><h1>Building ideas<br/>into <span>real-world</span><br/>software<span className="period">.</span></h1><div className="hero-side-note"><span className="tiny-line"/> FULL-STACK <br/>& BACKEND DEVELOPER</div></div><div className="hero-bottom"><p>I build practical web applications, thoughtful APIs and scalable business workflows. From booking systems to backend services, I like solving the problems behind the product.</p><div className="hero-actions">
  <a className="button button-lime" href="#work">
    Explore my work <ArrowUpRight size={18}/>
  </a>
  <a
    className="button button-ghost"
    href="https://wa.me/971563740350?text=Hi%20Sajid%2C%20I%20came%20across%20your%20developer%20portfolio."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contact Muhammad Sajid on UAE WhatsApp"
  >
    <MessageCircle size={18}/> WhatsApp UAE <ArrowUpRight size={17}/>
  </a>
</div></div><div className="hero-bottom-line"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={18}/><span>REACT <i/> NODE.JS <i/> DATABASES</span></div></div></section>

  
<section id="about" className="about section">
  <div className="container">
    <div className="about-grid">
      <div>
        <span className="eyebrow">
          <span className="eyebrow-square" />
          01 / ABOUT ME
        </span>

        <h2 className="about-headline">
          Code that works.
          <br />
          <em>Solutions that matter.</em>
        </h2>
      </div>

      <div className="about-right">
        <p>
          I'm a <strong>Full-Stack / MERN Developer</strong> with
          around two years of hands-on software development
          experience across collaborative company projects
          and independent builds.
        </p>

        <p>
          My work spans React user interfaces, Node.js and
          Express APIs, and database-backed business
          applications. Beyond development, I also handle{" "}
          <strong>DevOps and deployment responsibilities</strong>,
          including Linux server management, application
          hosting, and deployment troubleshooting.
        </p>

        <div className="about-links">
          <a href={GITHUB} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
            <ArrowUpRight size={15} />
          </a>

          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>

    <div className="metrics">
      <div>
        <span className="metric-figure">
          02<span>+</span>
        </span>
        <span className="metric-caption">
          Years of hands-on
          <br />
          development experience
        </span>
      </div>

      <div>
        <span className="metric-figure">07</span>
        <span className="metric-caption">
          Projects featured
          <br />
          across different domains
        </span>
      </div>

      <div>
        <span className="metric-figure">
          <Server size={36} />
        </span>
        <span className="metric-caption">
          Hands-on DevOps &amp; deployment
          <br />
          experience
        </span>
      </div>
    </div>
  </div>
</section>


  <section id="work" className="work-section section"><div className="container"><div className="work-heading"><SectionTitle eyebrow="02 / SELECTED WORK" title="Projects with purpose." description="A mix of company contributions, independent builds, backend portfolio work and a freelance client website."/><div className="project-count">({String(visible.length).padStart(2,'0')} PROJECTS)</div></div><div className="filter-bar" role="group" aria-label="Filter projects">{filters.map(f=><button key={f} className={filter===f?'filter active':'filter'} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="project-grid">{visible.map(p=><ProjectCard project={p} key={p.id}/>)}</div><div className="work-note"><ShieldCheck size={18}/><p><strong>Transparency matters.</strong> Organization projects are credited as collaborative work, and in-progress/private projects are clearly labeled.</p></div></div></section>

  <section id="skills" className="skills-section section"><div className="container"><SectionTitle eyebrow="03 / THE TOOLKIT" title="Tools of the trade." description="Technology I use to design, build, integrate and deploy practical applications."/><div className="skills-grid">{skills.map((group,i)=><div className="skill-panel" key={group.category}><div className="skill-panel-top"><span>0{i+1}</span>{i===0?<Layers3 size={20}/>:i===1?<Code2 size={20}/>:i===2?<Globe2 size={20}/>:<Terminal size={20}/>}</div><h3>{group.category}</h3><div className="skill-cloud">{group.items.map(item=><span key={item}>{item}</span>)}</div></div>)}</div><p className="skills-note">* DevOps section highlights confirmed experience with Hostinger VPS, Ubuntu and SSH. Tool familiarity and production ownership are not the same thing.</p></div></section>

  
<section id="experience" className="experience-section section">
  <div className="container experience-grid">
    <div>
      <SectionTitle
        eyebrow="04 / EXPERIENCE"
        title="Experience beyond the editor."
        description="Real projects, multi-role business workflows, and hands-on development and deployment."
      />

      <div className="experience-quote">
        “The best engineering work happens when clean code meets actual
        business needs.”
      </div>
    </div>

    <div className="timeline">
      {/* Professional Experience */}

      <div className="timeline-item">
        <div className="timeline-dot" />

        <div className="timeline-date">
          SEP 2024 — PRESENT <span>·</span> KOZHIKODE, INDIA
        </div>

        <h3>Full-Stack Developer</h3>

        <div className="timeline-org">
          Novox Technologies
        </div>

        <p>
          Worked across SPA management and travel-booking projects,
          developing REST APIs, appointment scheduling logic,
          employee workflows, and frontend/backend integrations.
          Also handled DevOps and deployment responsibilities,
          including Linux server management, application hosting,
          and deployment troubleshooting.
        </p>

        <div className="timeline-tags">
          <span>Backend APIs</span>
          <span>React</span>
          <span>MongoDB</span>
          <span>DevOps &amp; Deployment</span>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot" />

        <div className="timeline-date">
          JUN 2024 — SEP 2024 <span>·</span> KOZHIKODE, INDIA
        </div>

        <h3>Junior Full-Stack Developer</h3>

        <div className="timeline-org">
          Seclob Technologies
        </div>

        <p>
          Worked with React UI components, REST API integration,
          and authentication-related frontend flows,
          collaborating as part of a development team.
        </p>

        <div className="timeline-tags">
          <span>React</span>
          <span>REST APIs</span>
          <span>Authentication</span>
        </div>
      </div>

      {/* Education */}

      <div className="timeline-item education">
        <div className="timeline-dot" />

        <div className="timeline-date">
          2024 — PRESENT <span>·</span> EDUCATION
        </div>

        <h3>
          Bachelor of Computer Applications{" "}
          <span className="education-status">Pursuing</span>
        </h3>

        <div className="timeline-org">
          Yenepoya University
        </div>

        <p>Distance education · Mangalore, India</p>
      </div>

      <div className="timeline-item education">
        <div className="timeline-dot" />

        <div className="timeline-date">
          2019 — 2022 <span>·</span> EDUCATION
        </div>

        <h3>Diploma in Computer Engineering</h3>

        <div className="timeline-org">
          M-Dit Polytechnic College
        </div>

        <p>Kozhikode, Kerala, India</p>
      </div>

      <div className="timeline-item education">
        <div className="timeline-dot" />

        <div className="timeline-date">
          2017 — 2019 <span>·</span> EDUCATION
        </div>

        <h3>Higher Secondary — Computer Science</h3>

        <div className="timeline-org">
          JDT Islam Iqraa HSS
        </div>

        <p>Kozhikode, Kerala, India</p>
      </div>
    </div>
  </div>
</section>


  <section className="approach-section section"><div className="container"><SectionTitle eyebrow="05 / HOW I THINK" title="What I enjoy working on."/><div className="approach-grid"><div className="approach-card"><div className="approach-icon"><Server size={25}/></div><span>01 / BACKEND ENGINEERING</span><h3>Solid APIs,<br/>clear systems.</h3><p>Designing REST APIs, data models, secure access flows and useful integrations that solve real business problems.</p><ArrowUpRight className="approach-arrow" size={24}/></div><div className="approach-card"><div className="approach-icon"><Layers3 size={25}/></div><span>02 / PRODUCT THINKING</span><h3>From UI to<br/>business logic.</h3><p>Connecting polished interfaces with practical workflows such as bookings, inventory, schedules and dashboards.</p><ArrowUpRight className="approach-arrow" size={24}/></div><div className="approach-card"><div className="approach-icon"><Terminal size={25}/></div><span>03 / SHIPPING</span><h3>Build. Debug.<br/>Deploy. Improve.</h3><p>Tracing issues across frontend and backend, deploying to Linux environments and learning from real-world usage.</p><ArrowUpRight className="approach-arrow" size={24}/></div></div></div></section>

  <section id="contact" className="contact-section"><div className="container"><div className="contact-top"><span className="eyebrow"><span className="eyebrow-square"/> 06 / LET'S CONNECT</span><span className="availability"><span className="pulse-dot"/> AVAILABLE FOR UAE OPPORTUNITIES</span></div><h2>Have a role in mind?<br/><span>Let's build something</span><br/>meaningful<span className="period">.</span></h2><div className="contact-bottom"><p>Open to Full-Stack, MERN Stack and Node.js / Backend Developer roles in the UAE. I'm happy to discuss my projects, technical contributions and experience.</p><div className="contact-buttons"><a href={`mailto:${EMAIL}`} className="button button-lime">Email me <Mail size={18}/></a><button className="button button-outline" onClick={copyEmail}>{copied?'Copied!':'Copy email'} {copied?<Check size={17}/>:<ExternalLink size={17}/>}</button></div></div><div className="whatsapp-section" aria-label="WhatsApp contact options">
            <div className="whatsapp-heading">
              <span>OR CONNECT ON WHATSAPP</span>
              <span>Choose your preferred number</span>
            </div>
            <div className="whatsapp-contacts">
              <a
                className="whatsapp-contact"
                href="https://wa.me/971563740350?text=Hi%20Sajid%2C%20I%20came%20across%20your%20developer%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Muhammad Sajid on UAE WhatsApp at +971 56 374 0350"
              >
                <span className="whatsapp-country">🇦🇪 UAE · PRIMARY</span>
                <strong className="whatsapp-number">+971 56 374 0350</strong>
                <span className="whatsapp-action">Chat on WhatsApp <ArrowUpRight size={17} /></span>
              </a>
              <a
                className="whatsapp-contact"
                href="https://wa.me/918089391497?text=Hi%20Sajid%2C%20I%20came%20across%20your%20developer%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Muhammad Sajid on India WhatsApp at +91 8089391497"
              >
                <span className="whatsapp-country">🇮🇳 INDIA</span>
                <strong className="whatsapp-number">+91 8089391497</strong>
                <span className="whatsapp-action">Chat on WhatsApp <ArrowUpRight size={17} /></span>
              </a>
            </div>
          </div>
          <div className="contact-email">{EMAIL}</div></div></section>
 </main><footer className="footer"><div className="container footer-inner"><a href="#home" className="footer-brand">MS<span>.</span></a><span>© {new Date().getFullYear()} Muhammad Sajid. Built with React & TypeScript.</span><div className="footer-social"><a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19}/></a><a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19}/></a><a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={19}/></a><a href="#home" aria-label="Back to top"><ChevronDown className="rotate" size={19}/></a></div></div></footer></>
}
export default App
