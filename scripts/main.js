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


document.querySelectorAll('.project-banner').forEach(banner => {
    banner.addEventListener('click', function() {
        const description = this.getAttribute('data-description');
        const technologies = this.getAttribute('data-tech').split(',');
        const backgroundImage = this.style.backgroundImage;
        
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
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('project-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
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