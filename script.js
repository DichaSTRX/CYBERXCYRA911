// ===== DATA PORTFOLIO =====
const portfolioData = {
    "meta": {
        "name": "CYBERXCYRA",
        "tagline": "DICHA STRX",
        "author": "DICHA STRX",
        "year": 2026
    },
    "skills": {
        "items": [
            {
                "id": "html",
                "name": "HTML",
                "technologies": "HTML5 · Semantic · SEO Friendly",
                "percentage": 35,
                "icon": "code"
            },
            {
                "id": "css",
                "name": "CSS",
                "technologies": "CSS3 · Flexbox · Grid · Responsive",
                "percentage": 10,
                "icon": "paint-brush"
            },
            {
                "id": "javascript",
                "name": "JAVASCRIPT",
                "technologies": "ES6+ · DOM · Fetch API",
                "percentage": 5,
                "icon": "js"
            },
            {
                "id": "iot",
                "name": "IoT & HARDWARE",
                "technologies": "ESP8266 · DHT11 · I2C",
                "percentage": 85,
                "icon": "microchip"
            }
        ]
    },
    "projects": {
        "items": [
            {
                "id": "cyberx-monitoring",
                "title": "CYBERXCYRA MONITORING SYSTEM",
                "category": ["iot", "system"],
                "tags": ["ESP8266", "DHT11", "PHP", "MySQL", "XAMPP"],
                "description": "Sistem monitoring sensor yang mengirimkan data suhu dan kelembapan dari ESP8266 ke API PHP dan database MySQL, kemudian ditampilkan pada dashboard realtime.",
                "image": "microchip",
                "details": {
                    "year": 2026,
                    "role": "Full Stack Developer",
                    "duration": "2 bulan",
                    "techStack": ["ESP8266", "DHT11", "PHP", "MySQL", "XAMPP", "Chart.js"],
                    "features": [
                        "Real-time data visualization",
                        "Sensor monitoring dashboard",
                        "Historical data logging",
                        "Alert system"
                    ]
                }
            },
            {
                "id": "operations-dashboard",
                "title": "OPERATIONS DASHBOARD",
                "category": ["system"],
                "tags": ["PHP", "MySQL", "Chart.js", "REST API"],
                "description": "Status device, parameter, alarm, dan realtime monitoring dalam satu dashboard terintegrasi.",
                "image": "chart-line",
                "details": {
                    "year": 2026,
                    "role": "System Developer",
                    "duration": "1.5 bulan",
                    "techStack": ["PHP", "MySQL", "Chart.js", "REST API", "JavaScript"],
                    "features": [
                        "Device status monitoring",
                        "Parameter tracking",
                        "Alarm management",
                        "Dashboard analytics"
                    ]
                }
            },
            {
                "id": "login-experience",
                "title": "CYBERX LOGIN EXPERIENCE",
                "category": ["web"],
                "tags": ["HTML", "CSS", "JavaScript", "PHP"],
                "description": "Interface login modern dengan responsive design, animasi halus, dan integrasi session management.",
                "image": "laptop",
                "details": {
                    "year": 2026,
                    "role": "Frontend Developer",
                    "duration": "1 bulan",
                    "techStack": ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
                    "features": [
                        "Modern UI design",
                        "Responsive layout",
                        "Smooth animations",
                        "Session management"
                    ]
                }
            },
            {
                "id": "sensor-lab",
                "title": "CYBERX SENSOR LAB",
                "category": ["iot"],
                "tags": ["ESP8266", "DHT11", "LCD I2C", "Arduino"],
                "description": "Eksperimen ESP8266, DHT11, LCD I2C dan komunikasi perangkat untuk prototyping IoT.",
                "image": "flask",
                "details": {
                    "year": 2026,
                    "role": "IoT Developer",
                    "duration": "3 minggu",
                    "techStack": ["ESP8266", "DHT11", "LCD I2C", "Arduino IDE", "C++"],
                    "features": [
                        "Sensor data collection",
                        "LCD display integration",
                        "I2C communication",
                        "Prototyping"
                    ]
                }
            }
        ]
    },
    "journey": {
        "items": [
            {
                "year": "2026",
                "title": "CYBERXCYRA",
                "description": "Web, UI, dashboard dan eksperimen IoT.",
                "icon": "industry"
            },
            {
                "year": "2026",
                "title": "MONITORING SYSTEM",
                "description": "ESP8266 + DHT11 dengan API PHP dan MySQL lokal.",
                "icon": "microchip"
            },
            {
                "year": "NOW",
                "title": "BUILD · TEST · IMPROVE",
                "description": "Terus mengembangkan software, UI/UX, jaringan, dan sistem.",
                "icon": "rocket"
            }
        ]
    },
    "blog": {
        "items": [
            {
                "id": "esp8266-php-mysql",
                "title": "Menghubungkan ESP8266 ke PHP & MySQL",
                "excerpt": "Panduan lengkap menghubungkan ESP8266 dengan API PHP dan database MySQL untuk sistem monitoring.",
                "category": "IoT",
                "date": "2026-01-15",
                "readTime": "5 min read",
                "icon": "wifi"
            },
            {
                "id": "dashboard-design",
                "title": "Membuat dashboard monitoring yang mudah dibaca",
                "excerpt": "Tips desain dashboard monitoring yang informatif, responsif, dan enak dipandang.",
                "category": "Design",
                "date": "2026-02-20",
                "readTime": "4 min read",
                "icon": "chart-pie"
            },
            {
                "id": "github-portfolio",
                "title": "Menjadikan GitHub sebagai portfolio profesional",
                "excerpt": "Cara mengelola repository, README, dan presentasi project di GitHub untuk menarik perhatian klien.",
                "category": "Career",
                "date": "2026-03-10",
                "readTime": "6 min read",
                "icon": "github"
            }
        ]
    },
    "social": [
        { "id": "github", "platform": "GitHub", "url": "https://github.com/cyberxcyra", "icon": "github" },
        { "id": "telegram", "platform": "Telegram", "url": "https://t.me/cyberxcyra", "icon": "telegram" },
        { "id": "email", "platform": "Email", "url": "mailto:hello@cyberxcyra.com", "icon": "envelope" }
    ]
};

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 800);
});

