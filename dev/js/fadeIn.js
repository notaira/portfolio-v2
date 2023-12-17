document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fadeIn');
  
    function checkVisibility() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (sectionTop < windowHeight * 0.75) {
          section.style.opacity = 1;
        }
      });
    }
  
    // Initial check on page load
    checkVisibility();
  
    // Check on scroll
    document.addEventListener('scroll', checkVisibility);
  });
  