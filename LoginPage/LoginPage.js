// password
const passwordInput = document.getElementById("password-input");
const mataIcon = document.querySelector(".mata");

mataIcon.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        mataIcon.src = "/image/LoginPage/Mata.png"; // ganti gambar jadi mata tertutup
    } else {
        passwordInput.type = "password";
        mataIcon.src = "/image/LoginPage/mata-kebuka.png"; // ganti gambar jadi mata biasa
    }
});

// back button
const backButton = document.querySelector(".panah-kiri");

backButton.addEventListener("click", () => {
    location.reload(); // ini akan me-refresh halaman
});

// login
document.querySelector('.login-button').addEventListener('click', function (e) {
    const emailInput = document.querySelector('.email-input').value.trim();

    if (!emailInput.endsWith('@gmail.com')) {
        alert('Email harus menggunakan domain @gmail.com');
        e.preventDefault();
        return;
    } else {
        window.location.href = '../MainPage/mainpage.html'
    }
});

document.querySelector('.login-button').addEventListener('click', function (e) {
    const emailInput = document.querySelector('.email-input').value.trim();

    if (!emailInput.endsWith('@gmail.com')) {
        alert('Email harus menggunakan domain @gmail.com');
        e.preventDefault();
        return;
    }
});

const emailField = document.querySelector('.email-input');
emailField.addEventListener('input', function () {
    if (!emailField.value.endsWith('@gmail.com')) {
        emailField.style.border = '2.5px solid red';
    } else {
        emailField.style.border = '2.5px solid green'; 
    }
});
