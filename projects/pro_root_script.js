/* pro_root_script.js - Senior Modular Loader */

const projects = [
    {
        id: 'project-1',
        folder: 'LLM_card',
        htmlFile: 'llm_card.html',
        cssFile: 'llm_card_main.css',
        jsFile: 'llm_card_script.js'
    }
    // Add future projects here: { id: 'project-2', folder: 'Robot_card', ... }
];

async function loadProjects() {
    const grid = document.getElementById('main-project-grid');

    for (const proj of projects) {
        try {
            // 1. Inject CSS
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `${proj.folder}/${proj.cssFile}`;
            document.head.appendChild(link);

            // 2. Fetch and Inject HTML
            const response = await fetch(`${proj.folder}/${proj.htmlFile}`);
            const html = await response.text();
            
            const wrapper = document.createElement('div');
            wrapper.innerHTML = html;
            grid.appendChild(wrapper.firstElementChild);

            // 3. Inject JS
            const script = document.createElement('script');
            script.src = `${proj.folder}/${proj.jsFile}`;
            document.body.appendChild(script);

        } catch (error) {
            console.error(`Error loading ${proj.id}:`, error);
        }
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);