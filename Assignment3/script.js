function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    let valid = true;

    document.getElementById("loginEmailError").innerHTML = "";
    document.getElementById("loginPasswordError").innerHTML = "";

    if (email === "") {
        document.getElementById("loginEmailError").innerHTML = "Email is required";
        valid = false;
    } else if (!email.includes("@")) {
        document.getElementById("loginEmailError").innerHTML = "Invalid email format";
        valid = false;
    }

    if (password === "") {
        document.getElementById("loginPasswordError").innerHTML = "Password is required";
        valid = false;
    } else if (password.length < 6) {
        document.getElementById("loginPasswordError").innerHTML = "Password must be at least 6 characters";
        valid = false;
    }

    if (valid) {
        alert("Login Successful");
        window.location.href = "register.html"; // 🔥 Redirect
    }
}

function register() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let phone = document.getElementById("regPhone").value;
    let password = document.getElementById("regPassword").value;
    let valid = true;

    document.querySelectorAll(".error").forEach(e => e.innerHTML = "");

    if (name === "") {
        document.getElementById("regNameError").innerHTML = "Name is required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("regEmailError").innerHTML = "Email is required";
        valid = false;
    } else if (!email.includes("@")) {
        document.getElementById("regEmailError").innerHTML = "Invalid email format";
        valid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("regPhoneError").innerHTML = "Phone must be 10 digits";
        valid = false;
    }

    if (password === "") {
        document.getElementById("regPasswordError").innerHTML = "Password is required";
        valid = false;
    } else if (password.length < 6) {
        document.getElementById("regPasswordError").innerHTML = "Password must be at least 6 characters";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful");
    }
}
