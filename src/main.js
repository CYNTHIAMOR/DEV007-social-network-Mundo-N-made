/* eslint-disable import/no-cycle */
import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';
import { Post } from './components/Post.js';

const rootDiv = document.getElementById('root');
const routes = {
  '/': Home,
  '/login': Login,
  '/post': Post,
  '/register': Register,

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
  rootDiv.appendChild(component(onNavigate));
};

rootDiv.appendChild(routes[window.location.pathname](onNavigate));
