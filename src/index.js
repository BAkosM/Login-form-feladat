"use strict";
var hiba1 = 0;
var hiba2 = 0;
var hiba3 = 0;
var hiba4 = 0;
var hiba5 = 0;
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("username").addEventListener("change", () => {
        const username = document.getElementById('username').value;
        const conditions = ["&", "=", "_", "'", "-", "+", ",", "<", ">", ".."];
        if (username.length > 5 && username.length < 31) {
            if (!conditions.some(el => username.includes(el))) {
                hiba1 = 0;
            }
            else {
                hiba1 = 2;
            }
        }
        else {
            hiba1 = 1;
        }
    });
    document.getElementById("email1").addEventListener("change", () => {
        const email = document.getElementById('email1').value;
        const validateEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        };
        if ((validateEmail(email))) {
            hiba2 = 0;
        }
        else {
            hiba2 = 1;
        }
    });
    document.getElementById("email2").addEventListener("change", () => {
        const email = document.getElementById('email1').value;
        const reemail = document.getElementById('email2').value;
        if (email != reemail) {
            hiba3 = 1;
        }
        else {
            hiba3 = 0;
        }
    });
    document.getElementById("password").addEventListener("change", () => {
        const password = document.getElementById('password').value;
        var conditions = /^[a-zA-Z\-0-9.-_]/;
        if (password.length > 4 && password.length < 11) {
            if (password.match(conditions)) {
                hiba4 = 0;
            }
            else {
                hiba4 = 2;
            }
        }
        else {
            hiba4 = 1;
        }
    });
    document.getElementById("password2").addEventListener("change", () => {
        const password = document.getElementById('password').value;
        const repassword = document.getElementById('password2').value;
        if (password != repassword) {
            hiba5 = 1;
        }
        else {
            hiba5 = 0;
        }
    });
    document.getElementById("submit").addEventListener("click", () => {
        if (hiba1 === 0) {
            if (hiba2 === 0) {
                if (hiba3 === 0) {
                    if (hiba4 === 0) {
                        if (hiba5 === 0) {
                        }
                        else {
                            alert("Nem egyezik a két jelszó!");
                        }
                    }
                    else if (hiba4 === 1) {
                        alert("Jelszónak 5-10 karakter hoszúnak kell lennie!");
                    }
                    else {
                        alert("Nem megfelelő karakter a jelszóban!");
                    }
                }
                else {
                    alert("Nem egyezik a két email!");
                }
            }
            else {
                alert("Email nem megfelelő!");
            }
        }
        else if (hiba1 === 1) {
            alert("Felhasználónévnek 6-30 karakter hoszúnak kell lennie!");
        }
        else if (hiba1 === 2) {
            alert("Felhasználónév nem megfelelő karaktert tartalmaz!");
        }
    });
});
