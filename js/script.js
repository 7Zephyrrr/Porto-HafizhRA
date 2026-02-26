// ===== DATA PROJECTS & BLOG =====
const PROJECTS = [
  {
    title: "Nexus Analytics Dashboard",
    description: "A high-performance real-time data visualization platform for global retail chains, processing over 1M events daily.",
    tags: ["React", "Node.js"],
    image: "assets/images/project1.jpg",
    link: "#"
  },
  {
    title: "FinVault Mobile Banking",
    description: "Redesigning the mobile banking experience with a focus on accessibility and intuitive financial management for Gen-Z.",
    tags: ["UI/UX Design", "Figma"],
    image: "assets/images/project2.jpg",
    link: "#"
  }
];

const BLOG_POSTS = [
  {
    date: "Oct 24, 2023",
    readTime: "8 min read",
    title: "Why TypeScript is non-negotiable in 2024",
    excerpt: "Exploring the long-term benefits of static typing in modern web development architectures.",
    link: "#"
  },
  {
    date: "Sep 12, 2023",
    readTime: "5 min read",
    title: "The balance between aesthetics and utility",
    excerpt: "Finding the sweet spot where beautiful UI meets exceptional UX through user testing.",
    link: "#"
  },
  {
    date: "Aug 05, 2023",
    readTime: "12 min read",
    title: "Mastering Tailwind CSS layouts",
    excerpt: "A deep dive into complex grid and flexbox patterns using only utility classes.",
    link: "#"
  }
];

// ===== RENDER FUNCTIONS =====
function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = PROJECTS.map((project, idx) => `
    <article class="project-card reveal" style="transition-delay: ${idx * 100}ms">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/600x400?text=Project'"/>
      </div>
      <div class="project-content">
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="project-link">
          Case Study
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </article>
  `).join('');
}

function renderBlog() {
  const container = document.getElementById('blog-container');
  container.innerHTML = BLOG_POSTS.map((post, idx) => `
    <a href="${post.link}" class="blog-item reveal" style="transition-delay: ${idx * 100}ms">
      <div>
        <div class="blog-meta">
          <span>${post.date}</span>
          <span>•</span>
          <span>${post.readTime}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
      </div>
      <svg class="icon blog-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    </a>
  `).join('');
}

// ===== ANIMATIONS =====
function initAnimations() {
  // Hero animations on load
  document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up').forEach(el => {
    setTimeout(() => el.classList.add('animate-visible'), 100);
  });

  // Scroll reveal animation
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => observer.observe(el));
}

// ===== MOBILE NAVIGATION =====
function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!toggle || !navLinks) return;
  
  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderBlog();
  initAnimations();
  initMobileNav();
  initSmoothScroll();
  
  // Button interactions
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
});
