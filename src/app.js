/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import home from './home.js';
import registration from './registration.js';


console.log(registration);
//  Routing
const routes = {
  '/': home.homeHTML,
  '/registration': registration.registrationHTML
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

if(window.location.pathname === "/registration"){
  rootDiv.innerHTML = registration.registrationHTML;
  registration.activateAuth();
  registration.registrationFunctionality();
}

if(window.location.pathname === "/"){
  rootDiv.innerHTML = home.homeHTML;
  onNavigate(window.location.pathname);
  home.sendToRegistration();
  home.showPassword();
}

//  Firebase implementation
const firebaseApp = () => {
  const firebaseConfig = {
  apiKey: 'AIzaSyC26n4Fh-NfxC_ZNKZrFDH4NzrQrYwgirY',
  authDomain: 'petspace-3f65f.firebaseapp.com',
  projectId: 'petspace-3f65f',
  storageBucket: 'petspace-3f65f.appspot.com',
  messagingSenderId: '719999017536',
  appId: '1:719999017536:web:4e72654f1a5dba66b1b5a5',
};
firebase.initializeApp(firebaseConfig);
}