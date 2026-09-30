// DATA PROJECTS PORTOFOLIO
const projects = [
    {
        id: 1,
        title: "Heart Disease Predictor 🫀",
        year: "2025",
        type: "Class Project (MLOps)",
        role: "Lead MLOps Engineer & Frontend Developer",
        streamlit: "https://utsmlopsjantung-nxhzffsppc4hmjz9vthnav.streamlit.app/",
        github: "https://github.com/natashatsc/UTS_MLOPS_jantung",
        description: "Heart Disease Risk Predictor is an end-to-end MLOps web application designed to help users estimate their cardiovascular risk based on clinical data. By utilizing Logistic Regression, the tool provides a diagnostic probability that assists individuals in making informed health decisions quickly.\n\nThis project involved a complete machine learning pipeline, from data preprocessing to model evaluation. I was responsible for the full-stack deployment using Streamlit, ensuring that the complex backend logic was translated into a simple, accessible interface for non-medical users."
    },
    {
        id: 2,
        title: "Tomato Leaf Classifier 🍅",
        year: "2025",
        type: "Group Class Project (Deep Learning)",
        role: "Deep Learning Developer",
        streamlit: "https://kuzd98yln6xfusiyfpzge4.streamlit.app/",
        github: "https://github.com/natashatsc",
        description: "Tomato Leaf Disease Classifier is a Computer Vision solution built to identify various plant pathologies through leaf images. Leveraging advanced CNN architectures, the app provides farmers with a high-accuracy tool (96%) to detect diseases like Bacterial Spot or Late Blight early.\n\nIn this project, I implemented MobileNet for the CNN architecture to ensure the model remained lightweight enough for mobile use while maintaining peak accuracy."
    },
    {
        id: 3,
        title: "Traffic Analytics & Vehicle Counting 🚗",
        year: "2025",
        type: "Group Project (Deep Learning & Computer Vision)",
        role: "Computer Vision & Model Integration Developer",
        github: "https://github.com/vorddd/deep_learning-aol",
        description: "An experimental video-based vehicle counting and traffic analytics system powered by Deep Learning. The system integrates YOLOv8 for real-time vehicle detection (cars, motorbikes, buses, trucks) and the Simple Online and Realtime Tracking (SORT) algorithm to maintain consistent vehicle tracking across frames.\n\nKey features include a virtual line-crossing mechanism for automated counting and a homography perspective transformation matrix for real-world vehicle speed estimation. The application exports structured performance logs including traffic flow, density, and average speed metrics."
    },
    {
        id: 4,
        title: "BlueNav Health Catalog 🚑",
        year: "2026",
        type: "Group Class Project (HCI)",
        role: "Designer & Developer",
        vercel: "https://hci-amber-theta.vercel.app/",
        description: "BlueNav is designed as a smart 'Digital First Aid Kit' that fits right in the user's pocket. It navigates users through interactive first aid tutorials, helps locate nearest healthcare facilities, and features an AI-based assistant.\n\nWe strictly applied Human Interface Guidelines (HIG) to create a clean, distraction-free, and intuitive interface."
    },
    {
        id: 5,
        title: "ScanGuard Breast Cancer 🩺",
        year: "2026",
        type: "Group Class Project (Computer Vision)",
        role: "Deep Learning Developer",
        github: "https://github.com/Dustinedde22/Breastcancer",
        streamlit: "https://breastcancer-4it4ahasdiurcrqguxg7km.streamlit.app/",
        description: "ScanGuard is an AI-powered medical imaging diagnostic tool designed to assist healthcare professionals in the early detection of breast cancer. By analyzing mammogram scans, the system identifies anomalies and potential malignancies.\n\nWe implemented EfficientNet CNN architecture for exceptional balance of accuracy and computational efficiency."
    },
    {
        id: 6,
        title: "Decoding Online Toxicity 💬",
        year: "2026",
        type: "Group Final Project (NLP)",
        role: "NLP / Deep Learning Developer",
        github: "https://github.com/ChYpHuTh14/cyberbullying-detection",
        streamlit: "https://indobert-cyberbullying-detection.streamlit.app/",
        description: "Decoding Online Toxicity is an NLP solution designed to combat cyberbullying and hate speech across digital platforms. Built using fine-tuned IndoBERT—a pre-trained contextual Transformer model—the application effectively classifies informal Indonesian text containing slang, abbreviations, and personal attacks.\n\nThe project features an interactive Streamlit web application that provides real-time toxicity classification alongside visual confidence scores. To ensure real-world efficacy, the system underwent User Acceptance Testing (UAT) and psychological expert evaluation to serve as an intuitive content moderation tool."
    }
];

// RENDER CARDS TO GRID
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
                <span>🗓️ ${p.year}</span>
                <span class="click-hint">Lihat Detail &rarr;</span>
            </div>
        </div>
    `).join('');
}

// MODAL POPUP
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openProjectModal(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    let linksHTML = '';
    if (project.github) {
        linksHTML += `<a href="${project.github}" target="_blank" class="btn btn-pop-white"><i class="fab fa-github"></i> GitHub</a>`;
    }
    if (project.streamlit) {
        linksHTML += `<a href="${project.streamlit}" target="_blank" class="btn btn-pop-purple"><i class="fas fa-external-link-alt"></i> Streamlit App</a>`;
    }
    if (project.vercel) {
        linksHTML += `<a href="${project.vercel}" target="_blank" class="btn btn-pop-purple"><i class="fas fa-external-link-alt"></i> Vercel App</a>`;
    }

    modalBody.innerHTML = `
        <span class="project-tag">${project.type}</span>
        <h2 style="font-size: 1.8rem; margin: 10px 0;">${project.title}</h2>
        <div class="modal-meta">
            <p><strong>🗓️ Tahun:</strong> ${project.year}</p>
            <p><strong>👩‍💻 Role:</strong> ${project.role}</p>
        </div>
        <div style="white-space: pre-line; color: var(--text-muted); line-height: 1.6;">
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

// HAMBURGER MENU MOBILE
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Inisialisasi
renderProjects();