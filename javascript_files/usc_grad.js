document.addEventListener('DOMContentLoaded', function () {
    initializeSlideshows(["portfolio-slide", "additional-photo", "vertical-slide"]);
    initializeModal();
});

function initializeSlideshows(slideClassNames) {
    slideClassNames.forEach((className) => {
        let slideIndex = 0;
        function showSlides() {
            let slides = document.getElementsByClassName(className);
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 4000); // Change image every 4 seconds
        }
        showSlides();
    });
}

function initializeModal() {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const span = document.getElementsByClassName("close")[0]; // The close button
    let currentIndex = 0; // Track the current index of the displayed photo
    const images = document.querySelectorAll('.portfolio-slide img, .additional-photo img, .vertical-slide img');

    // Flatten NodeList to Array to enable indexOf
    const imagesArray = Array.from(images);

    images.forEach((img, index) => {
        img.addEventListener('click', function () {
            currentIndex = imagesArray.indexOf(img); // Update currentIndex to the clicked image
            openModalImage(img);
        });
    });

    function openModalImage(img) {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    }

    modal.querySelector(".prev").addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openModalImage(imagesArray[currentIndex]);
    });

    modal.querySelector(".next").addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % images.length;
        openModalImage(imagesArray[currentIndex]);
    });

    span.onclick = function() {
        modal.style.display = "none";
    };

    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Prevent clicks inside the modal content from closing it
    modal.querySelector(".modal-content-wrapper").onclick = (event) => {
        event.stopPropagation();
    };
}
