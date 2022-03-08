// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

const root = document.getElementById('root');
const registerButton = document.getElementById('registerButton');

const showRegForm = () => {
  const registrationBox = document.createElement('section');
  const registrationForm = document.createElement('form');
  const registrationName = document.createElement('input');
  const registrationMail = document.createElement('input');
  const registrationPW = document.createElement('input');
  const registrationPW2 = document.createElement('input');
  const registrationSubmit = document.createElement('button');
  registrationBox.innerText = 'Crea un usuario y contraseña';
  registrationName.setAttribute('placeholder', 'Nombre');
  registrationMail.setAttribute('placeholder', 'Correo Electrónico');
  registrationPW.setAttribute('placeholder', 'Contraseña');
  registrationPW2.setAttribute('placeholder', 'Confirma contraseña');
  registrationSubmit.setAttribute('value', 'Registrar');
  registrationForm.append(registrationName, registrationMail, registrationPW, registrationPW2, registrationSubmit);
  registrationBox.appendChild(registrationForm);
  return registrationBox;
};
registerButton.addEventListener('click', () => {
  root.innerHTML = '';
  root.appendChild(showRegForm());
});
// myFunction();
