document.addEventListener('DOMContentLoaded', function() {
    const portraits = document.querySelectorAll('.charPortraitWrapper');

    // Load the initial state from local storage
    portraits.forEach((portrait, index) => {
        const overlay = portrait.querySelector('.red-overlay');
        const activeState = localStorage.getItem(`overlayState-${index}`);

        if (activeState === 'true') {
            overlay.classList.add('active');
        }

        portrait.addEventListener('click', function(e) {
            e.preventDefault();
            toggleOverlay(this, index);
        });
    });
});

function toggleOverlay(clickedWrapper, index) {
    const clickedOverlay = clickedWrapper.querySelector('.red-overlay');
    clickedOverlay.classList.toggle('active'); // Toggle the active state

    // Save the current state in local storage
    const isActive = clickedOverlay.classList.contains('active');
    localStorage.setItem(`overlayState-${index}`, isActive);
}