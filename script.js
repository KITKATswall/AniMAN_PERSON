// script.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("AniMAN жүктелді!");

    const characters = document.querySelectorAll(".character");
    
    characters.forEach(character => {
        character.addEventListener("click", function () {
            alert("Сіз " + this.querySelector("p").textContent + " таңдадыңыз!");
        });
    });

    // Сакура жапырақтары анимациясын қосу
    function createSakura() {
        const sakura = document.createElement("div");
        sakura.classList.add("sakura");
        document.body.appendChild(sakura);
        
        sakura.style.left = Math.random() * window.innerWidth + "px";
        sakura.style.animationDuration = Math.random() * 3 + 2 + "s";

        setTimeout(() => {
            sakura.remove();
        }, 5000);
    }
    
    setInterval(createSakura, 500);
});
