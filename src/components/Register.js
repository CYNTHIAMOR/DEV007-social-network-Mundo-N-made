// import { crearUsuarioConCorreoYContraseña } from '../lib/index.js';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const buttonBack = document.createElement('button');
  // const registerForm = document.querySelector('#registerForm');

  buttonBack.textContent = 'atras';

  HomeDiv.innerHTML = `<div class='register-presentation' id='registerPresentation'> 
   <h1>Hello world</h1>
    </div>`;

  HomeDiv.innerHTML += `<div class='register-form' id='registerForm'> 
  <button class="back"> x </button> 
  
    <h1>Registro</h1>   
    <form>
        <div id="input-wrapper">
          <input id='input-name' placeholder='Nombre' type='text' class="input">
        </div>
        <div id="input-wrapper">
          <input id='input-lastname' placeholder='Apellido' class="input" type='text'>
        </div>
        <div id="input-wrapper">
          <input id='input-email' placeholder='Correo electronico' class="input" type='email'>
        </div>
        <div id="input-wrapper">
          <input id='input-password' placeholder='Contraseña' class="input" type='password'>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
</svg>
        </div>
        
    </form>
    <div class="register"><hr> <p class="x"> o </p><hr></div>
    <div><button class="google-icon"> <img class="google" src="./img/logo-google.png"></button></div> 
    <div><button class="principal-button" id="buttonSubmitRegister">Registrarse</button></div>
        
        
    
      </div>`;
  const buttonSubmitRegister = HomeDiv.querySelector('#buttonSubmitRegister');
  // const inputEmail = HomeDiv.querySelector('#input-email');
  // const inputPassword = HomeDiv.querySelector('#input-password');

  buttonSubmitRegister.addEventListener('click', () => {
    onNavigate('/login');
   // e.preventDefault();
    /* crearUsuarioConCorreoYContraseña(inputEmail.value, inputPassword.value).then(() => {
      onNavigate('/login');
    }); */
  });

  buttonBack.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonBack);
  HomeDiv.classList.add('register');

  return HomeDiv;
};
