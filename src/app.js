/* eslint-disable import/no-cycle */
//  Routing
import { home } from './components/home.js';
import { registration } from './components/registration.js';
import { mainPage } from './components/mainPage.js'; 

//  Routing
const routes = {
  '/': home,
  '/registration': registration,
  '/mainPage': mainPage,
};

const root = document.getElementById('root');
window.onload = () => {
  root.appendChild(routes[window.location.pathname]());
};

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
