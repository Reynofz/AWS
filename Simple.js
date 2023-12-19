// Create elements
const container = document.createElement('div');
container.className = 'container';

const heading = document.createElement('h1');
heading.textContent = 'Hello, World!';
heading.id = 'myText';

const button = document.createElement('button');
button.textContent = 'Click me';
button.addEventListener('click', changeText);

// Append elements to the container
container.appendChild(heading);
container.appendChild(button);

// Append container to the body
document.body.appendChild(container);

// Function to change text
function changeText() {
    const newText = 'Text changed!';
    heading.textContent = newText;
}
