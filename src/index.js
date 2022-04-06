import home from './home'

let content = document.getElementById('content');
let header = document.createElement('div');
header.classList.add('header');

content.appendChild(header);

let homeBtn = document.createElement('button');
homeBtn.classList.add('homeBtn');
homeBtn.textContent = 'Home';

let menuBtn = document.createElement('button');
menuBtn.classList.add('menuBtn');
menuBtn.textContent='Menu';

let contactBtn = document.createElement('button');
contactBtn.classList.add('contactBtn');
contactBtn.textContent = 'Contact';

header.appendChild(homeBtn);
header.appendChild(menuBtn);
header.appendChild(contactBtn);

let container = document.createElement('div');
container.classList.add('container');

content.appendChild(container);


