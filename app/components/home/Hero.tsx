"use client"

import React, { useEffect, useRef } from 'react';

interface TechIcon {
  path: string;
  iconUrl: string;
  altText: string;
  title: string;
  name: string;
}

interface Category {
  title: string;
  techIcons: TechIcon[];
}

interface HeroProps {
  categories: Category[];
}

const Hero: React.FC<HeroProps> = ({ categories }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const nodesRef = useRef<any[]>([]);

  useEffect(() => {
    // Typing Animation
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;
    
    if (!titleElement || !subtitleElement) return;

    const fullTitle = "Learn <span class='typewriter'>Coding</span> in Simple <span class='typewriter'>Language</span>";
    const fullSubtitle = "Explore our articles, tutorials, and courses designed to help you master programming languages, data structures & algorithms, web and Android development, frontend & backend frameworks, databases, data science & AI, DevOps, cloud technologies, and much more.";

    let titleInterval: NodeJS.Timeout;
    let subtitleInterval: NodeJS.Timeout;

    // Type title
    let i = 0;
    titleInterval = setInterval(() => {
      if (i < fullTitle.length) {
        titleElement.innerHTML = fullTitle.substring(0, i + 1);
        i++;
      } else {
        clearInterval(titleInterval);
        const spans = titleElement.querySelectorAll('span');
        if (spans.length > 0) {
          spans[spans.length - 1].classList.add('typewriter');
        }
        subtitleElement.style.opacity = '1';
        let j = 0;
        subtitleInterval = setInterval(() => {
          if (j < fullSubtitle.length) {
            subtitleElement.innerHTML = fullSubtitle.substring(0, j + 1);
            j++;
          } else {
            clearInterval(subtitleInterval);
          }
        }, 30);
      }
    }, 50);

    // Only create graph on desktop
    if (window.innerWidth > 1024) {
      initLanguageGraph();
    }

    // Fallback for mobile
    if (window.innerWidth <= 768) {
      titleElement.innerHTML = fullTitle;
      subtitleElement.innerHTML = fullSubtitle;
      subtitleElement.style.opacity = '1';
      clearInterval(titleInterval);
      clearInterval(subtitleInterval);
    }

    // Cleanup
    return () => {
      clearInterval(titleInterval);
      clearInterval(subtitleInterval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Language Graph Function with Dark Nodes and FA Icons
  const initLanguageGraph = () => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Dark color palette for nodes
    const languages = [
      { name: "JavaScript", icon: "fab fa-js", color: "#F7E025" },
      { name: "Python", icon: "fab fa-python", color: "#FFDE5B" },
      { name: "Java", icon: "fab fa-java", color: "#F29313" },
      { name: "Go", icon: "fa-brands fa-golang", color: "#08AFD8" },
      { name: "Node", icon: "fa-brands fa-node", color: "#75AD5F" },
      { name: "Swift", icon: "fab fa-swift", color: "#F05138" },
      { name: "HTML5", icon: "fa-brands fa-html5", color: "#DD4B25" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#2961EA" },
      { name: "Android", icon: "fa-brands fa-android", color: "#3DDC84" },
      { name: "React", icon: "fa-brands fa-react", color: "#61DAFB" },
      { name: "Docker", icon: "fa-brands fa-docker", color: "#28B8EB" },
      { name: "Angular", icon: "fa-brands fa-angular", color: "#DD0031" },
      { name: "Vue", icon: "fa-brands fa-vuejs", color: "#41B883" },
    ];

    // Initialize nodes
    const nodes = languages.map((lang, index) => {
      const nodeEl = document.createElement('div');
      nodeEl.className = 'tech-node';

      const icon = document.createElement('i');
      icon.className = lang.icon;
      icon.style.color = "#ffffff";
      icon.style.fontSize = "1.2rem";

      nodeEl.appendChild(icon);
      nodeEl.style.backgroundColor = lang.color;
      nodeEl.style.width = `60px`;
      nodeEl.style.height = `60px`;

      container.appendChild(nodeEl);

      return {
        ...lang,
        element: nodeEl,
        x: Math.random() * (canvas.width - 60) + 30,
        y: Math.random() * (canvas.height - 60) + 30,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        radius: 30
      };
    });

    nodesRef.current = nodes;

    // Create connections
    const connections = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.7) {
          connections.push({
            source: i,
            target: j,
            strength: Math.random()
          });
        }
      }
    }

    // Initial position setup
    nodes.forEach(node => {
      node.element.style.left = `${node.x - node.radius}px`;
      node.element.style.top = `${node.y - node.radius}px`;
    });

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Boundary collision
        if (node.x < node.radius) {
          node.x = node.radius;
          node.vx *= -1;
        }
        if (node.x > canvas.width - node.radius) {
          node.x = canvas.width - node.radius;
          node.vx *= -1;
        }
        if (node.y < node.radius) {
          node.y = node.radius;
          node.vy *= -1;
        }
        if (node.y > canvas.height - node.radius) {
          node.y = canvas.height - node.radius;
          node.vy *= -1;
        }

        // Update element position
        node.element.style.left = `${node.x - node.radius}px`;
        node.element.style.top = `${node.y - node.radius}px`;
      });

      // Draw connections
      ctx.strokeStyle = "rgba(67, 97, 238, 0.2)";
      ctx.lineWidth = 2;

      connections.forEach(conn => {
        const source = nodes[conn.source];
        const target = nodes[conn.target];
        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 300) {
          ctx.globalAlpha = 1 - distance / 300;
          ctx.beginPath();
          ctx.moveTo(source.x, source.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
  };

  // Close course card function
  const closeCourseCard = () => {
    const overlay = document.getElementById('hero-course-card-overlay');
    const card = document.getElementById('hero-course-card');
    if (overlay) overlay.style.display = 'none';
    if (card) card.style.display = 'none';
  };

  // Show browse course card function
  const showBrowseCourseCard = () => {
    const overlay = document.getElementById('hero-course-card-overlay');
    const card = document.getElementById('hero-course-card');
    if (overlay) overlay.style.display = 'block';
    if (card) card.style.display = 'block';
    
    // Countdown timer
    let countdown = 5;
    const countdownElement = document.getElementById('countdown');
    const timer = setInterval(() => {
      countdown--;
      if (countdownElement) {
        countdownElement.textContent = countdown.toString();
      }
      if (countdown <= 0) {
        clearInterval(timer);
        closeCourseCard();
      }
    }, 1000);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 id="typing-title" ref={titleRef}></h1>
          <p id="typing-subtitle" ref={subtitleRef}></p>
          <div className="hero-buttons">
            <a href="#browse-articles" className="hero-btn hero-btn-primary">Start Learning</a>
            <a onClick={showBrowseCourseCard} className="hero-btn hero-btn-secondary" style={{ cursor: 'pointer' }}>
              Browse Courses
            </a>
          </div>

          {/* Course Card (Hidden by Default) */}
          <div id="hero-course-card-overlay" className="hero-course-card-overlay" onClick={closeCourseCard} style={{ display: 'none' }}></div>
          <div id="hero-course-card" className="hero-course-card" style={{ display: 'none' }}>
            <button onClick={closeCourseCard} className="hero-close-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 4L12 12" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <div className="hero-card-content">
              <div className="hero-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3B82F6" strokeWidth="2" />
                  <path d="M12 8V12L15 15" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h4>Exciting Courses Coming Soon!</h4>
              <p>We're crafting high-quality content to boost your skills.</p>
              <div className="countdown-timer">
                <span id="countdown">5</span> seconds remaining...
              </div>
              <button onClick={closeCourseCard} className="hero-card-action-btn">Got It!</button>
            </div>
          </div>
        </div>
        <div className="tech-graph" ref={containerRef}>
          <canvas id="languageGraph" ref={canvasRef}></canvas>
        </div>
      </section>
      
      {/* Browse Paths Section */}
      <section className="browse-paths" id="browse-articles">
        <div className="container">
          {categories.map((category, index) => (
            <div className="category" key={index}>
              <h4 className="category-title">
                {category.title}
              </h4>
              <div className="tech-icons">
                {category.techIcons.map((tech, techIndex) => (
                  <a href={tech.path} className="tech-icon" key={techIndex}>
                    <img src={tech.iconUrl} alt={tech.altText} title={tech.title} />
                    <span>{tech.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;