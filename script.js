function openLightbox(src) {
    const lightbox = document.createElement("div");

    lightbox.className = "lightbox";

    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img src="${src}" alt="Good Boy Gallery">
    `;

    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", function () {
        lightbox.remove();
    });
}

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
});

function toggleMenu() {
    document.querySelector("nav").classList.toggle("mobile-open");
}