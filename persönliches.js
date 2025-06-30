// Animation der Balkenfüllung
document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    skillBars.forEach(bar => {
        const width = bar.style.width; // Zielbreite
        bar.style.width = '0'; // Startbreite
        setTimeout(() => {
            bar.style.width = width; // Breite animiert füllen
        }, 0); // Optionale Verzögerung
    });
});

// Kartenanimationen
function rotateCard(clickedDiv) {
    var cardElement = clickedDiv.closest('.card');
    cardElement.style.transform = "rotateY(180deg)";
    cardElement.style.transition = "transform 0.5s ease"; 
}

function rotateCardback(clickedDiv) {
    var cardElement = clickedDiv.closest('.card');
    cardElement.style.transform = "rotateY(360deg)";
    cardElement.style.transition = "transform 0.5s ease"; 
}
        