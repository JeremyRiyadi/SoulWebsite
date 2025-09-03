document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#your-playlist-title').addEventListener('click', function () {
        window.location.href = '../SoulcastPlaylist/SoulcastPlaylist.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.left-info').addEventListener('click', function () {
        window.location.href = '../SoulcastPlaylist/SoulcastPlaylist.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.pause-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const isActive = button.classList.contains('active');
            console.log('Clicked:', button);

            buttons.forEach(btn => {
                btn.classList.remove('active');
                const icon = btn.querySelector('img');
                if (icon) icon.src = '../image/SoulcastMain/play-icon.png';
            });

            if (!isActive) {
                button.classList.add('active');
                const icon = button.querySelector('img');
                if (icon) icon.src = '../image/SoulcastMain/pause-icon.png';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const likeImgs = document.querySelectorAll(".like-img");

    likeImgs.forEach(function (img) {
        img.addEventListener("click", function () {
            let src = this.src.split("/").pop();

            if (src === "love-penuh.png") {
                this.src = "../image/SoulcastMain/love-kosong.png";
            } else {
                this.src = "../image/SoulcastMain/love-penuh.png";
            }
        });
    });
});

const buttons = document.querySelectorAll('.pause-button');
const bottomPauseImg = document.querySelector('.bottom-pause img');

let currentlyPlaying = null;
let isPlaying = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.left-content');
        const title = parent.dataset.title;
        const creator = parent.dataset.creator;
        const image = parent.dataset.image;

        document.querySelector('.bottom-info h3').textContent = title;
        document.querySelector('.bottom-info p').textContent = creator;
        document.querySelector('.bottom-image img').src = image;

        buttons.forEach(btn => {
            btn.querySelector('img').src = '../image/SoulcastMain/play-icon.png';
        });

        if (currentlyPlaying === parent) {
            if (isPlaying) {
                button.querySelector('img').src = '../image/SoulcastMain/play-icon.png';
                bottomPauseImg.src = '../image/SoulcastMain/play-bottom.png';
                isPlaying = false;
            } else {

                button.querySelector('img').src = '../image/SoulcastMain/pause-icon.png';
                bottomPauseImg.src = '../image/SoulcastMain/pause-bottom.png';
                isPlaying = true;
            }
        } else {
            button.querySelector('img').src = '../image/SoulcastMain/pause-icon.png';
            bottomPauseImg.src = '../image/SoulcastMain/pause-bottom.png';
            currentlyPlaying = parent;
            isPlaying = true;
        }
    });
});

bottomPauseImg.addEventListener('click', () => {
    if (!currentlyPlaying) return;
    const activeBtnImg = currentlyPlaying.querySelector('.pause-button img');

    if (isPlaying) {
        bottomPauseImg.src = '../image/SoulcastMain/play-bottom.png';
        activeBtnImg.src = '../image/SoulcastMain/play-icon.png';
        isPlaying = false;
    } else {
        bottomPauseImg.src = '../image/SoulcastMain/pause-bottom.png';
        activeBtnImg.src = '../image/SoulcastMain/pause-icon.png';
        isPlaying = true;
    }
});

const toggleButton = document.getElementById('toggle-button');
const rightContainer = document.getElementById('right-container');
const madeForYouContainer = document.getElementById('made-for-you-container');

const otherChildren = Array.from(rightContainer.children).filter(child => child !== madeForYouContainer);

let isShowAll = false;

toggleButton.addEventListener('click', () => {
    isShowAll = !isShowAll;

    if (isShowAll) {
        otherChildren.forEach(child => child.style.display = 'none');
        rightContainer.classList.add('no-scroll');
        madeForYouContainer.classList.add('show-all-mode');
        toggleButton.textContent = 'Show Less';
    } else {
        otherChildren.forEach(child => child.style.display = '');
        rightContainer.classList.remove('no-scroll');
        madeForYouContainer.classList.remove('show-all-mode');
        toggleButton.textContent = 'Show All';
    }
});

document.querySelector('#a').addEventListener("click", () => {
  window.location.href = "../MainPage/mainpage.html"
})

document.querySelector('#left-container').addEventListener("click", () => {
  window.location.href = "../SoulcastPlaylist/SoulcastPlaylist.html"
})