const serviceInfo = {
    "Web Design": {
        title: "Professional Website Design",
        description: "High-performance, responsive websites built to scale your business.",
        features: ["Mobile Friendly", "SEO Optimized", "Fast Loading", "E-commerce ready"]
    },
    "App Development": {
        title: "Mobile App Development",
        description: "Custom Android and iOS applications with seamless user experiences.",
        features: ["UI/UX Design", "Real-time Sync", "Push Notifications", "App Store Support"]
    },
    "Cyber Security": {
        title: "Cyber Security & Protection",
        description: "Protecting your data and digital infrastructure from modern threats.",
        features: ["Vulnerability Scans", "Employee Training", "Data Encryption", "Security Audits"]
    }
};

// 1. Logic to show the Modal
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        const name = card.querySelector('h3').innerText.trim();
        const data = serviceInfo[name];
        if (data) {
            document.getElementById('modal-body').innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.description}</p>
                <ul style="list-style:none; padding:10px 0;">
                    ${data.features.map(f => `<li><i class="fa-solid fa-check" style="color:#007bff"></i> ${f}</li>`).join('')}
                </ul>`;
            document.getElementById('service-modal').style.display = "block";
        }
    });
});

// 2. Logic for the two buttons inside the Modal
document.addEventListener('click', function(e) {
    const serviceTitle = document.querySelector('#modal-body h2')?.innerText;
    if (!serviceTitle) return;

    // WhatsApp logic
    if (e.target.closest('.modal-whatsapp')) {
        const msg = encodeURIComponent(`Hello Linkup Solutions! I'm interested in your ${serviceTitle} service.`);
        window.open(`https://wa.me/256727775685?text=${msg}`, '_blank');
    }

    // Email logic
    if (e.target.closest('.modal-email')) {
        const subject = encodeURIComponent(`Inquiry: ${serviceTitle}`);
        const body = encodeURIComponent(`Hello,\n\nI am interested in ${serviceTitle}. Please provide more information.`);
        window.location.href = `mailto:linkupsolutions8080@gmail.com?subject=${subject}&body=${body}`;
    }
});

// 3. General Close Logic
const modal = document.getElementById('service-modal');
const closeBtn = document.querySelector('.close-modal');
if(closeBtn) closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

// 4. Main Form WhatsApp Button
const waFormBtn = document.getElementById('whatsapp-btn');
if(waFormBtn) {
    waFormBtn.onclick = () => {
        const name = document.getElementById('user-name').value;
        const svc = document.getElementById('service-type').value;
        if(!name || !svc) return alert("Please fill Name and Service.");
        window.open(`https://wa.me/256727775685?text=Inquiry from ${name} for ${svc}`, '_blank');
    };
}