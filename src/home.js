
let home = () =>{
  let container = document.querySelector(".container");

  let welcomeMessage = document.createElement('h1');
  welcomeMessage.classList.add('welcomeMessage');

  welcomeMessage.textContent = "Welcome to our new Restaurant!";

  container.appendChild(welcomeMessage);


  
}



export default home