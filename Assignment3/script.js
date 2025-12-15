function registerUser() {
    let name = rName.value.trim();
    let email = rEmail.value.trim();
    let phone = rPhone.value.trim();
    let pass = rPass.value.trim();
    let valid = true;

    clearRegisterErrors();

    if (name === "") {
        rNameErr.innerText = "Name is required";
        valid = false;
    }

    if (!email.includes("@")) {
        rEmailErr.innerText = "Invalid email";
        valid = false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        rPhoneErr.innerText = "Phone must be 10 digits";
        valid = false;
    }

    if (pass.length < 6) {
        rPassErr.innerText = "Password must be 6 characters";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful");
        window.location.href = "login.html";
    }
}

function loginUser() {
    let email = lEmail.value.trim();
    let pass = lPass.value.trim();
    let valid = true;

    clearLoginErrors();

    if (email === "") {
        lEmailErr.innerText = "Email required";
        valid = false;
    }

    if (pass.length < 6) {
        lPassErr.innerText = "Invalid password";
        valid = false;
    }

    if (valid) {
        alert("Login Successful");
    }
}

function clearRegisterErrors() {
    rNameErr.innerText = "";
    rEmailErr.innerText = "";
    rPhoneErr.innerText = "";
    rPassErr.innerText = "";
}

function clearLoginErrors() {
    lEmailErr.innerText = "";
    lPassErr.innerText = "";
}
