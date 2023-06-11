

export const Home = (onNavigate) => {
  // creamos los div con js

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
  registerLabel.textContent = 'No tienes cuenta???';
  buttonRegister.textContent = 'Registrate Aquí';

  /* const pictures = document.createElement('img');
  pictures.src = './img/pictures.png'; */

  // hacemos el llamado
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  // agregar class
  // registerDiv.style.backgroundColor = '#000000';
  

  homeDiv.appendChild(pictureDiv);
  homeDiv.appendChild(logoDiv);
  homeDiv.appendChild(singInDiv);
  homeDiv.appendChild(registerDiv);
  homeDiv.appendChild(conditionDiv);
  registerDiv.appendChild(registerLabel);
  registerDiv.appendChild(buttonRegister);
  singInDiv.appendChild(buttonLogin);
  



  pictureDiv.classList.add('picture');
  registerDiv.classList.add('register');
  logoDiv.classList.add('logo');
  singInDiv.classList.add('singIn');
  conditionDiv.classList.add('condition');
  buttonLogin.classList.add('principal-button');

  return homeDiv;
};