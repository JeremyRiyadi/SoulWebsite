document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector(".like-img1");
    img.addEventListener("click", function () {
        let src = this.src.split("/").pop(); // Ambil nama file saja

        if (src === "Like-oren.png") {
            this.src = "/image/WhisperingSoul/bagian-tengah/Like-abu.png";
        } else {
            this.src = "/image/WhisperingSoul/bagian-tengah/Like-oren.png";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector(".like-img2");
    img.addEventListener("click", function () {
        let src = this.src.split("/").pop(); // Ambil nama file saja

        if (src === "Like-oren.png") {
            this.src = "/image/WhisperingSoul/bagian-tengah/Like-abu.png";
        } else {
            this.src = "/image/WhisperingSoul/bagian-tengah/Like-oren.png";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector(".like-img3");
    img.addEventListener("click", function () {
        let src = this.src.split("/").pop(); // Ambil nama file saja

        if (src === "Like-oren.png") {
            this.src = "/image/WhisperingSoul/bagian-tengah/Like-abu.png";
        } else {
            this.src = "/image/WhisperingSoul/bagian-tengah/Like-oren.png";
        }
    });
});

document.querySelector('.back-button').addEventListener("click", () => {
  window.location.href = "../MainPage/mainpage.html"
})