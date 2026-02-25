// ===== DATA =====
const PROJECTS = [
  {
    title: "Nexus Analytics Dashboard",
    description: "A high-performance real-time data visualization platform for global retail chains, processing over 1M events daily.",
    tags: ["React", "Node.js"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAupzUvbD0kILADZ4UahcHP2E6YSbvEL_rZjvds3tWUtFOHN7o5b-vRjz3E9whA9oRyoNiU8uqzqMC6rNJAmjPkdDvehkD9Ef0Tdr0ytcI4aF8LgNQz5sZzSVcQJW4_D2vhr-yqcSSqAUolZStFLM-eJzLnhk4hej90PR8_vS5ipyy9pBwqp8_labLTliEYIhZn3Br1HaUyi6S_IcF6FS3hAL8bWBEB4AllEaA6Gu-tDtPW-pqHCB8RjvU8mI2vEsSP-0uEY1bR8erd",
    link: "#"
  },
  {
    title: "FinVault Mobile Banking",
    description: "Redesigning the mobile banking experience with a focus on accessibility and intuitive financial management for Gen-Z.",
    tags: ["UI/UX Design", "Figma"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAus4_KoPZTdBpMLnTEX9TiGpU6ayla68_KTx13g1sQQDaO5dh3clR4HWobQYOh63o7mb3fpACFZqhSHK2ulh-ldBGrjpNqvz4pDPfaYqGOatPddtnxE3etgcLcp7jDq9RDNSoenK6GfsaWxn0f2F_TWJCp_ktjGIk8d5t7UOKZNjxUZC9sDmDOlKAVBx72ByUlFNlcPtThXZkFTUO23N4BbWkSJPBu3H9KYX78GQbAfMSayfWxWaOTI7rTf6xZ0GwXTded6k6U-YDw",
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

// ===== DOM ELEMENTS =====
const projectsContainer = document.getElementById('projects-container');
const blogContainer = document.getElementById('blog-container');
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('#nav-links a, #mobile-menu a');
const ctaBtn = document.getElementById('cta-btn');
const browseBlogBtn = document.getElementById('browse-blog');

// ===== RENDER PROJECTS =====
function renderProjects() {
  projectsContainer.innerHTML = PROJECTS.map((project, idx) => `
    <article class="project-card fade-in group flex flex-col bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden hover:border-primary/50 transition-all duration-300" style="transition-delay: ${idx * 100}ms">
      <div class="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          alt="${project.title}" 
          src="${project.image}"
          referrerpolicy="no-referrer"
          loading="lazy"
        />
      </div>
      <div class="p-8">
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">${project.title}</h3>
        <p class="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
          ${project.description}
        </p>
        <a class="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all" href="${project.link}">
          Case Study 
          <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </article>
  `).join('');
}

// ===== RENDER BLOG POSTS =====
function renderBlogPosts() {
  blogContainer.innerHTML = BLOG_POSTS.map((post, idx) => `
    <a class="blog-post fade-in group" href="${post.link}" style="transition-delay: ${idx * 100}ms">
      <div class="blog-content">
        <div class="blog-meta">
          <span>${post.date}</span>
          <span>•</span>
          <span>${post.readTime}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
      </div>
      <div class="mt-6 md:mt-0">
        <svg class="blog-arrow size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </div>
    </a>
  `).join('');
}

// ===== SCROLL ANIMATIONS =====
function setupScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-scale').forEach(el => {
    observer.observe(el);
  });
}

// ===== MOBILE MENU =====
function setupMobileMenu() {
  function toggleMenu() {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  }

  menuToggle?.addEventListener('click', toggleMenu);
  menuClose?.addEventListener('click', toggleMenu);
  
  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu when clicking outside
  mobileMenu?.addEventListener('click', (e) => {
    if (e.target === mobileMenu) toggleMenu();
  });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== CTA BUTTONS =====
function setupCTAButtons() {
  ctaBtn?.addEventListener('click', () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  });
  
  browseBlogBtn?.addEventListener('click', () => {
    // Implement browse all logic here
    alert('Blog archive coming soon!');
  });
}

// ===== NAVIGATION ACTIVE STATE =====
function setupActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    
    document.querySelectorAll('#nav-links a').forEach(link => {
      link.classList.remove('text-primary');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-primary');
      }
    });
  });
}

// ===== INITIALIZATION =====
function init() {
  renderProjects();
  renderBlogPosts();
  setupScrollAnimations();
  setupMobileMenu();
  setupSmoothScroll();
  setupCTAButtons();
  setupActiveNav();
  
  // Trigger initial animation for hero section
  setTimeout(() => {
    document.querySelector('.hero-content')?.classList.add('visible');
    document.querySelector('.hero-image')?.classList.add('visible');
  }, 100);
}

// ===== RUN ON DOM READY =====
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
