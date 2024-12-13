/*menu*/

const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".headermenu");
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    // Mise à jour des attributs ARIA pour accessibilité
    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}

/*lightbox*/

const lightBox = document.querySelector("#lightbox");
const lightBoxImg = lightBox.querySelector("img");

document.body.addEventListener("click", (evt)=> {
    console.log(evt.target);

    if (evt.target.matches("[data-full-img]")) {
        lightBoxImg.src = evt.target.dataset.fullImg;
        lightBox.showModal();}
    });


 lightBox.addEventListener("click", (evt) => {
    lightBox.classList.add("sortie");
    lightBox.addEventListener("animationend", () => {
        lightBox.classList.remove("sortie");
        lightBox.close();
    }, {once: true});
});


/*carrousel*/ 

const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__item");


const scrollAmount = premierItem ? premierItem.clientWidth : 0;

if (carousel && scrollAmount > 0) {
  
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
}