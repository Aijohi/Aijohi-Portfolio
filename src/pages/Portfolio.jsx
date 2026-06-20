import { useState, useEffect } from "react";
import logo from "../assets/Images/Portfolio/Logo.svg";
import {
  FiArrowUpRight,
  FiMail,
  FiLinkedin,
  FiInstagram,
  FiArrowLeft,
  FiArrowRight,
  FiChevronRight,
  FiArrowDown,
  FiPlus,
  FiMinus,
} from "react-icons/fi";

import { FaXTwitter } from "react-icons/fa6";

import { FiMenu, FiX } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";
import blogPattern from "../assets/Images/Portfolio/blog-pattern.png";
import profilePhoto from "../assets/Images/Portfolio/aijohi-photo.png";
import avatarPhoto from "../assets/Images/Portfolio/aijohi-avatar.png";
import elev8 from "../assets/Images/Portfolio/Elev8.png";
import iseSchools from "../assets/Images/Portfolio/ise-schools.png";
import healthAI from "../assets/Images/Portfolio/health-ai.png";
import evconnect from "../assets/Images/Portfolio/evconnect.png";
import faithverse from "../assets/Images/Portfolio/faithverse.png";
import optimusAcademy from "../assets/Images/Portfolio/optimus-academy.png";
import dominos from "../assets/Images/Portfolio/dominos-redesign.png";

const navItems = [
  { id: "About", label: "About" },
  { id: "Services", label: "Services" },
  { id: "Works", label: "Works" },
  { id: "Experience", label: "Experience" },
  { id: "how-i-work", label: "How I Work" },
  { id: "Testimonials", label: "Testimonials" },
  { id: "Blog", label: "Blog" },
  { id: "FAQ", label: "FAQ" },
  { id: "Contact", label: "Contact" },
];

const skills = [
  "Figma",
  "Framer",
  "Notion",
  "Whimsical",
  "Product Design",
  "User Research",
  "UX Strategy",
  "Design Systems",
];

const services = [
  {
    number: "1",
    title: "Product Design",
    description:
      "I turn ideas into useful products through research, user flows, wireframes, and polished interfaces.",
  },
  {
    number: "2",
    title: "Framer Development",
    description:
      "I build responsive websites and landing pages in Framer, helping brands launch quickly without traditional development.",
  },
  {
    number: "3",
    title: "Prototyping",
    description:
      "I create interactive prototypes that bring ideas to life and help teams test concepts early.",
  },
  {
    number: "4",
    title: "User Research",
    description:
      "I uncover customer needs, behaviours, and market opportunities to help teams make informed product decisions.",
  },
  {
    number: "5",
    title: "Design Systems",
    description:
      "I create scalable components and design standards that keep products consistent and easy to maintain.",
  },
  {
    number: "6",
    title: "Usability Testing",
    description:
      "I evaluate experiences with real users, uncover friction points, and improve products through evidence-based feedback.",
  },
];

