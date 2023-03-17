import './style.css';

const content = document.getElementById('content');
const testElement = document.createElement('h1');
testElement.innerHTML = 'test';
content.appendChild(testElement);
