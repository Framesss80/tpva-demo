console.log("¡Bienvenido a tu nueva web en Digital Studio - TPVA!");

// Añadir interactividad básica para comprobar que funciona
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    
    card.addEventListener('click', () => {
        card.style.transform = 'scale(1.02)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
    });
});