const projects = [
  {
    title: "EbonyLife - Elev8",
    description:
      "A streaming and entertainment experience designed for content discovery and user engagement.",
    role: "Product Design",
    year: "2025",
    image: elev8,
    link: "https://ebonylifeonplus.com/content/elev8-1",
  },
  {
    title: "isé Schools",
    description:
      "A solution for Africa’s tech education, focused on access, learning, and digital growth.",
    role: "Product Design",
    year: "2024",
    image: iseSchools,
    link: "https://www.behance.net/gallery/202331893/is-Schools-A-solution-for-Africas-tech-education",
  },
  {
    title: "HEALTH.AI",
    description:
      "An AI healthcare documentation experience built around clarity, support, and usability.",
    role: "Product Design",
    year: "2024",
    image: healthAI,
    link: "https://www.behance.net/gallery/191775215/HEALTHAI-DOCUMENTATION",
  },
  {
    title: "EVConnect",
    description:
      "A mobile app for locating electric vehicle charging stations with ease.",
    role: "Product Design",
    year: "2024",
    image: evconnect,
    link: "https://www.behance.net/gallery/184288427/EVConnect-Electric-Vehicle-Charging-Station-Locator-App",
  },
  {
    title: "FaithVerse Kids Bible App",
    description:
      "A Bible learning app designed to help children discover and grow in faith.",
    role: "Product Design",
    year: "2024",
    image: faithverse,
    link: "https://www.behance.net/gallery/208532937/FaithVerse-Where-kids-discover-and-grow-in-faith",
  },
  {
    title: "Optimus AI LMS",
    description:
      "A learning management system designed for structured digital learning.",
    role: "Product Design",
    year: "2025",
    image: optimusAcademy,
    link: "https://www.behance.net/gallery/241676555/A-LEARNIG-MANAGEMENT-SYSTEM",
  },
  {
    title: "Domino’s Pizza App Redesign",
    description:
      "A case study focused on improving mobile ordering and user experience.",
    role: "UI/UX Redesign",
    year: "2023",
    image: dominos,
    link: "https://www.behance.net/gallery/164289075/CASE-STUDY-on-Redesign-of-Dominos-Pizza-Mobile-App",
  },
];

const experiences = [
  {
    role: "Product Designer",
    company: "Unshelled Consultancy",
    period: "2025 - Present",
  },

  {
    role: "Associate Lead Product Designer",
    company: "Optimus AI Labs",
    period: "2024 - 2025",
  },

  {
    role: "Product Designer",
    company: "ISE Nigeria",
    period: "2023 -2024",
  },

  {
    role: "Product Designer",
    company: "SNET Track Services",
    period: "2020 - 2023",
  },

  {
    role: "Product Designer",
    company: "Excel Craftman",
    period: "2020 - 2021",
  },
];

  const testimonials = [
  {
    name: "Shammah Ugbebor",
    role: "Product Designer",
    quote:
      "I can confidently say Otu Faith is one of the best Senior UI/UX Designers I’ve ever collaborated with. Her creativity, attention to detail, and deep understanding of user needs consistently elevated our projects. She doesn’t just design beautiful interfaces, she solves real problems and thinks strategically. Otu Faith is also a fantastic team player, always ready to support, mentor, and bring out the best in everyone around them. Any team would be lucky to have her."
  },
  {
    name: "Amirah Oyegoke",
    role: "Product Designer",
    quote:
      "Faith is a thoughtful and committed designer who brings clarity, intention, and creativity to every project. She takes strong ownership of her work and approaches each challenge with care, making sure every decision supports a better user experience. She is a focused collaborator who communicates well, adapts easily, and stays solution oriented even when plans change. Over time, she has grown in skill and confidence, becoming a reliable and valuable member of the team. Any team would be glad to work with her."
  },
  {
    name: "Ohani Kizito",
    role: "Frontend Software Developer",
    quote:
      "I wholeheartedly recommend Faith Otu. During our time at Ise, where she was in Product Design and I was in Development, I was consistently impressed by her brilliant mind and keen eye for good design. Faith possesses a remarkable ability to create intuitive and aesthetically pleasing user experiences. Her attention to detail and collaborative approach made her a valuable asset. I am confident she will excel in any product design role."
  },
  {
    name: "Frank Anwana, MBA",
    role: "Senior Product Manager",
    quote:
      "As a Product Lead or Founder, having a Product Designer who is focused on user-centric, intuitive designs and actively collaborates as a team member is invaluable. Working with Otu Faith has been an incredible experience. She is highly adaptable, eager to learn, and consistently supports others in achieving project goals. I’d highly recommend her for any opportunity she’s qualified for."
  },
  {
    name: "Temitope Sharon",
    role: "Founder, Ise Schools",
    quote:
      "Faith’s growth over the past two years has been impressive. She has shown strong dedication to learning, continuously improving her design thinking and expanding her skill set across product design and user research. She communicates her design decisions with clarity, confidently connecting user needs to broader business goals and adapts well to change, handles complexity with calm focus, and approaches challenges with a solution-oriented mindset."
  },
  {
    name: "Samuel Balogun",
    role: "Product Design Lead",
    quote:
      "Working with Faith at Optimus has been a great experience. As an Associate Product Design Lead, she plays a key role in supporting design direction and guiding the team’s work. She brings clarity, strong ownership, and thoughtful decision-making to every project, consistently connecting user needs with business goals. Faith adapts well in fast-paced environments, communicates her ideas clearly, and continues to grow as a dependable designer and leader."
  },
  {
    name: "Aramide Fatai",
    role: "Product Designer",
    quote:
      "Working with Faith at Optimus was a great experience. She is a thoughtful and collaborative designer who approaches her work with clarity and intention. Faith communicates her ideas well, takes feedback constructively, and consistently focuses on creating meaningful user experiences. She adapts quickly, supports the team when needed, and brings a calm, solution-oriented mindset to every project."
  },
  {
    name: "Samuel Osewa",
    role: "Product Designer",
    quote:
      "Working with Faith at Optimus was a positive experience. She is a dedicated designer who approaches problems thoughtfully and communicates her ideas with clarity. Faith takes ownership of her work, collaborates well with others, and consistently focuses on creating user-centered solutions. She adapts well to change and brings a steady, reliable presence to the team, making her someone you can always count on."
  }
];

