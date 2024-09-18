const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    menu.classList.toggle("active");
    if(menu.classList.contains("active")){
        document.querySelector("header .material-icons").innerHTML = "close"
    }

    else{
        document.querySelector("header .material-icons").innerHTML = "menu"
    }
}

document.addEventListener('mousemove', function(e) {
    createNeonTrail(e.pageX, e.pageY);
});

function createNeonTrail(x, y) {
    // Créer une particule de traînée néon
    const neonTrail = document.createElement('div');
    neonTrail.classList.add('neon-trail');
    document.body.appendChild(neonTrail);

    // Positionner la particule au point de départ du curseur
    neonTrail.style.left = `${x}px`;
    neonTrail.style.top = `${y}px`;

    // Démarrer l'animation pour créer l'effet de traînée
    neonTrail.style.opacity = '1';
    neonTrail.style.transform = 'scale(1)';

    // Animer la particule pour simuler une traînée de poussière
    neonTrail.animate([
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0, transform: 'scale(2)' }
    ], {
        duration: 1000, // Durée de l'animation
        easing: 'linear',
        fill: 'forwards' // Maintenir les valeurs finales après l'animation
    });

    // Supprimer la particule après l'animation
    setTimeout(() => {
        neonTrail.remove();
    }, 1000); // Correspond à la durée de l'animation
}
