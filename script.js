// --- DATA PROJECT PORTOFOLIO ---
const projects = [
    {
        id: 1,
        title: "Heart Disease Predictor",
        year: "2025",
        type: "Class Project (MLOps)",
        role: "Lead MLOps Engineer & Frontend Developer",
        streamlit: "https://streamlit.io/",
        github: "https://github.com/",
        description: "Heart Disease Risk Predictor is an end-to-end MLOps web application designed to help users estimate their cardiovascular risk based on clinical data. By utilizing Logistic Regression, the tool provides a diagnostic probability that assists individuals in making informed health decisions quickly.\n\nThis project involved a complete machine learning pipeline, from data preprocessing to model evaluation. I was responsible for the full-stack deployment using Streamlit, ensuring that the complex backend logic was translated into a simple, accessible interface for non-medical users."
    },
    {
        id: 2,
        title: "Tomato Leaf Classifier",
        year: "2025",
        type: "Group Class Project (Deep Learning)",
        role: "Deep Learning Developer",
        streamlit: "LINK TOMATO LEAF STREAMLIT DISINI",
        github: "https://github.com/",
        description: "Tomato Leaf Disease Classifier is a Computer Vision solution built to identify various plant pathologies through leaf images. Leveraging advanced CNN architectures, the app provides farmers with a high-accuracy tool (96%) to detect diseases like Bacterial Spot or Late Blight early.\n\nIn this project, I implemented MobileNet for the CNN architecture to ensure the model remained lightweight enough for mobile use while maintaining peak accuracy."
    },
    {
        id: 3,
        title: "BlueNav Health Catalog",
        year: "2026",
        type: "Group Class Project (HCI)",
        role: "Designer & Developer",
        vercel: "https://vercel.com/",
        description: "BlueNav is designed as a smart 'Digital First Aid Kit' that fits right in the user's pocket. It navigates users through interactive first aid tutorials, helps locate nearest healthcare facilities, and features an AI-based assistant.\n\nWe strictly applied Human Interface Guidelines (HIG) to create a clean, distraction-free, and intuitive interface."
    },
    {
        id: 4,
        title: "ScanGuard Breast Cancer",
        year: "2026",
        type: "Group Class Project (Computer Vision)",
        role: "Deep Learning Developer",
        github: "https://github.com/",
        streamlit: "https://streamlit.io/",
        description: "ScanGuard is an AI-powered medical imaging diagnostic tool designed to assist healthcare professionals in the early detection of breast cancer. By analyzing mammogram scans, the system identifies anomalies and potential malignancies.\n\nWe implemented EfficientNet CNN architecture for exceptional balance of accuracy and computational efficiency."
    },
    {
        id: 5,
        title: "NLP Sentiment Analysis",
        year: "2026",
        type: "Class Project (NLP)",
        role: "AI / NLP Developer",
        github: "LINK NLP GITHUB DISINI",
        streamlit: "LINK NLP STREAMLIT DISINI",
        description: "DESKRIPSI NLP SENTIMENT ANALYSIS DISINI. (Proyek ini berfokus pada analisis sentimen teks menggunakan teknik Natural Language Processing modern untuk mengklasifikasikan ulasan secara otomatis)."
    }
];

// --- RENDER PROJECT CARDS ---
const projectsGrid = document.getElementById('projectsGrid');

function renderProjects() {
    projectsGrid.innerHTML = projects.map(p => `
        <div class="project-card" onclick="openProjectModal(${p.id})">
            <div>
                <span class="project-tag">${p.type}</span>
                <h3 class="project-title">${p.title}</h3>
                <p class="project-snippet">${p.description.substring(0, 100)}...</p>
            </div>
            <div class="project-footer">
                <span><i class="far fa-calendar-alt"></i> ${p.year}</span>
                <span class="click-hint">Lihat Detail &rarr;</span>
            </div>
        </div>
    `).join('');
}

// --- MODAL POPUP ---
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openProjectModal(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    let linksHTML = '';
    if (project.github) {
        linksHTML += `<a href="${project.github}" target="_blank" class="btn btn-outline"><i class="fab fa-github"></i> GitHub</a>`;
    }
    if (project.streamlit) {
        linksHTML += `<a href="${project.streamlit}" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Streamlit</a>`;
    }
    if (project.vercel) {
        linksHTML += `<a href="${project.vercel}" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Vercel</a>`;
    }

    modalBody.innerHTML = `
        <span class="project-tag">${project.type}</span>
        <h2 style="font-size: 1.6rem; margin: 10px 0;">${project.title}</h2>
        <div class="modal-meta">
            <p><strong>Tahun:</strong> ${project.year}</p>
            <p><strong>Role:</strong> ${project.role}</p>
        </div>
        <div style="white-space: pre-line; color: var(--text-secondary); line-height: 1.6;">
            ${project.description}
        </div>
        <div class="modal-links">
            ${linksHTML}
        </div>
    `;

    modal.classList.add('active');
}

modalClose.addEventListener('click', () => modal.classList.remove('active'));
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

// --- HAMBURGER MENU MOBILE ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Inisialisasi
renderProjects();