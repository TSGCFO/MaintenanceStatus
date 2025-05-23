document.addEventListener('DOMContentLoaded', function() {
  // Add additional animation to the floating shapes
  const shapes = document.querySelectorAll('.shape');
  
  shapes.forEach((shape, index) => {
    // Create random animations for each shape
    const randomX = Math.floor(Math.random() * 100) - 50; // -50 to 50
    const randomY = Math.floor(Math.random() * 100) - 50; // -50 to 50
    const randomRotate = Math.floor(Math.random() * 360); // 0 to 360
    const randomScale = 0.8 + Math.random() * 0.4; // 0.8 to 1.2
    
    // Apply random transforms with CSS transitions
    shape.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(${randomScale})`;
    shape.style.transition = 'transform 0.5s ease';
    
    // Add mousemove parallax effect to the shapes
    document.addEventListener('mousemove', function(e) {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const depth = (index + 1) * 0.05;
      const moveX = (mouseX - 0.5) * depth * 100;
      const moveY = (mouseY - 0.5) * depth * 100;
      
      shape.style.transform = `translate(${randomX + moveX}px, ${randomY + moveY}px) rotate(${randomRotate}deg) scale(${randomScale})`;
    });
  });
  
  // Add subtle pulse animation to gradient
  const gradientElement = document.querySelector('.gradient-animation');
  if (gradientElement) {
    setInterval(() => {
      gradientElement.style.animation = 'none';
      gradientElement.offsetHeight; // Trigger reflow
      gradientElement.style.animation = 'gradient-shift 15s ease infinite';
    }, 15000);
  }
  
  // Add responsive behavior based on scroll
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const dynamicBackground = document.querySelector('.dynamic-background');
    
    if (dynamicBackground) {
      // Adjust opacity based on scroll
      const opacity = Math.max(0.1, 0.9 - (scrollPosition / 1000));
      dynamicBackground.style.opacity = opacity;
    }
  });
});