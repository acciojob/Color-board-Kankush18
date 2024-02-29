//your JS code here. If required.
// JavaScript code goes here
const container = document.querySelector('.container');

// Function to create 800 boxes
function createBoxes() {
    for (let i = 0; i < 800; i++) {
        const box = document.createElement('div');
        box.classList.add('square');
        container.appendChild(box);
        box.addEventListener('mouseover', function() {
            const randomColor = getRandomColor();
            box.style.backgroundColor = randomColor;
            setTimeout(() => {
                box.style.backgroundColor = 'grey'; // Revert back to default color after 1 second
            }, 1000);
        });
    }
}

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

createBoxes();
