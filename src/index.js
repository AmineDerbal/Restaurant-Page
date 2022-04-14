import home from './home';
import menu from './menu';
import clear from './clear';
import contact from './contact';



const content = document.getElementById('content');
const header = document.createElement('div');

header.classList.add('header');

content.appendChild(header);

const homeBtn = document.createElement('button');
homeBtn.classList.add('homeBtn');
homeBtn.textContent = 'Home';
homeBtn.addEventListener('click', () =>{
  clear();
  home();
})

const menuBtn = document.createElement('button');
menuBtn.classList.add('menuBtn');
menuBtn.textContent='Menu';
menuBtn.addEventListener('click',()=>{
  clear();
  menu();
})

const contactBtn = document.createElement('button');
contactBtn.classList.add('contactBtn');
contactBtn.textContent = 'Contact';
contactBtn.addEventListener('click', ()=>{
  clear();
  contact();
})

header.appendChild(homeBtn);
header.appendChild(menuBtn);
header.appendChild(contactBtn);





contact();




