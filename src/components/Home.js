export const Home = (onNavigate) => {
  // creamos los div con js

  const HomeDiv = document.createElement('div');
  const HomeDivOne = document.createElement('div');
  const HomeDivTwo = document.createElement('div');
  const pictureDiv = document.createElement('div');
  const logoDiv = document.createElement('div');
  const singInDiv = document.createElement('div');
  const registerDiv = document.createElement('div');
  const conditionDiv = document.createElement('div');
  const conditionP = document.createElement('p');
  const buttonRegister = document.createElement('buttom');
  const buttonLogin = document.createElement('button');
  const registerLabel = document.createElement('label');
  // creamos el texto dentro de div
  buttonLogin.textContent = 'Iniciar Sesión';
  registerLabel.textContent = 'No tienes cuenta?';
  buttonRegister.textContent = 'Registrate Aquí!!!';
  conditionP.textContent = 'Al presionar crear cuenta o iniciar sesión, aceptas nuestra politica de privacidad y cookies.';

  /* const pictures = document.createElement('img');
  pictures.src = './img/pictures.png'; */

  // hacemos el llamado
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  // agregar class
  // registerDiv.style.backgroundColor = '#000000';

  HomeDivOne.appendChild(pictureDiv);
  HomeDivOne.appendChild(logoDiv);
  HomeDivTwo.appendChild(singInDiv);
  HomeDivTwo.appendChild(registerDiv);
  HomeDivTwo.appendChild(conditionDiv);
  registerDiv.appendChild(registerLabel);
  registerDiv.appendChild(buttonRegister);
  singInDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(HomeDivOne);
  HomeDiv.appendChild(HomeDivTwo);
  conditionDiv.appendChild(conditionP);

  HomeDivOne.classList.add('HomeDivOne');
  HomeDivTwo.classList.add('HomeDivTwo');
  pictureDiv.classList.add('picture');
  logoDiv.classList.add('logo');
  buttonLogin.classList.add('principal-button');
  registerDiv.classList.add('register-div');
  registerLabel.classList.add('register-label');
  buttonRegister.classList.add('button-register');
  conditionP.classList.add('condition-p');
  return HomeDiv;
};
