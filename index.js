// Write your code here!

const main = document.querySelector('#main');
main.remove();

let newHeader = document.createElement('H1')

document.body.appendChild(newHeader)

newHeader.id = 'victory'

newHeader.innerHTML = 'George is the champion'