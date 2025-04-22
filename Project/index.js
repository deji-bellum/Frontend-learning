document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('reportButton');
  
    button.addEventListener('click', () => {
      // Redirect to contact.html
      window.location.href = 'contact.html';
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const bigButton = document.getElementById('bigReportACase');
  
    bigButton.addEventListener('click', () => {
      // Open contact.html in a new tab
      window.open('contact.html', '_blank');
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.getElementById('slideshow');
    const images = ['Pictures/Why Liber8 jpeg.png', 'Pictures/Kids 2.png', 'Pictures/Kids 3.png']; // Add more image names if you like
    let currentIndex = 0;
  
    setInterval(() => {
      // Fade out
      imageElement.classList.add('fade-out');
  
      setTimeout(() => {
        // Change the image source
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
  
        // Fade back in
        imageElement.classList.remove('fade-out');
      }, 1000); // Matches the CSS transition duration
    }, 5000); // Changes image every 5 seconds
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("carouselTrack");
    let position = 0;
  
    function slideImages() {
      position -= 1; // move 1px to the left
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0; // reset position to loop
      }
      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(slideImages); // call again for smooth loop
    }
  
    slideImages();
  });
  
  
  
