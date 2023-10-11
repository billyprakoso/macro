function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rememberMe = document.getElementById("rememberMe").checked;

    if (email.trim() === "") {
        showError("Alamat Email tidak boleh kosong");
    } else if (password.trim() === "") {
        showError("Kata Sandi tidak boleh kosong");
    } else {
        if (checkCredentials(email, password)) {
            loginSuccess();
        } else {
            showError("Login gagal. Periksa kembali email dan kata sandi Anda.");
        }
    }
}

function checkCredentials(email, password) {
    var storedEmail = "test@example.com";
    var storedPassword = "testpassword"; 

    return email === storedEmail && password === storedPassword;
}

function loginSuccess() {
    alert("Login successful!");
    window.location.href = "Quiz.html";
}

function showError(message) {
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.innerHTML = message;
}



