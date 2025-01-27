document.querySelector('.fi-ts-angle-down').addEventListener('click', function () {
    const nextSection = document.querySelector('#about'); // Remplacez par l'ID ou la classe de votre section suivante
    nextSection.scrollIntoView({ behavior: 'smooth' });
});