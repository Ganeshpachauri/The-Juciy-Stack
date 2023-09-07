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

    // Start with the first video
    video1.play();
    video2.style.display = "none";
});
