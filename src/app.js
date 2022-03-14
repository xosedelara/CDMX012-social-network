/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-undef */

import { home } from './home.js';
import { registration } from './registration.js';

//  Routing
const routes = {
  '/': home,
  '/registration': registration,
};

const root = document.getElementById('root');
root.appendChild(routes[window.location.pathname]());

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  if (root.hasChildNodes()) {
    root.innerHTML = '';
  }
  root.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  root.appendChild(routes[window.location.pathname]());
};

//  Firebase implementation
const firebaseConfig = {
  apiKey: 'AIzaSyC26n4Fh-NfxC_ZNKZrFDH4NzrQrYwgirY',
  authDomain: 'petspace-3f65f.firebaseapp.com',
  projectId: 'petspace-3f65f',
  storageBucket: 'petspace-3f65f.appspot.com',
  messagingSenderId: '719999017536',
  appId: '1:719999017536:web:4e72654f1a5dba66b1b5a5',
};
firebase.initializeApp(firebaseConfig);


const errorTranslate = {
  'auth/invalid-email': 'El email es inválido.',
  'auth/email-already-in-use': 'El email ya está registrado.',
  'auth/weak-password': 'La contraseña es inválida',
  'auth/wrong-password': 'La contraseña es incorrecta',
  'auth/user-not-found': 'El usuario no existe',
};

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const email = user.value;
  const password = loginPassword.value;
  const message = loginMessage;
  console.log(email, password);
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    message.innerHTML = 'Ha loggeado exitosamente';
    message.style.color = '#F1972A';
  }).catch((error) => {
    const errorType = error.code;
    console.log(error.code);
    console.log(error.message);
    message.innerHTML = (errorTranslate[errorType]);
    message.style.color = '#FE6C6C';
  });
});

function activateAuth() {
  regBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = regEmail.value;
    const password = regPW.value;
    const message = regMessage;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      message.innerHTML = 'Se ha creado su cuenta exitosamente';
      message.style.color = '#F1972A';
    }).catch((error) => {
      const errorType = error.code;
      message.innerHTML = (errorTranslate[errorType]);
      message.style.color = '#FE6C6C';
    });
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      // eslint-disable-next-line no-empty
    } else {
    }
  });
}

//  RegistrationButton functionality
registerButton.addEventListener('click', () => {
  activateAuth();
  return false;
});



