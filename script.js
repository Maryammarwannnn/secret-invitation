const envelope = document.getElementById("envelope");
const seal = document.getElementById("seal");

const acceptBtn = document.getElementById("acceptBtn");

const finalScreen =
document.getElementById("finalScreen");

let opened = false;

envelope.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    seal.classList.add("break-seal");

    setTimeout(() => {

        envelope.classList.add("open");

    },300);

});

acceptBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    envelope.style.display = "none";

    finalScreen.style.display = "block";

});
const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

musicBtn.addEventListener("click",()=>{

    bgMusic.play();

    musicBtn.innerHTML =
    "🎷 Mission Active";

});