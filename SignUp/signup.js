document.querySelector('.gender-button').addEventListener("click", function(){
    this.outerHTML = `
            <div class="gender">   
                <button class="button male">Male</button>
                <button class="button female">Female</button>
            </div>
    `;
})

document.addEventListener("click", function(event){
    if (event.target.classList.contains("male")) {
        document.querySelector(".gender").outerHTML = `
            <div class="male-button">
                <button class="male-black-button">Male</button>
            </div>
        `;
    }
    
    if (event.target.classList.contains("female")) {
        document.querySelector(".gender").outerHTML = `
            <div class="female-button">
                <button class="female-black-button">Female</button>
            </div>
        `;
    }

    if (event.target.classList.contains("male-black-button") || event.target.classList.contains("female-black-button")) {
        // Jika tombol hitam diklik, kembalikan ke pilihan awal
        event.target.closest("div").outerHTML = `
            <div class="gender">   
                <button class="button male">Male</button>
                <button class="button female">Female</button>
            </div>
        `;
    }
});

// back button
document.querySelector('.back-button').addEventListener('click', function () {
    window.location.href = "../LoginPage/LoginPage.html";
});

// password
const passwordInput = document.getElementById("password");
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

// validation
document.querySelector('.signup-button').addEventListener('click', function (e) {
    const name = document.querySelector('.name-container');
    const email = document.querySelector('.email-container');
    const password = document.querySelector('.password-container');
    const birthdate = document.querySelector('.birthdate-container');
    const age = document.querySelector('.age-container');

    let valid = true;

    // Reset border
    [name, email, password, birthdate, age].forEach(field => {
        field.style.border = '2px solid #ccc';
    });

    // Validasi Nama
    if (name.value.trim() === '') {
        name.style.border = '2.5px solid red';
        valid = false;
    }

    // Validasi Email
    if (!email.value.trim().endsWith('@gmail.com')) {
        email.style.border = '2.5px solid red';
        valid = false;
    }

    // Validasi Password
    if (password.value.trim() === '') {
        password.style.border = '2.5px solid red';
        valid = false;
    }

    // Validasi Birthdate (format dd/mm/yyyy)
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!datePattern.test(birthdate.value.trim())) {
        birthdate.style.border = '2.5px solid red';
        valid = false;
    }

    // Validasi Age (harus angka)
    if (isNaN(age.value.trim()) || age.value.trim() === '') {
        age.style.border = '2.5px solid red';
        valid = false;
    }

    if (!valid) {
        alert('Please fill out all fields correctly.');
        e.preventDefault(); 
    } else {
        window.location.href = "../LoginPage/LoginPage.html";
    }
});