import home from './home';
import menu from './menu';



let content = document.getElementById('content');
let header = document.createElement('div');
header.classList.add('header');

content.appendChild(header);

let homeBtn = document.createElement('button');
homeBtn.classList.add('homeBtn');
homeBtn.textContent = 'Home';
homeBtn.addEventListener('click', () =>{
  container.remove();
  home();
})

let menuBtn = document.createElement('button');
menuBtn.classList.add('menuBtn');
menuBtn.textContent='Menu';
menuBtn.addEventListener('click',()=>{
  container.remove();
  menu();
})

let contactBtn = document.createElement('button');
contactBtn.classList.add('contactBtn');
contactBtn.textContent = 'Contact';

header.appendChild(homeBtn);
header.appendChild(menuBtn);
header.appendChild(contactBtn);





home();


