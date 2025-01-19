document.addEventListener('DOMContentLoaded', async function() {
    try {
        const currentPath = window.location.pathname;
        if (currentPath.match(/\/guide\/[^/]+\//)) {
            return;
        }
        
        const pathToRoot = currentPath.split('/').slice(1, -1).map(() => '..').join('/') || '.';
        
        const response = await fetch(`${pathToRoot}/components/header.html`);
        const headerHtml = await response.text();
        
        document.body.insertAdjacentHTML('afterbegin', headerHtml);
        
        const script = document.createElement('script');
        script.src = `${pathToRoot}/scripts/main.js`;
        document.body.appendChild(script);
    } catch (error) {
        console.error('Error loading header:', error);
    }
}); 