document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    }

    if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Invalid email";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Minimum 6 characters";
        valid = false;
    }

    if (valid) {
        document.getElementById("success").textContent = "Form submitted successfully!";
    }
});

let count = 0;

function increment() {
    count++;
    document.getElementById("count").innerText = count;
}

function decrement() {
    if (count > 0) {
        count--;
        document.getElementById("count").innerText = count;
    }
}

function reset() {
    count = 0;
    document.getElementById("count").innerText = count;
}