const blogPosts = [
  {
    category: "LinkedIn",
    title: "Designers Dress Too",
    excerpt: "A reflection on identity, confidence, and showing up beyond the work.",
    image: blogPattern,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7248233815649734656/",
  },
  {
    category: "Blog",
    title: "Pain Introduced Me To Myself",
    excerpt: "A personal story about healing, resilience, and rediscovering myself.",
    image: blogPattern,
    link: "https://goofyshortgirl.wordpress.com/2025/12/05/one-year-after-my-surgery-the-day-pain-introduced-me-to-myself/",
  },
  {
    category: "LinkedIn",
    title: "Starting Over At Any Age",
    excerpt: "A reminder that starting again can still lead to something meaningful.",
    image: blogPattern,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7249690056888569857/",
  },
  {
    category: "Blog",
    title: "The Cost Of Staying Silent",
    excerpt: "Thoughts on comparison, self-worth, and moving at your own pace.",
    image: blogPattern,
    link: "https://goofyshortgirl.wordpress.com/2025/11/23/when-comparison-becomes-a-shadow/",
  },
  {
    category: "LinkedIn",
    title: "What Nobody Tells Beginners",
    excerpt: "A simple look at the lessons that come with growing in product design.",
    image: blogPattern,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7305611596469297153/",
  },
  {
    category: "Blog",
    title: "The Weight Of Waiting",
    excerpt: "A reflection on patience, timing, and learning to stay hopeful.",
    image: blogPattern,
    link: "https://goofyshortgirl.wordpress.com/2025/09/23/the-weight-of-waiting/",
  },
];

const faqs = [
  {
    question: "What type of projects do you work on?",
    answer:
      "I work on web platforms, mobile applications, dashboards, internal tools, and digital products across different industries.",
  },

  {
    question: "How do you approach a new project?",
    answer:
      "I start by understanding the problem, users, and business goals. From there, I explore ideas, create wireframes, prototype solutions, and refine the experience through feedback.",
  },

  {
    question: "Can you help redesign an existing product?",
    answer:
      "Yes. I can review and improve existing products, identify usability issues, and create a clearer user experience.",
  },
  
  {
    question: "Do you work with developers?",
    answer:
      "Yes. I collaborate closely with developers to ensure designs are practical, consistent, and implemented as intended.",
  },
  {
    question: "Are you available for freelance or contract work?",
    answer:
      "Yes. I am open to freelance projects, contract opportunities, and meaningful collaborations.",
  },
];


