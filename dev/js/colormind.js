document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'http://colormind.io/api/';

    const colorBox = document.getElementById('color-box');

    function generateColors() {
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'default',
            }),
        })
        .then(response => response.json())
        .then(data => {
            const colors = data.result;
            updateColorBox(colors);
        })
        .catch(error => console.error('Error:', error));
    }

    function updateColorBox(colors) {
        const colorString = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
        colorBox.style.backgroundColor = colorString;
        colorBox.querySelector('p').textContent = colorString;
    }

    generateColors();
});
