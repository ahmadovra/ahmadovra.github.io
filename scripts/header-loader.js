document.addEventListener('DOMContentLoaded', async function() {
    try {
        const currentPath = window.location.pathname;
        const isGuidePage = currentPath.includes('/guide');
        
        if (isGuidePage) {
            const pathToRoot = currentPath.split('/').slice(1, -1).map(() => '..').join('/') || '.';
            const backButton = document.createElement('div');
            backButton.className = 'back-to-home';
            backButton.innerHTML = `
                <a href="${pathToRoot}/index.html" class="back-link">
                    <i class="fas fa-arrow-left"></i> Back to Home
                </a>
            `;
            document.body.insertAdjacentElement('afterbegin', backButton);
        } else {
            const response = await fetch('./components/header.html');
            const headerHtml = await response.text();
            document.body.insertAdjacentHTML('afterbegin', headerHtml);
            
            const script = document.createElement('script');
            script.src = './scripts/main.js';
            document.body.appendChild(script);
        }
    } catch (error) {
        console.error('Error loading header:', error);
    }
}); 