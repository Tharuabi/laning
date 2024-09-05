// Add scroll event listener
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 0);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
