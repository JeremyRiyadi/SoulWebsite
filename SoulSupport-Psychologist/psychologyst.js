document.addEventListener('DOMContentLoaded', function () {
    // Navigation function
    function goBack() {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            console.log('Going back to home page');
            // window.location.href = 'index.html';
        }
    }

    // Fix: getElementsByClassName returns a collection, and selector should not have a dot
    const cards = document.getElementsByClassName("psychologist-card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
            window.location.href = "../SoulSupport-BookPsychologist/book.html";
        });
    }

    // Add fade-in animation for cards
    const cardList = document.querySelectorAll('.psychologist-card');
    cardList.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Add click effects for better interactivity
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('view-profile') || 
            e.target.classList.contains('book-here')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = 'scale(1)';
            }, 150);
        }
    });
});

document.querySelector('.back-button').addEventListener("click", () => {
  window.location.href = "../SoulSupportMain/SoulSupport-Main.html"
})

document.querySelector('.psychologist-card').addEventListener("click", () => {
  window.location.href = "../SoulSupport-BookPsychologist/book.html"
})