document.addEventListener('DOMContentLoaded', function() {
  // Get the current year for copyright
  const currentYear = new Date().getFullYear();
  const copyrightElement = document.getElementById('copyright-year');
  if (copyrightElement) {
    copyrightElement.textContent = currentYear;
  }
  
  // Enhanced countdown timer functionality
  const countdownElement = document.getElementById('countdown');
  if (countdownElement) {
    // Set to 48 hours from now
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 48);
    
    function updateCountdown() {
      const currentDate = new Date();
      const difference = targetDate - currentDate;
      
      if (difference <= 0) {
        countdownElement.textContent = "We should be back online now. Please refresh the page.";
        
        // Add refresh suggestion
        const progressContainer = document.querySelector('.progress-container');
        if (progressContainer) {
          const refreshBtn = document.createElement('a');
          refreshBtn.href = window.location.href;
          refreshBtn.className = 'btn';
          refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh Page';
          progressContainer.appendChild(refreshBtn);
        }
        return;
      }
      
      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      // Format the output
      let timeString = '';
      
      if (days > 0) {
        timeString += `${days}d `;
      }
      
      timeString += `${hours}h ${minutes}m`;
      
      countdownElement.textContent = timeString;
    }
    
    // Update every 30 seconds
    updateCountdown();
    setInterval(updateCountdown, 30000);
  }
  
  // Add hover effects for contact items
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'rgba(15, 146, 227, 0.05)';
      const icon = this.querySelector('.contact-icon');
      if (icon) {
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = 'transform 0.3s ease';
      }
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'transparent';
      const icon = this.querySelector('.contact-icon');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
    });
  });
});
