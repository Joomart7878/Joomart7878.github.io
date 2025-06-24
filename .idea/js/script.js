// js/script.js
console.log("Welcome! JavaScript file loaded successfully.");

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    if (heading) {
        heading.addEventListener('click', () => {
            alert('You clicked the heading!');
        });
    }
});