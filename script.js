window.addEventListener('DOMContentLoaded', (event) => {
    // Delay time for each animation (in milliseconds)
    const delayTime = 500;

    // Function to gradually increase opacity of an element
    const fadeIn = (element, delay) => {
        setTimeout(() => {
            element.style.opacity = '1';
        }, delay);
    };

    // Fetch all elements to be animated
    const imageTop = document.getElementById('imageTop');
    const imageBottom = document.getElementById('imageBottom');
    const logo = document.getElementById('logo');
    const label = document.getElementById('label');
    const footer = document.getElementById('footer');
    const tortoise = document.getElementById('tortoise');

    // Animate elements sequentially
    fadeIn(imageTop, delayTime);
    fadeIn(imageBottom, delayTime * 2);
    fadeIn(logo, delayTime * 3);
    fadeIn(label, delayTime * 4);
    fadeIn(footer, delayTime * 5);
    fadeIn(tortoise, delayTime * 6);
});
