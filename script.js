// Scroll Animation for Images
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function revealElements() {
        fadeElements.forEach(el => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealElements);
    revealElements(); // Initial check
});

// Trip Cost Calculator Function
function calculateTripCost() {
    const destinationCost = parseFloat(document.getElementById('destination').value);
    const nights = parseInt(document.getElementById('nights').value) || 1;
    const people = parseInt(document.getElementById('people').value) || 1;
    const totalCost = destinationCost * nights * people;

    document.getElementById('tripCostDisplay').textContent = `Total Trip Cost: $${totalCost.toFixed(2)}`;
}
