import home from './home';
import menu from './menu';
import clear from './clear';



let content = document.getElementById('content');
let header = document.createElement('div');

header.classList.add('header');

content.appendChild(header);

let homeBtn = document.createElement('button');
homeBtn.classList.add('homeBtn');
homeBtn.textContent = 'Home';
homeBtn.addEventListener('click', () =>{
  clear();
  home();
})

let menuBtn = document.createElement('button');
menuBtn.classList.add('menuBtn');
menuBtn.textContent='Menu';
menuBtn.addEventListener('click',()=>{
  clear();
  menu();
})

let contactBtn = document.createElement('button');
contactBtn.classList.add('contactBtn');
contactBtn.textContent = 'Contact';
contactBtn.addEventListener('click', ()=>{
  clear();
})

header.appendChild(homeBtn);
header.appendChild(menuBtn);
header.appendChild(contactBtn);





home();

const container = document.querySelector('.container');


