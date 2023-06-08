// eslint-disable-next-line import/no-cycle
// import { onNavigate } from '../main.js';

export const Home = (onNavigate) => {
  // creamos los div con js
  
  /*const homeDiv = document.createElement('div');
  
  const buttomRegister = document.getElementById('buttonRegister');
  const impre = `
    <div class="pitures" id="pitures"></div>
    <div class="logo" id="logo"></div>
    <div class="singIn" id="singIn">
      <button id="buttonLogin">Iniciar Sesión</button>
    </div>
    <div class="register" id="singIn" >
      <p>No tienes cuenta?</p>
      <a href="./components/Register.js">Registrate aquí</a>
    </div>
    <div class="conditions" id="conditions"></div>`;

  homeDiv.innerHTML = impre;

  buttomRegister.addEventListener('click', () => onNavigate('/register'));
  return homeDiv;*/

  const homeDiv = document.createElement('div');
  const pictureDiv = document.createElement('div');
  const logoDiv = document.createElement('div');
  const singInDiv = document.createElement('div');
  const registerDiv = document.createElement('div');
  const conditionDiv = document.createElement('div');
  const buttonRegister = document.createElement('buttom');
  const buttonLogin = document.createElement('button');
  const registerLabel = document.createElement('label');
  // creamos el texto dentro de div
  buttonLogin.textContent = 'Iniciar Sesión';
  registerLabel.textContent = 'No tienes cuenta?';
  buttonRegister.textContent = 'Registrate Aquí';
  
 /* const pictures = document.createElement('img');
  pictures.src = './img/pictures.png';*/



  // hacemos el llamado
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

// agregar class
// registerDiv.style.backgroundColor = '#000000';
pictureDiv.classList.add('picture')
 registerDiv.classList.add('register');
 logoDiv.classList.add('logo');
 singInDiv.classList.add('singIn');
 conditionDiv.classList.add('condition');




  homeDiv.appendChild(pictureDiv);
  homeDiv.appendChild(logoDiv);
  homeDiv.appendChild(singInDiv);
  homeDiv.appendChild(registerDiv);
  homeDiv.appendChild(conditionDiv);
  registerDiv.appendChild(registerLabel);
  registerDiv.appendChild(buttonRegister);
  singInDiv.appendChild(buttonLogin);

  return homeDiv;
};
