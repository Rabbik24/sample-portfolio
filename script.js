// Smooth Scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust offset for sticky header
            behavior: 'smooth'
        });
    });
});

// Change header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#2c3e50'; // Dark color when scrolling
    } else {
        header.style.background = '#1e2a38'; // Original color at the top
    }

    // Highlight active section in the navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 70 && window.scrollY < sectionTop + sectionHeight - 70) {
            const currentId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentId) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Animated reveal of sections on scroll
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections); // Also reveal on load

// Debounce function to limit the rate of function execution
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use the debounce function for scroll events
window.addEventListener('scroll', debounce(revealSections, 100));


// Get modal, button, and close elements
const modal = document.getElementById("contactFormModal");
const btn = document.getElementById("getInTouchBtn");
const closeBtn = document.getElementsByClassName("close-btn")[0];

// Open modal when button is clicked
btn.onclick = function() {
  modal.style.display = "block";
}

// Close modal when close button is clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close modal if clicked outside the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

