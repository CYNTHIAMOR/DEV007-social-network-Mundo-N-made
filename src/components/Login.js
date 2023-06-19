import { initSessionsWithGoogle, signIn, initSessionsWithFacebook } from '../lib';

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  HomeDiv.innerHTML += `
  <div class="sing-in-father">
    <button class="backP" id="backP">  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M5 12l14 0" />
    <path d="M5 12l6 6" />
    <path d="M5 12l6 -6" />
    </svg> </button> 
    
  
    <div class="sing-ing-title">
      <h1 class="title-two"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg> Inicio de Sesión
        <br>
        <span>Bienvenido a Mundo Nómade</span>
      </h1> 
      <div class='sing-in-form' id='singInform'> 
      <div class="logo-blanco"></div>  
        <form>
        
          <input id='input-email' placeholder='Correo electronico' class="input correo" type='email'>
          <input id='input-password' placeholder='Contraseña' class="input password" type='password'>
        
        </form>
        <span class="alertLogInSignUp" id="alertLogInSignUp"></span>
        <div>
        <hr> 
        <div class="singin-google-facebook">
      <button class="google-facebook-icon" id="google-icon"> <img class="google" src="./img/logo--google.png"></button>
      <button class="google-facebook-icon" id="facebook-icon"> <img class="facebook" src="./img/logo-facebook.png"></button>
      </div> 
        <div><button class="principal-button" id="buttonSubmitSingIn">Iniciar Sesión</button></div>
        </div>
    </div>
  </div>
  
 `;

  const buttonSubmitSingIn = HomeDiv.querySelector('#buttonSubmitSingIn');

  if (buttonSubmitSingIn) {
    buttonSubmitSingIn.addEventListener('click', () => {
      const inputEmail = HomeDiv.querySelector('#input-email').value;
      const inputPassword = HomeDiv.querySelector('#input-password').value;
      const alertLogInSignUp = HomeDiv.querySelector('#alertLogInSignUp');
      alertLogInSignUp.classList.remove('alertSignUpOk');
      if (inputEmail === '') {
        alertLogInSignUp.innerText = '⚠️ Debe ingresar su email';
      } else if (inputPassword === '') {
        alertLogInSignUp.innerText = '⚠️ Debe ingresar su contraseña';
      } else {
        signIn(inputEmail, inputPassword, onNavigate);
      }
    });
  }

  const buttonGoogle = HomeDiv.querySelector('#google-icon');
  buttonGoogle.addEventListener('click', () => {
    initSessionsWithGoogle().then(() => {
      onNavigate('/post');
    });
  });
  const buttonFacebook = HomeDiv.querySelector('#facebook-icon');
  buttonFacebook.addEventListener('click', () => {
    // console.log(initSessionsWithFacebook);
    initSessionsWithFacebook().then(() => {
      onNavigate('/post');
    });
  });

  const buttonBack = HomeDiv.querySelector('#backP');
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  HomeDiv.classList.add('register');

  return HomeDiv;
};
