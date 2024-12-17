document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    
    // Automatically flip the card to the back side after 1.5 seconds
    setTimeout(() => {
        card.classList.add('is-flipped');
    }, 1500);
    
    // Add click event to flip the card back and forth
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});
