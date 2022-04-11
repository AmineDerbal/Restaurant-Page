let menu = () => {
  let content = document.getElementById('content');
  const container = document.createElement('div');
container.classList.add('container');

content.appendChild(container);
  container.id= "menu";
  
  let menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "The PEPINIERE Menu";
 container.appendChild(menuTitle);


 let appetizersContent = document.createElement("div");
 appetizersContent.classList.add("menu-content");
 container.appendChild(appetizersContent);

 let appetizersTitle = document.createElement("h3");
 appetizersTitle.classList.add("appetizers-title");
 appetizersTitle.textContent = "Appetizers";

 let appetizersMenu = document.createElement("p");
 appetizersMenu.classList.add("appetizers-menu");
 appetizersMenu.textContent = "Green Salad a blend of fresh green cucumbers, red onions, courgette, green beans, almonds, pistachios and a preserved lemon dressing ";

 appetizersContent.appendChild(appetizersTitle);
 appetizersContent.appendChild(appetizersMenu);

 let mainMenuContent = document.createElement("div");
 mainMenuContent.classList.add("menu-content");
 container.appendChild(mainMenuContent);

 let mainMenuTitle = document.createElement("h3");
 mainMenuTitle.classList.add("main-menu-title");
mainMenuTitle.textContent = "Main";

let mainMenu = document.createElement("p");
mainMenu.classList.add("main-menu");
mainMenu.textContent = "Steak togliata with zingy carrot and cabbage slaw BBQ tamarind salmon with lemongrass, chili and ginger";

mainMenuContent.appendChild(mainMenuTitle);
mainMenuContent.appendChild(mainMenu);

}




export default menu