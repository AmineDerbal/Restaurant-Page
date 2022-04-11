
let home = () =>{
  let content = document.getElementById('content');

  const container = document.createElement('div');
container.classList.add('container');

content.appendChild(container);
  container.id = "home-content";


  let welcomeMessage = document.createElement('h1');
  welcomeMessage.classList.add('welcomeMessage');

  welcomeMessage.textContent = " THE PEPINIERE RESTAURANT";

 container.appendChild(welcomeMessage);

 let message = document.createElement('p');
 message.classList.add('message');
 message.textContent = "Nostalgia and Delish";

 container.appendChild(message);
 


  
}



export default home