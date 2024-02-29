const images = ["/images/1.jpeg", "/images/2.jpeg", "/images/3.jpeg", "/images/4.jpeg", "/images/5.jpeg", "/images/6.jpeg", "/images/7.jpeg", "/images/8.jpeg", "/images/9.jpeg"];

let currentImageIndex = 0;

function showImage(index) {
    const imageElement = document.getElementById("slider-image");
    imageElement.src = images[index];

    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    if (index === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    }

    if (index === images.length - 1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        showImage(currentImageIndex);
    }
}

function nextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        showImage(currentImageIndex);
    }
}

showImage(currentImageIndex);