// ===== RENDER SKILLS =====
function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = '';
    portfolioData.skills.items.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <div class="skill-header">
                <span class="skill-icon"><i class="fas fa-${skill.icon}"></i></span>
                <div>
                    <h4>${skill.name}</h4>
                    <span class="skill-tech">${skill.technologies}</span>
                </div>
                <span class="skill-percent">${skill.percentage}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" data-width="${skill.percentage}"></div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ===== RENDER PROJECTS =====
function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    portfolioData.projects.items.forEach(project => {
        const show = filter === 'all' || project.category.includes(filter);
        if (!show) return;
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', project.category.join(' '));
        card.innerHTML = `
            <div class="project-image">
                <i class="fas fa-${project.image}"></i>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <p>${project.description}</p>
                <button class="btn btn-small project-detail-btn" data-project="${project.id}">
                    VIEW CASE <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ===== RENDER JOURNEY =====
function renderJourney() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';
    portfolioData.journey.items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-year">${item.year}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        timeline.appendChild(div);
    });
}

// ===== RENDER BLOG =====
function renderBlog() {
    const grid = document.getElementById('blogGrid');
    grid.innerHTML = '';
    portfolioData.blog.items.forEach(blog => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `
            <div class="blog-icon"><i class="fas fa-${blog.icon}"></i></div>
            <h3>${blog.title}</h3>
            <p>${blog.excerpt}</p>
            <button class="btn btn-small">READ ARTICLE →</button>
        `;
        grid.appendChild(card);
    });
}

// ===== RENDER SOCIAL =====
function renderSocial() {
    const container = document.getElementById('socialLinks');
    container.innerHTML = '';
    portfolioData.social.forEach(social => {
        const a = document.createElement('a');
        a.href = social.url;
        a.target = '_blank';
        a.setAttribute('aria-label', social.platform);
        a.innerHTML = `<i class="fab fa-${social.icon}"></i>`;
        container.appendChild(a);
    });
}

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
let currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.className = 'fas fa-sun';
}

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark');
    }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navMenu.classList.remove('active');
        }
    });
});

// ===== NAVBAR HIDE/SHOW =====
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        if (currentScroll > lastScroll) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;

    const backBtn = document.getElementById('backToTop');
    if (currentScroll > 400) {
        backBtn.classList.add('visible');
    } else {
        backBtn.classList.remove('visible');
    }
});

// ===== BACK TO TOP =====
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== PROGRESS BARS =====
function initProgressBars() {
    const fills = document.querySelectorAll('.progress-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.getAttribute('data-width');
                fill.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });
    fills.forEach(fill => observer.observe(fill));
}

// ===== PROJECT FILTER =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        renderProjects(filter);
        initProgressBars();
    });
});

// ===== PROJECT MODAL =====
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('project-detail-btn')) {
        const projectId = e.target.getAttribute('data-project');
        const project = portfolioData.projects.items.find(p => p.id === projectId);
        if (project) {
            modalTitle.textContent = project.title;
            modalBody.innerHTML = `
                <p style="color:var(--text-secondary);margin-bottom:16px;">${project.description}</p>
                <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;">
                    ${project.tags.map(t => `<span style="padding:4px 14px;border-radius:12px;background:var(--bg-primary);border:1px solid var(--border-color);font-size:0.8rem;">${t}</span>`).join('')}
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;background:var(--bg-primary);padding:16px;border-radius:12px;">
                    <div><small style="color:var(--text-muted);">Year</small><br><strong>${project.details.year}</strong></div>
                    <div><small style="color:var(--text-muted);">Role</small><br><strong>${project.details.role}</strong></div>
                    <div><small style="color:var(--text-muted);">Duration</small><br><strong>${project.details.duration}</strong></div>
                    <div><small style="color:var(--text-muted);">Tech Stack</small><br><strong>${project.details.techStack.join(' · ')}</strong></div>
                </div>
                <div style="margin-top:12px;">
                    <h4 style="margin-bottom:8px;">Features</h4>
                    <ul style="color:var(--text-secondary);list-style:none;padding:0;">
                        ${project.details.features.map(f => `<li style="padding:4px 0;border-bottom:1px solid var(--border-color);">✓ ${f}</li>`).join('')}
                    </ul>
                </div>
            `;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✅ Pesan berhasil dikirim! Terima kasih.');
    e.target.reset();
});

// ===== TOAST =====
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== KEYBOARD =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===== REDUCED MOTION =====
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animationDuration = '0.01ms';
        el.style.transitionDuration = '0.01ms';
    });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects('all');
    renderJourney();
    renderBlog();
    renderSocial();
    setTimeout(initProgressBars, 500);
});

// ===== DYNAMIC YEAR =====
document.querySelector('.footer-copy').textContent = 
    `© ${new Date().getFullYear()} CyberXCYRA`;