function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [githubRepos, setGithubRepos] = useState([]);
  const [githubLoading, setGithubLoading] = useState(true);

  const testimonialsPerPage = 2;

  const visibleTestimonials = testimonials.slice(
  testimonialIndex,
  testimonialIndex + testimonialsPerPage
  );


  const [blogIndex, setBlogIndex] = useState(0);
  const blogsPerPage = 3;

  const visibleBlogs = blogPosts.slice(blogIndex, blogIndex + blogsPerPage);
  
  const showPreviousBlogs = () => {
    setBlogIndex((prev) => Math.max(prev - blogsPerPage, 0));
  };

  const showNextBlogs = () => {
    setBlogIndex((prev) =>
      prev + blogsPerPage >= blogPosts.length ? prev : prev + blogsPerPage
    );
  };

useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 140;

    let currentSection = "About";

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);

      if (section && section.offsetTop <= scrollPosition) {
        currentSection = item.id;
      }
    });

    setActiveSection(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const selectedRepoNames = [
  "mid-capstone-project",
  "Completed-Unsplash-Gallery-Assignment",
  "Hertechtrail-product",
  "tailwindcss-website1",
];

useEffect(() => {
  fetch("https://api.github.com/users/Aijohi/repos")
    .then((response) => response.json())
    .then((data) => {
      const selectedRepos = selectedRepoNames
        .map((repoName) => data.find((repo) => repo.name === repoName))
        .filter(Boolean);

      setGithubRepos(selectedRepos);
      setGithubLoading(false);
    })
    .catch((error) => {
      console.log("GitHub API error:", error);
      setGithubLoading(false);
    });
}, []);

  return (
    <main className="portfolio-page">
        <header className="portfolio-nav">
  <a href="#About" className="portfolio-logo">
    <img src={logo} alt="Aijohi logo" />
  </a>

  <nav>
    {navItems.map((item) => (
      <a
        key={item.id}
        href={`#${item.id}`}
        className={activeSection === item.id ? "active" : ""}
      >
        {item.label}
      </a>
    ))}
  </nav>

  <div className="nav-actions">
    <a href="#Contact" className="nav-cta">
      Let’s talk
    </a>

    <button
      className="menu-button"
      onClick={() => setIsMenuOpen(true)}
      aria-label="Open menu"
    >
      <FiMenu />
    </button>
  </div>

  <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
    <div className="mobile-menu-card">
      <div className="mobile-menu-top">
        <img src={logo} alt="Aijohi logo" />

        <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
          <FiX />
        </button>
      </div>

      <p className="mobile-menu-label">Menu</p>

      <div className="mobile-menu-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}

        <a href="#Contact" onClick={() => setIsMenuOpen(false)}>
          Let’s talk
        </a>
      </div>
    </div>
  </div>
</header>

      <section id="About" className="portfolio-hero">
        <div className="hero-left">
          <div className="hello-pill">
            <img src={avatarPhoto} alt="Aijohi avatar" />
            <span>Hello, I am Aijohi</span>
          </div>

          <h1>I design clear and useful products for real people</h1>

          <p>
            I am Otu Faith Aijohi, a self-taught UI and UX designer. I turn
            ideas into simple and strong experiences that work well. I plan,
            sketch, test, and improve every screen so users can move with ease.
          </p>

          <div className="hero-actions">
            <a
              href="https://drive.google.com/file/d/1HZiCXnBxkzgP91Tc7Fo-MwHQIaoHIknD/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              View my resume
            </a>

            <a href="mailto:faithaijohi@gmail.com" className="email-link">
              <FiMail size={20} />
              faithaijohi@gmail.com
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>4+</strong>
              <span>years of experience</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>projects completed</span>
            </div>

            <div>
              <strong>3+</strong>
              <span>industries explored</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>usability tests conducted</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="portrait-card">
            <img src={profilePhoto} alt="Aijohi" />
          </div>

          <p>
            I like turning complex ideas into simple, user-friendly designs that
            just work.
          </p>

          <div className="social-icons">
            <a
            href="https://www.linkedin.com/in/otu-faith"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            >
            <FiLinkedin />
            </a>

            <a
              href="https://www.behance.net/otufaithaijohi3"
              target="_blank"
              rel="noreferrer"
              aria-label="Behance"
            >
              Be
            </a>

            <a
              href="https://www.instagram.com/cr8tive_aijohi/?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>
          </div>
        </div>
      </section>

      <div className="skills-marquee">
        <div className="skills-track">
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`}>
              {skill} <b>✶</b>
            </span>
          ))}
        </div>
      </div>

      <section id="Services" className="portfolio-section services-section">
        <div className="services-header">
          <p className="eyebrow">01 - What I help with</p>

          <h2>
          Everything you need to move an idea from concept to experience.
          </h2>
        </div>

          <div className="services-grid"> 
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-number">{service.number}</div>

                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
        </div>
        
      </section>

      <section id="Works" className="portfolio-section works-section">
        <div className="works-header">
          <p className="eyebrow">02 - Selected Projects</p>

          <h2>A glimpse into my work</h2>

          <p className="works-tagline">
            From “let me try this” to “hey, this looks nice.”
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.title}>
              <div className="project-copy">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-meta">
                  <div>
                    <strong>{project.role}</strong>
                    <span>Role</span>
                  </div>

                  <div>
                    <strong>{project.year}</strong>
                    <span>Year</span>
                  </div>
                </div>

                <a href={project.link} target="_blank" rel="noreferrer">
                  View project <FiArrowUpRight />
                </a>
              </div>

              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </article>
          ))}
        </div>

        <div className="works-footer">
          <a
            href="https://www.behance.net/otufaithaijohi3"
            target="_blank"
            rel="noreferrer"
            className="primary-btn works-btn"
          >
            View more projects
          </a>
        </div>
      </section>
      <div className="additional-products-card">
  <div className="additional-products-top">
    <div className="additional-products-icon">
      <FiLayers />
    </div>

    <div>
      <h3>Additional Products & Platforms</h3>
    </div>
  </div>

  <div className="additional-products-list">
    <div>
      <strong>SmartMenu</strong>
      <p>Restaurant operations platform available across web and mobile.</p>
    </div>

    <div>
      <strong>AltTill</strong>
      <p>Digital banking and operations platform for Alternative Bank.</p>
    </div>
    
    <div>
      <strong>eeV AI</strong>
      <p>
        AI-powered customer support platform focused on faster resolutions and
        improved customer experiences.
      </p>
    </div>

    <div>
      <strong>Optimus AI Labs Website</strong>
      <p>Digital platform supporting AI education and innovation.</p>
    </div>

    <div>
      <strong>Unshelled Consultancy Website</strong>
      <p>Corporate website focused on brand storytelling and digital presence.</p>
    </div>

    <div>
      <strong>Asavani</strong>
      <p>Digital agriculture platform connecting farmers with modern opportunities.</p>
    </div>
  </div>
</div>

      <section id="Github" className="portfolio-section github-section">
  <div className="github-header">
    <p className="eyebrow">03 - GitHub API</p>
    <h2>Recent GitHub Repositories</h2>
    <p>
      A few repositories fetched directly from my GitHub profile using the GitHub API.
    </p>
  </div>

  {githubLoading ? (
    <p className="github-loading">Loading repositories...</p>
  ) : (
    <div className="github-grid">
      {githubRepos.map((repo) => (
        <article className="github-card" key={repo.id}>
          <h3>{repo.name}</h3>

          <p>
            {repo.description || "No description available for this repository."}
          </p>

          <div className="github-meta">
            <span>{repo.language || "Code"}</span>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              View repo <FiArrowUpRight />
            </a>
          </div>
        </article>
      ))}
    </div>
  )}
</section>

      <section id="Experience" className="portfolio-section experience-section">

        <div className="experience-header">
        <p className="eyebrow">04 - Experience</p>

        <h2>Experience that shapes useful design</h2>

        <p>
          From client websites to product platforms, I have worked across research,
          wireframes, prototypes, design systems, and user-friendly interfaces for
          web and mobile products.
        </p>
        </div>
        
        <div className="experience-canvas">
        <div className="experience-list">
          {experiences.map((item) => (
          <div className="experience-row" key={`${item.company}-${item.period}`}>
          <div>
            <h3>{item.role}</h3>
            <p>{item.company}</p>
          </div>
          
          <span>{item.period}</span>
          </div>
          ))}
        </div>
       </div> 
      </section>

  <section id="how-i-work" className="portfolio-section how-section">
  <div className="how-canvas">
    <div className="how-header">
      <p className="eyebrow">05 - How I work</p>

      <h2>
        The tools, mindset, and methods I use to turn ideas into useful digital
        products.
      </h2>
    </div>

    <div className="how-cards">
      <article className="how-card">
        <span>01</span>
        <h3>I learn by doing</h3>
        <p>
          I improve through practice, research, experimentation, and continuous
          learning.
        </p>
      </article>

      <article className="how-card">
        <span>02</span>
        <h3>I explain things simply</h3>
        <p>
          I communicate ideas clearly and help teams understand problems without
          unnecessary confusion.
        </p>
      </article>

      <article className="how-card">
        <span>03</span>
        <h3>I design for real people</h3>
        <p>
          I test ideas, ask questions, and make design decisions based on real
          user needs.
        </p>
      </article>
    </div>

    <div className="tools-panel">
      <div>
        <h3>Tools</h3>
        <div className="skill-tags">
          <span>Figma</span>
          <span>Framer</span>
          <span>Canva</span>
          <span>Whimsical</span>
          <span>Notion</span>
        </div>
      </div>

      <div>
        <h3>Design & Research</h3>
        <div className="skill-tags">
          <span>User Research</span>
          <span>Wireframing</span>
          <span>Prototyping</span>
          <span>Design Systems</span>
          <span>User Flows</span>
          <span>UX Strategy</span>
          <span>Usability Testing</span>
          <span>Information Architecture</span>
        </div>
      </div>

      <div>
        <h3>Currently Growing</h3>
        <div className="skill-tags">
          <span>Frontend Development</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Tailwind CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </div>
    </div>
  </div>
</section>

  <section id="Testimonials" className="portfolio-section testimonials-section">
  <div className="testimonial-header">
    <p className="eyebrow">06 - From those I worked with</p>
    <h2>Thoughts on working with me</h2>
    <p>
      A few reflections from clients, teammates, and people who have experienced
      my design work.
    </p>
  </div>

  <div className="testimonial-grid">
    {visibleTestimonials.map((item) => (
      <article className="testimonial-card" key={item.name}>
        <div className="testimonial-top">
          <div>
            <h3>{item.name}</h3>
            <span>{item.role}</span>
          </div>

          <strong>“</strong>
        </div>

        <p>{item.quote}</p>
      </article>
    ))}
  </div>
  
  <div className="testimonial-controls">
  <button
    className="testimonial-control-btn"
    onClick={() =>
      setTestimonialIndex((prev) =>
        prev === 0 ? testimonials.length - testimonialsPerPage : prev - testimonialsPerPage
      )
    }
    aria-label="Previous testimonial"
  >
    <FiArrowLeft />
  </button>

  <button
    className="testimonial-control-btn"
    onClick={() =>
      setTestimonialIndex((prev) =>
        prev + testimonialsPerPage >= testimonials.length
          ? 0
          : prev + testimonialsPerPage
      )
    }
    aria-label="Next testimonial"
  >
    <FiArrowRight />
  </button>
</div>
</section>

  <section id="Blog" className="portfolio-section blog-section">
  <div className="blog-canvas">
    <div className="blog-header">
      <p className="eyebrow">07 - From my mind to yours</p>

      <h2>Thoughts, Stories, and Lessons</h2>

      <p>
        A mix of design, growth, career lessons, personal reflections, and
        experiences from the journey so far.
      </p>
    </div>

    <div className="blog-grid">
      {visibleBlogs.map((post) => (
        <article className="blog-card" key={post.title}>
          <img src={post.image} alt={post.title} />

          <span className="blog-category">{post.category}</span>

          <h3>{post.title}</h3>

          <p className="blog-excerpt">{post.excerpt}</p>

          <a
            href={post.link}
            target="_blank"
            rel="noreferrer"
            className="blog-read-more"
          >
            Read more <FiArrowDown />
          </a>
        </article>
      ))}
    </div>

    <div className="blog-controls">
      <button onClick={showPreviousBlogs} aria-label="Previous blog posts">
        <FiArrowLeft />
      </button>

      <button onClick={showNextBlogs} aria-label="Next blog posts">
        <FiArrowRight />
      </button>
    </div>
  </div>
</section>

<section id="FAQ" className="portfolio-section faq-section">
  <div className="faq-canvas">
    <div className="faq-header">
      <p className="eyebrow">08 - FAQ</p>

      <h2>Questions people usually ask before working with me</h2>

      <p>
        A few answers about my process, services, and how I collaborate on
        digital products.
      </p>
    </div>

    <div className="faq-list">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${
            activeFaq === index ? "active" : ""
          }`}
        >
          <button
            className="faq-question"
            onClick={() =>
              setActiveFaq(activeFaq === index ? null : index)
            }
          >
            <span>{faq.question}</span>

            {activeFaq === index ? (
              <FiMinus />
            ) : (
              <FiPlus />
            )}
          </button>

          {activeFaq === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

<section id="Contact" className="portfolio-section contact-section">
  <div className="contact-canvas">
    <div className="contact-left">
      <p className="eyebrow">09 - Contact</p>

      <h2>Have a project, idea, or opportunity in mind?</h2>

      <div className="contact-line"></div>

      <p>
        I am open to meaningful conversations, product design opportunities,
        freelance projects, and collaborations that solve real problems.
      </p>

      <a href="mailto:faithaijohi@gmail.com" className="primary-btn contact-btn">
        <FiMail />
        Send an email
      </a>
    </div>

    <div className="contact-panel">
      <div className="contact-panel-top">
        <p>Connect with me</p>
        <span></span>
      </div>
      
      <a
        href="https://www.behance.net/otufaithaijohi3"
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-icon">Be</span>
        <strong>Behance</strong>
        <FiArrowUpRight />
      </a>

      <a
      href="https://www.linkedin.com/in/otu-faith"
      target="_blank"
      rel="noreferrer"
      >
      <span className="contact-icon">in</span>
      <strong>LinkedIn</strong>
      <FiArrowUpRight />
      </a>

      <a
        href="https://www.instagram.com/cr8tive_aijohi/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-icon">Ig</span>
        <strong>Instagram</strong>
        <FiArrowUpRight />
      </a>

      <a
  href="https://x.com/iamaijohi?s=21"
  target="_blank"
  rel="noreferrer"
  aria-label="X (Twitter)"
>
  <span className="contact-icon">
    <FaXTwitter />
  </span>

  <strong>X (Twitter)</strong>
  <FiArrowUpRight />
</a>

    </div>
  </div>
</section>

<footer className="footer">
  <div className="footer-canvas">

    <div className="footer-top">
      <img
        src={logo}
        alt="Aijohi Logo"
        className="footer-logo"
      />

      <p className="footer-copy">
        Product designer creating thoughtful digital
        experiences for people and businesses.
      </p>
    </div>

    <div className="footer-divider"></div>

    <div className="footer-bottom">
      <p>© 2026 iamaijohi. All rights reserved.</p>

      <p>Designed and built by Aijohi.</p>
    </div>

  </div>
</footer>
    </main>
  );
}

export default Portfolio;