const email = document.getElementById('email1');
const reemail = document.getElementById('email2');
const password = document.getElementById('password');
var hiba1 :number = 0;
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
    document.getElementById("submit")!.addEventListener("click", () => {
        if (hiba1 === 0) {

        } else if (hiba1 === 1) {
            alert("Felhasználónévnek 6-30 karakter hoszúnak kell lennie!");
        } else if (hiba1 === 2){
            alert("Felhasználónév nem megfelelő karaktert tartalmaz")
        }
    });
});