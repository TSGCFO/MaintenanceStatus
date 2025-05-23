document.addEventListener('DOMContentLoaded', function() {
  // Get the current year for copyright
  const currentYear = new Date().getFullYear();
  const copyrightElement = document.getElementById('copyright-year');
  if (copyrightElement) {
    copyrightElement.textContent = currentYear;
  }
  
  // Simple countdown timer functionality if needed
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
        return;
      }
      
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      
      countdownElement.textContent = `${hours}h ${minutes}m`;
    }
    
    // Update every minute
    updateCountdown();
    setInterval(updateCountdown, 60000);
  }
});
