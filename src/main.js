/* eslint-disable no-trailing-spaces */
/* eslint-disable no-empty */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
// /* eslint-disable no-multiple-empty-lines */

// import { auth } from './lib/index.js';


// // signup
// const singupForm = document.getElementById('loginForm');
// singupForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // obtener la info del ususario
//   const email = singupForm.user.value;
//   const password = singupForm.password.value;
//   console.log(email, password);
//   // eslint-disable-next-line no-undef
//   auth.createUserWithEmailAndPassword(email, password).then((cred) => {
//     console.log(cred);
//   });
// });





// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
// import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

// const firebaseConfig = {
//     apiKey: 'AIzaSyC26n4Fh-NfxC_ZNKZrFDH4NzrQrYwgirY',
//     authDomain: 'petspace-3f65f.firebaseapp.com',
//     projectId: 'petspace-3f65f',
//     storageBucket: 'petspace-3f65f.appspot.com',
//     messagingSenderId: '719999017536',
//     appId: '1:719999017536:web:4e72654f1a5dba66b1b5a5',
// };

// firebase.initializeApp(firebaseConfig);

// const singupForm = document.getElementById('loginForm');
// singupForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = singupForm.user.value;
//   const password = singupForm.password.value;
//   console.log(email, password);
//   // eslint-disable-next-line no-undef
//   firebase.auth().createUserWithEmailAndPassword(email, password).catch(e => {
//     console.log(e);
//   });
// });
// firebase.auth().onAuthStateChanged((user) => {
//     if (user){
//         console.log(user);
//     } else {
        
//     }
// });
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
