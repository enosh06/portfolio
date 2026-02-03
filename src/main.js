import './style.css'

// Project Data
const projects = [
  {
    title: 'Seaman Fresh',
    category: 'E-commerce',
    description: 'A premium seafood delivery platform with real-time tracking, wholesale pricing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
  },
  {
    title: 'Nexus Chat',
    category: 'Communication',
    description: 'Real-time chat application with private messaging and rooms using Socket.io.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop',
    tags: ['Node.js', 'Socket.io', 'React'],
  },
  {
    title: 'Inventory Management',
    category: 'SaaS',
    description: 'Cloud-based inventory system for businesses to track stock and sales in real-time.',
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703a0?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Django', 'PostgreSQL'],
  },
]

// Render Projects
const projectList = document.getElementById('project-list')
if (projectList) {
  projectList.innerHTML = projects.map(project => `
    <div class="glass project-card">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-info">
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <h3 style="margin-bottom: 0.5rem; font-size: 1.5rem;">${project.title}</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">${project.description}</p>
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
