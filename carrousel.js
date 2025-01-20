const images = document.querySelectorAll(".carousel-image");
const container = document.querySelector(".carousel-container");

// Dupliquer les premières et dernières images
const firstImage = images[0].cloneNode(true);
const lastImage = images[images.length - 1].cloneNode(true);

container.appendChild(firstImage); // Ajouter la première image à la fin
container.insertBefore(lastImage, images[0]); // Ajouter la dernière image au début

let currentIndex = 1; // L'index commence à 1
let isAnimating = false; // Bloque l'interaction pendant l'animation
container.style.transform = `translateX(-${currentIndex * 100}%)`;

// Fonction pour mettre à jour la position du conteneur
function updateSlide(index) {
    isAnimating = true; // Bloquer l'interaction
    container.style.transition = 'transform 0.45s ease';
    container.style.transform = `translateX(-${index * 100}%)`;
}

// Gestion du glissement après l'animation
container.addEventListener("transitionend", () => {
    isAnimating = false; // Réactiver l'interaction après l'animation

    if (currentIndex === 0) {
        container.style.transition = 'none'; // Désactiver temporairement l'animation
        currentIndex = images.length; // Revenir à la vraie dernière image
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    } else if (currentIndex === images.length + 1) {
        container.style.transition = 'none';
        currentIndex = 1; // Revenir à la vraie première image
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

// Fonction pour afficher l'image suivante
function nextImage() {
    if (isAnimating) return; // Empêcher les actions si l'animation est en cours
    currentIndex += 1;
    updateSlide(currentIndex);
}

// Fonction pour afficher l'image précédente
function prevImage() {
    if (isAnimating) return; // Empêcher les actions si l'animation est en cours
    currentIndex -= 1;
    updateSlide(currentIndex);
}

// Ajouter les événements sur les flèches
document.querySelector(".right-arrow").addEventListener("click", () => {
    clearInterval(autoSlide); // Réinitialiser l'auto-défilement
    nextImage();
    startAutoSlide(); // Redémarrer l'auto-défilement
});

document.querySelector(".left-arrow").addEventListener("click", () => {
    clearInterval(autoSlide); // Réinitialiser l'auto-défilement
    prevImage();
    startAutoSlide(); // Redémarrer l'auto-défilement
});

// Auto-défilement toutes les 4 secondes
let autoSlide;

function startAutoSlide() {
    autoSlide = setInterval(() => {
        nextImage();
    }, 4000); // 4 secondes
}


// Détection des gestes tactiles
container.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX; // Position initiale du toucher
});

container.addEventListener("touchmove", (event) => {
    endX = event.touches[0].clientX; // Position pendant le mouvement
});

container.addEventListener("touchend", () => {
    const diffX = startX - endX; // Différence entre la position initiale et finale

    if (Math.abs(diffX) > 50) { // Seulement si le geste est significatif
        if (diffX > 0) {
            // Glissement vers la gauche (suivant)
            nextImage();
        } else {
            // Glissement vers la droite (précédent)
            prevImage();
        }
    }
});

// Lancer l'auto-défilement
startAutoSlide();


//Commentaire en plus dzqdqzdqzdqzd