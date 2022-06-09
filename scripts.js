"use strict";
const err = document.getElementById("error-message");
const form = document.getElementById("sign-up");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const conf = document.getElementById("confirm-password");
const errorIcon = '<img src="./alert-circle.svg" class="error" alt="">';
form.addEventListener("submit", (e) => {
    let messages = [];
    if (username.value === "" || username.value === null) {
        messages.push(`<div class="err-msg">${errorIcon} Username is required.</div>`);
    }
    if (conf.value != pass.value) {
        messages.push(`<div class="err-msg">${errorIcon} Passwords don't match.</div>`);
    }
    if (pass.value.length < 8) {
        messages.push(`<div class="err-msg">${errorIcon} Password is too short. Minimum length: 8 characters.</div>`);
    }
    if (messages.length > 0) {
        e.preventDefault();
        err.innerHTML = messages.join(',');
    }
    else {
        alert("Thank you for signing up!");
    }
});
