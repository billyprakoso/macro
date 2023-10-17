function validateSignup() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    
    if (name.trim() === "") {
        showError("Nama tidak boleh kosong");
    } else if (email.trim() === "") {
        showError("Alamat Email tidak boleh kosong");
    } else if (password.trim() === "") {
        showError("Kata Sandi tidak boleh kosong");
    } else if (password !== confirmPassword) {
        showError("Konfirmasi Kata Sandi tidak cocok");
    } else {
        signupSuccess();
    }
}

function signupSuccess() {
    
    alert("Pendaftaran berhasil!");

    
    window.location.href = "login.html";
}

function showError(message) {
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.innerHTML = message;
}
