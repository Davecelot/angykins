// Clean minimal JavaScript - no counter needed
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth fade-in effect
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.transition = 'opacity 1s ease';
      document.body.style.opacity = 1;
    }, 100);
  });