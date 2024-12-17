document.addEventListener('DOMContentLoaded', function() {
    const headerText = document.getElementById('header-text');
    headerText.classList.add('typing');
});
window.onload = function() {
    var video = document.getElementById('video');
    // If the video ends, it will start from the beginning again
    video.onended = function() {
      video.play();  // Restart the video automatically
    };
  };
  
