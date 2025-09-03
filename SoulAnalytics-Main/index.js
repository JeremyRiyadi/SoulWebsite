document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const type = tab.getAttribute('data-type');
            contents.forEach(c => c.classList.remove('active'));
            document.getElementById(type).classList.add('active');
        });
    });
});

document.querySelector('#back-button').addEventListener("click", () => {
  window.location.href = "../MainPage/mainpage.html"
})