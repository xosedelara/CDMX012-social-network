/* eslint-disable import/no-cycle */
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
