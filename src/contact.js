const contact = () => {

  const content = document.getElementById('content');
  const container = document.createElement('div');
container.classList.add('container');
container.id = "contact";

content.appendChild(container);

const contactTitles = document.createElement('h1');
contactTitles.classList.add('contact-titles');
contactTitles.textContent="Contact Page";
container.appendChild(contactTitles);

const email = document.createElement('h2');
email.textContent ="Email";
container.appendChild(email);

const emailAdress = document.createElement('adress');
emailAdress.textContent ="oran@pepiniere.co.dz";
container.appendChild(emailAdress);

const telephone = document.createElement('h3');
telephone.textContent = "Telephone";
container.appendChild(telephone);

const telephoneNumber=document.createElement('adress');
telephoneNumber.textContent="0453219852";
container.appendChild(telephoneNumber);



}


export default contact