/* eslint-disable import/no-cycle */
import './config/firebase.config.js';
// eslint-disable-next-line import/no-cycle
import { login } from './components/Login.js';
// eslint-disable-next-line import/no-cycle
import { register } from './components/Register.js';
// eslint-disable-next-line import/no-cycle
import { home } from './components/Home.js';

const routes = {
  '/': login,
  '/register': register,
  '/home': home,
};

export const onNavigate = (pathname) => {
  const rootDiv = document.getElementById('root');
  window.history.pushState({}, pathname, window.location.origin + pathname);
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

window.addEventListener('DOMContentLoaded', () => {
  const rootDiv = document.getElementById('root');
  const component = routes[window.location.pathname];
  window.onpopstate = () => {
    rootDiv.appendChild(component());
  };
  rootDiv.appendChild(component());
});

rootDiv.appendChild(component());
//chicas aqui inicio a dar funcionamiento me falta separar las funciones
const btnIniciarSesion = document.getElementById(buttonLogin)

