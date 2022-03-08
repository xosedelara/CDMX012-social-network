// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

const root = document.getElementById('root');
const registerButton = document.getElementById('registerButton');

const showRegForm = () => {
  const registrationWindow = document.createElement('div');
  const registrationBox = document.createElement('section');
  const registrationForm = document.createElement('form');
  const registrationName = document.createElement('input');
  const registrationMail = document.createElement('input');
  const registrationPW = document.createElement('input');
  const registrationPW2 = document.createElement('input');
  const registrationSubmit = document.createElement('button');
  const registrationtext = document.createElement('p');
  const registrationGmail = document.createElement('img');
  const registrationFacebook = document.createElement('img');
  registrationBox.innerText = 'Crea un usuario y contraseña';
  registrationBox.setAttribute('class', 'reg-box');
  registrationName.setAttribute('placeholder', 'Nombre');
  registrationMail.setAttribute('placeholder', 'Correo Electrónico');
  registrationPW.setAttribute('placeholder', 'Contraseña');
  registrationPW2.setAttribute('placeholder', 'Confirma contraseña');
  registrationSubmit.setAttribute('class', 'register-button');
  registrationSubmit.innerText = 'Regístrate';
  registrationtext.innerText = 'o regístrate con:';
  registrationFacebook.src = 'img/facebook.png';
  registrationFacebook.setAttribute('class', 'facebook-logo');
  registrationGmail.src = 'img/google.png';
  registrationGmail.setAttribute('class', 'gmail-logo');
  registrationForm.append(registrationName, registrationMail, registrationPW, registrationPW2);
  registrationBox.appendChild(registrationForm);
  registrationWindow.append(registrationBox, registrationSubmit, registrationtext, registrationFacebook, registrationGmail);
  return registrationWindow;
};
registerButton.addEventListener('click', () => {
  root.innerHTML = '';
  root.appendChild(showRegForm());
});
// myFunction();
