let slideIndex = 0;
let photoSlideIndex = 0;
let videoSlideIndex = 0; // New index for video slides

function toggleShape() {
    const shape = document.getElementById("dynamicShape");
    shape.className = 'shape'; // Reset to base class
    shape.classList.add(slideIndex % 2 === 0 ? "circle" : "square");
}

function changeSlides(slides, index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) { index = 1; }
    slides[index - 1].style.display = "block";
    return index; // Return updated index
}

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    slideIndex = changeSlides(slides, slideIndex);
    toggleShape(); // Update shape based on current slideIndex
    setTimeout(showSlides, 4000);
}

function showPhotoSlides() {
    const photoSlides = document.getElementsByClassName("photo-slides");
    photoSlideIndex = changeSlides(photoSlides, photoSlideIndex);
    setTimeout(showPhotoSlides, 4000);
}


// Initialize all slideshows
showSlides();
showPhotoSlides();


// Modal functionality
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Adding event listeners to all images including the extra photos
document.querySelectorAll('.slide, .photo-slides img, .extra-photo img').forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Set the src of the modal image to the clicked image's src
        captionText.innerHTML = this.getAttribute("data-caption") || this.alt; // Use data-caption or alt text as the caption
    };
});


// Close the modal when the user clicks on <span> (x)
document.getElementsByClassName("close")[0].onclick = function() {
    modal.style.display = "none";
    var videoElements = modal.getElementsByTagName("video");
    for (var i = 0; i < videoElements.length; i++) {
        videoElements[i].pause(); // Pause video when closing modal
    }
};


// Close the modal if the user clicks outside the image/video
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        var videoElements = modal.getElementsByTagName("video");
        for (var i = 0; i < videoElements.length; i++) {
            videoElements[i].pause(); // Pause video when closing modal
        }
    }
};
