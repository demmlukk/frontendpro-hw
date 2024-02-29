let images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg'];

let randomIndex = Math.floor(Math.random() * images.length);

let randomImage = images[randomIndex];

console.log('Шлях до випадкового зображення: images/' + randomImage);
document.getElementById('randomImage').src = 'images/' + randomImage;
