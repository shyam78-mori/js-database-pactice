// let form = document.querySelector(".sign-up");
// let email = document.querySelector('#email');
// let password = document.querySelector('#password');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
// //   console.log("form successfully");
// // console.log(email.value,password.value);

// console.log(form.email.value,form.userPassword.value);

// });



document.querySelector(".sign-up").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the form
    let email = document.getElementById("email").value;
    // let phone = document.getElementById("phone").value;s
    let password = document.getElementById("password").value;

    // Regular Expressions for validation
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phoneRegex = /^\d{10}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

    // Validate email
    if (!emailRegex.test(email)) {
        alert("Invalid email address!");
        return;
    }

    // Validate phone number
    // if (!phoneRegex.test(phone)) {
    //     alert("Invalid phone number. Must be 10 digits.");
    //     return;
    // }

    // Validate password
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters, including uppercase, lowercase, a number, and a symbol.");
        return;
    }

    // If all validations pass
    alert("Form submitted successfully!");

    // Clear the form after successful submission
    document.getElementById("myForm").reset();
});