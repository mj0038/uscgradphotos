let slideIndex = 0;
let photoSlideIndex = 0;

// First slideshow function
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let shape = document.getElementById("dynamicShape");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    shape.className = 'shape';
    if (slideIndex % 2 === 0) {
        shape.classList.add("circle");
    } else {
        shape.classList.add("square");
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

// Second slideshow function
function showPhotoSlides() {
    let i;
    let photoSlides = document.getElementsByClassName("photo-slides");

    for (i = 0; i < photoSlides.length; i++) {
        photoSlides[i].style.display = "none";
    }

    photoSlideIndex++;
    if (photoSlideIndex > photoSlides.length) { photoSlideIndex = 1; }

    photoSlides[photoSlideIndex - 1].style.display = "block";
    setTimeout(showPhotoSlides, 4000);
}

// Initialize both slideshows
showSlides();
showPhotoSlides();
