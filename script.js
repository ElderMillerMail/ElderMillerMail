// ===============================
// Fade in sections on scroll
// ===============================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".benefit, .mission, footer").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// ===============================
// Simple Mailchimp validation
// ===============================

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {

        const email = form.querySelector('input[name="EMAIL"]');

        if (!email.value.trim()) {
            e.preventDefault();
            alert("Please enter your email address.");
            email.focus();
        }

    });
}
