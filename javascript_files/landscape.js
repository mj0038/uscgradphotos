function resizeImage() {
    // Select all images within slides
    const images = document.querySelectorAll('.landscape-slide img'); // Adjust the selector as needed

    images.forEach(image => {
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth - 20; // Subtracting 20px for the 10px boundary on each side
        const maxImageHeight = viewportHeight * 0.98; // 98% of the viewport height to consider any fixed header/footer

        // Adjust the image's max height based on the viewport
        image.style.maxHeight = `${maxImageHeight}px`;
        image.style.width = 'auto'; // Reset width to maintain aspect ratio

        // Adjust width or other properties based on your needs
        const imgRatio = image.naturalWidth / image.naturalHeight;
        const viewportRatio = viewportWidth / viewportHeight;

        if (imgRatio > viewportRatio) {
            // If the image ratio is greater than viewport ratio, adjust width to maintain aspect ratio
            image.style.width = `${viewportWidth}px`;
            image.style.height = 'auto';
        }
    });
}

// Adjusted to apply the resizeImage function to each image in the slideshow
function showSlides() {
    let slides = document.getElementsByClassName("landscape-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 4 seconds
    resizeImage(); // Ensure images are resized according to the new slide
}

// Call resizeImage on window resize and initial load
window.addEventListener('load', function() {
    showSlides();
    resizeImage();
});
window.addEventListener('resize', resizeImage);
