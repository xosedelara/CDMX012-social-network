/* eslint-disable import/no-cycle */
//  Routing
import { home } from './components/home.js';
import { registration } from './components/registration.js';
import { mainPage } from './components/mainPage.js';

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

//  Routing
const routes = {
  '/': home,
  '/registration': registration,
  '/mainPage': mainPage,
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
  root.innerHTML = '';
  root.appendChild(routes[window.location.pathname]());
};

window.addEventListener('click', function (e) {
  this.console.log(e.target);
});
