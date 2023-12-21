// Navigation Interactivity: JavaScript code generated with assistance from ChatGPT
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        // Get the current scroll position
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Set a flag to determine if any section is in the viewport
        let sectionInView = false;

        // Loop through each section and check if it's in the viewport
        navLinks.forEach(link => {
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const sectionTop = targetSection.offsetTop;
                const sectionBottom = sectionTop + targetSection.offsetHeight;

                // Check if the scroll position is within the section
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    sectionInView = true;

                    // Add 'active' class to the current link with a delay
                    setTimeout(() => {
                        // Remove 'active' class from all links
                        navLinks.forEach(link => link.classList.remove('active'));

                        // Add 'active' class to the current link
                        link.classList.add('active');
                    }, 200); // Adjust the delay as needed
                }
            }
        });

        // If no section is in the viewport, remove 'active' class from all links
        if (!sectionInView) {
            navLinks.forEach(link => link.classList.remove('active'));
        }
    }

    // Attach the handleScroll function to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Call the handleScroll function once to set the initial state
    handleScroll();
});
