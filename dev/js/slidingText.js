// JavaScript code generated with assistance from ChatGPT
document.addEventListener('DOMContentLoaded', function () {
    var subtitleElement = document.querySelector('.hero__content--subtitle p');

    // The text you want to display
    var textToDisplay = "Portfolio of an UI/UX Designer & Frontend Developer";

    // Wrap each character in a span
    var wrappedText = Array.from(textToDisplay).map(function (char) {
        return '<span>' + char + '</span>';
    }).join('');

    subtitleElement.innerHTML = wrappedText;

    // Create a wrapper to hold the sliding text
    var wrapper = document.createElement('div');
    wrapper.className = 'text-wrapper';
    
    // Duplicate the text content to ensure continuous sliding
    wrapper.innerHTML = wrappedText + wrappedText;

    // Append the wrapper to the original element
    subtitleElement.innerHTML = '';
    subtitleElement.appendChild(wrapper);

    // Calculate the duration based on the width and desired speed
    var animationDuration = subtitleElement.offsetWidth / 100; // Adjust the divisor to control the speed

    // Apply the transform animation
    wrapper.style.animation = 'slide ' + animationDuration + 's linear infinite';
});
