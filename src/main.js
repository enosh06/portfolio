import './style.css'

// Project Data
const projects = [
  {
    title: 'Seaman Fresh',
    category: 'E-commerce',
    description: 'A premium seafood delivery platform with real-time tracking, wholesale pricing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop',
    tags: ['JavaScript', 'E-commerce'],
    link: 'https://github.com/enosh06/seamanfresh'
  },
  {
    title: 'Inventory Management',
    category: 'SaaS',
    description: 'Cloud-based inventory system for businesses to track stock and sales in real-time.',
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703a0?q=80&w=800&auto=format&fit=crop',
    tags: ['HTML', 'SaaS'],
    link: 'https://github.com/enosh06/inventorymanagement.io'
  },
  {
    title: 'E-Commerce Platform',
    category: 'E-commerce',
    description: 'Feature-rich online store built with TypeScript and modern web standards.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
    tags: ['TypeScript', 'Modern UI'],
    link: 'https://github.com/enosh06/e_commerce'
  },
  {
    title: 'Birthday Surprise',
    category: 'Personal',
    description: 'A special birthday surprise website with interactive elements and animations.',
    image: 'https://images.unsplash.com/photo-1530103862676-fa8c9d34bb3a?q=80&w=800&auto=format&fit=crop',
    tags: ['CSS', 'Animations'],
    link: 'https://github.com/enosh06/chandana-birthday-surprise'
  },
  {
    title: 'Einstein Project',
    category: 'Education',
    description: 'An interactive exploration of Albert Einstein\'s life and work.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop',
    tags: ['HTML', 'Education'],
    link: 'https://github.com/enosh06/einstein'
  },
  {
    title: 'Cute Sorry Site',
    category: 'Web Design',
    description: 'A creative and interactive "sorry" card web application.',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop',
    tags: ['CSS', 'Design'],
    link: 'https://github.com/enosh06/cute-sorry-site'
  },
  {
    title: 'BMI Calculator',
    category: 'Utility',
    description: 'Clean and functional Body Mass Index calculator for health tracking.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    tags: ['HTML', 'Health'],
    link: 'https://github.com/enosh06/bmi'
  },
  {
    title: '"Do You Love Me?"',
    category: 'Fun',
    description: 'A playful and interactive "Do you love me?" button code snippet.',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop',
    tags: ['CSS', 'Interactive'],
    link: 'https://github.com/enosh06/do-you-love-me-code'
  }
]

// Render Projects
const projectList = document.getElementById('project-list')
if (projectList) {
  projectList.innerHTML = projects.map(project => `
    <div class="glass project-card" onclick="window.open('${project.link}', '_blank')">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-info">
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <h3 style="margin-bottom: 0.5rem; font-size: 1.5rem;">${project.title}</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">${project.description}</p>
        <div style="margin-top: 1.5rem; display: flex; align-items: center; color: var(--primary); font-size: 0.9rem; font-weight: 600;">
          View Repository 
          <svg style="margin-left: 0.5rem;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </div>
      </div>
    </div>
  `).join('')
}

// Scroll Effect on Header
const header = document.getElementById('header')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      })
    }
  })
})

// Intersection Observer for animations
const revealOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1'
      entry.target.style.transform = 'translateY(0)'
      observer.unobserve(entry.target)
    }
  })
}, revealOptions)

// Typing Effect
const typeText = (element, text, speed = 100) => {
  let i = 0;
  element.innerHTML = '';
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

const heroSubtitle = document.querySelector('.hero p');
if (heroSubtitle) {
  const originalText = heroSubtitle.textContent;
  heroSubtitle.textContent = '';
  setTimeout(() => {
    typeText(heroSubtitle, originalText, 30);
  }, 1000);
}

// Apply reveal to sections
document.querySelectorAll('.skill-card, .project-card, .section-title').forEach(el => {
  el.style.opacity = '0'
  el.style.transform = 'translateY(30px)'
  el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  revealOnScroll.observe(el)
})
