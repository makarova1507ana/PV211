$(document).ready(function() {
    let images = ['image1.jpg', 'image2.jpg', 'image3.jpeg', 'image4.jpg'];
    let currentIndex = 0;

    function showImage(index) {
        let imageUrl = images[index];
        $(".image-container img").attr('src', imageUrl); //обращаем к тегу img и устанваливаем новый атрибут / отображает изображения
    }

    function navigateToNextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    function navigateToPreviousImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        showImage(currentIndex);
    }

    $('.next-button').click(function() {
        navigateToNextImage();
    });

    $('.prev-button').click(function() {
        navigateToPreviousImage();
    })
})