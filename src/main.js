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
  '/': login,
  '/register': Register,
  '/home': Home,
};

export const onNavigate = (pathname) => {
  const rootDiv = document.getElementById('root');
  window.history.pushState({}, pathname, window.location.origin + pathname);
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname](onNavigate));
};

window.addEventListener('DOMContentLoaded', () => {
  const rootDiv = document.getElementById('root');
  const component = routes[window.location.pathname];
  window.onpopstate = () => {
    rootDiv.appendChild(component());
  };
  rootDiv.appendChild(component());
});

rootDiv.appendChild(component(onNavigate));
