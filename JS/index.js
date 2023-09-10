document.addEventListener("DOMContentLoaded", function() {
    const video1 = document.getElementById("video1");
    const video2 = document.getElementById("video2");

    video1.addEventListener("ended", function() {
        video2.play();
        video1.style.display = "none";
        video2.style.display = "block";
    });

    video2.addEventListener("ended", function() {
        video1.play();
        video2.style.display = "none";
        video1.style.display = "block";
    });

    video1.play();
    video2.style.display = "none";
});

window.addEventListener('load', function () {
    var carouselItems = document.querySelectorAll('.contents');

    carouselItems.forEach(function (item) {
        if (item.scrollHeight > item.clientHeight) {
            item.classList.add('overflow');
        } else {
            item.classList.remove('overflow');
        }
    });
});

