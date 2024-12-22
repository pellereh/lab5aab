// Simulate loading animation
document.querySelectorAll('.photo-cell').forEach(cell => {
    const loader = cell.querySelector('.loading-animation');
    const image = cell.querySelector('img');
    
    // Activate loader
    loader.classList.add('active');
    
    // Simulate loading delay
    setTimeout(() => {
        loader.classList.remove('active'); // Hide loader
        image.style.display = 'block';    // Show image
    }, 1500); // Adjust time as needed
});
