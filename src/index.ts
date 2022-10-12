
const password = document.getElementById('password');
var hiba1 :number = 0;
var hiba2 :number = 0;
var hiba3 :number = 0;
var hiba4 :number = 0;
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("username")!.addEventListener("change", () => {
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const conditions = ["&","=","_","'","-","+",",","<",">",".."];
        if (username.length > 5 && username.length < 31){
            if (!conditions.some(el => username.includes(el))){
                hiba1 = 0;
            } else {
                hiba1 = 2;
            }
        } else {
            hiba1 = 1;
        }
    });
    document.getElementById("email1")!.addEventListener("change", () => {
        const email = (document.getElementById('email1') as HTMLInputElement).value;
        const validateEmail = (email: string) => {
            return String(email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
        };
        if ((validateEmail(email))){
            hiba2 = 0;
        } else {
            hiba2 = 1;
        }
    });
    document.getElementById("email2")!.addEventListener("change", () => {
        const email = (document.getElementById('email1') as HTMLInputElement).value;
        const reemail = (document.getElementById('email2') as HTMLInputElement).value;
        if (email != reemail){
            hiba3 = 1;
        } else {
            hiba3 = 0;
        }
    });
    document.getElementById("submit")!.addEventListener("click", () => {
        if (hiba1 === 0) {
            if (hiba2 === 0) {
                if (hiba3 === 0) {
                    if (hiba4 === 0) {

                    } else {

                    }
                } else {
                    alert("Nem egyezik a két email!")
                }
            } else {
                alert("Email nem megfelelő!");
            }
        } else if (hiba1 === 1) {
            alert("Felhasználónévnek 6-30 karakter hoszúnak kell lennie!");
        } else if (hiba1 === 2){
            alert("Felhasználónév nem megfelelő karaktert tartalmaz!")
        }
    });
});