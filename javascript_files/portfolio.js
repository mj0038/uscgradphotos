// Slide show for portfolio slides
function initializePortfolioSlideshow() {
    let portfolioSlideIndex = 0;
    showPortfolioSlides();

    function showPortfolioSlides() {
        let slides = document.getElementsByClassName("portfolio-slide");
        for (let slide of slides) {
            slide.style.display = "none";
        }
        portfolioSlideIndex++;
        if (portfolioSlideIndex > slides.length) { portfolioSlideIndex = 1; }
        slides[portfolioSlideIndex - 1].style.display = "block";
        setTimeout(showPortfolioSlides, 4000); // Change image every 4 seconds
    }
}

// Slide show for additional photos
function initializeAdditionalPhotos() {
    let photoIndex = 0; // Initial photo index
    const photos = document.getElementsByClassName("additional-photo");
    showPhoto(photoIndex);

    function showPhoto(index) {
        for (let photo of photos) {
            photo.style.display = "none";
        }
        photos[index].style.display = "block";
    }

    document.querySelector(".next").addEventListener("click", () => {
        photoIndex = (photoIndex + 1) % photos.length;
        showPhoto(photoIndex);
    });

    document.querySelector(".prev").addEventListener("click", () => {
        photoIndex = (photoIndex - 1 + photos.length) % photos.length;
        showPhoto(photoIndex);
    });
}
// Modal functionality
function initializeModal() {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const span = document.getElementsByClassName("close")[0]; // The close button

    document.querySelector('.additional-photos').addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            modal.style.display = "block";
            modalImg.src = event.target.src; // Correctly access src of the clicked image
            captionText.innerHTML = event.target.alt; // Correctly access alt of the clicked image
        }
    });

    span.onclick = () => modal.style.display = "none";
    modal.onclick = () => modal.style.display = "none";

    // Prevent clicks inside the modal content from closing it
    modal.querySelector(".modal-content-wrapper").onclick = (event) => {
        event.stopPropagation();
    };
}


// Initialize all functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializePortfolioSlideshow();
    initializeAdditionalPhotos();
    initializeModal();
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.photo-gallery img');
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    const closeModal = document.querySelector('.close');

    images.forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closeModal.addEventListener('click', function () { 
        modal.style.display = "none";
    });
});

