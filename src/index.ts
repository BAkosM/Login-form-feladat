let t = [1,2,3];
t = t.filter(e => e > 2);

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("szoveg")!.addEventListener('input', (e : Event) => {
        /*let elem = document.getElementById("szoveg") as HTMLInputElement;
        document.body.style.backgroundColor = elem.value;*/
        let elem = e.currentTarget as HTMLInputElement;
        document.body.style.backgroundColor = elem.value;
    });
});