/* eslint-disable import/no-cycle */
import { Home } from './components/Home.js';
// eslint-disable-next-line import/named
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';
// import { index, myFunction } from './index.js';

// myFunction();

/* const d = document;
d.addEventListener("DOMContentLoaded", index); */

const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname](onNavigate));
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(component());
};

rootDiv.appendChild(component(onNavigate));
