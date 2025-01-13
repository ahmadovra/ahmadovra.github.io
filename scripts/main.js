const lazyLoadBanners = () => {
    const banners = document.querySelectorAll('.project-banner[data-bg]');
    
    const loadBanner = (banner) => {
        const bg = banner.getAttribute('data-bg');
        banner.style.backgroundImage = `url(${bg})`;
        banner.removeAttribute('data-bg');
    };

    const bannerObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadBanner(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '50px 0px'
    });

    banners.forEach(banner => bannerObserver.observe(banner));
};

function openProjectModal(projectTitle, description, technologies, backgroundImage) {
    document.getElementById('modal-description').innerText = description;
    
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '';
    technologies.forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'tech-tag';
        techTag.textContent = tech.trim();
        techContainer.appendChild(techTag);
    });
    
    const modalImage = document.getElementById('modal-image');
    modalImage.src = backgroundImage.replace('url("', '').replace('")', '');
    
    const modal = document.getElementById('project-modal');
    modal.style.display = 'block';

    const urlPath = `/projects/${projectTitle.toLowerCase().replace(/\s+/g, '-')}`;
    history.pushState({ modal: true }, '', urlPath);
}

window.addEventListener('popstate', function(event) {
    const modal = document.getElementById('project-modal');
    if (!event.state?.modal) {
        modal.style.display = 'none';
    }
});

document.querySelectorAll('.project-banner').forEach(banner => {
    banner.addEventListener('click', function() {
        const description = this.getAttribute('data-description');
        const technologies = this.getAttribute('data-tech').split(',');
        const backgroundImage = this.style.backgroundImage;
        const projectTitle = this.querySelector('h3').textContent;
        
        openProjectModal(projectTitle, description, technologies, backgroundImage);
    });
});

document.querySelectorAll('.project-nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const projectType = this.getAttribute('data-project');
        let projectBanner = Array.from(document.querySelectorAll('.project-banner')).find(banner => 
            banner.querySelector('h3').textContent.toLowerCase().includes(projectType.replace('-', ' '))
        );
        
        if (!projectBanner) {
            projectBanner = document.querySelector(`.project-banner[data-tech*="${projectType}"]`);
        }
        
        if (projectBanner) {
            const description = projectBanner.getAttribute('data-description');
            const technologies = projectBanner.getAttribute('data-tech').split(',');
            const backgroundImage = projectBanner.style.backgroundImage;
            const projectTitle = projectBanner.querySelector('h3').textContent;
            
            openProjectModal(projectTitle, description, technologies, backgroundImage);
        }
        closeNav();
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('project-modal').style.display = 'none';
    history.pushState({ modal: false }, '', '/');
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
        history.pushState({ modal: false }, '', '/');
    }
});

window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const scrollPosition = window.scrollY;
    aboutSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '-50px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.text-line').forEach(element => {
    observer.observe(element);
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navPanel = document.querySelector('.nav-panel');
const navClose = document.querySelector('.nav-close');

function closeNav() {
    hamburgerMenu.classList.remove('active');
    navPanel.classList.remove('active');
}

function openNav() {
    hamburgerMenu.classList.add('active');
    navPanel.classList.add('active');
}

hamburgerMenu.addEventListener('click', () => {
    if (navPanel.classList.contains('active')) {
        closeNav();
    } else {
        openNav();
    }
});

navClose.addEventListener('click', closeNav);

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeNav);
});

document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target) && 
        !navPanel.contains(e.target)) {
        closeNav();
    }
});