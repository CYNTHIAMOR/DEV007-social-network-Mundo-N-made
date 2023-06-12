import { crearUsuarioConCorreoYContraseña } from '../lib';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const buttonBack = document.createElement('button');

  // const registerForm = document.querySelector("#registerForm");

  buttonBack.textContent = 'atras';

  HomeDiv.innerHTML = `<div class='register-presentation' id='registerPresentation'> 
   <h1>Hello world</h1>
    </div>`;

  HomeDiv.innerHTML += `<div class='register-form' id='registerForm'> 
  <button class="back" id="backP"> x </button> 
  
    <h1>Registro</h1>   
    <form>
        
          <input id='input-name' placeholder='Nombre' type='text' class="input">
       
        
          <input id='input-lastname' placeholder='Apellido' class="input" type='text'>
        
       
          <input id='input-email' placeholder='Correo electronico' class="input" type='email'>
       
        
          <input id='input-password' placeholder='Contraseña' class="input" type='password'>
       
        
    </form>
    <div class="register"><hr> <p class="x"> o </p><hr></div>
    <div><button class="google-icon"> <img class="google" src="./img/logo-google.png"></button></div> 
    <div><button class="principal-button" id="buttonSubmitRegister">Registrarse</button></div>
        
        
    
      </div>`;
  const buttonSubmitRegister = HomeDiv.querySelector('#buttonSubmitRegister');
  const inputEmail = HomeDiv.querySelector('#input-email');
  const inputPassword = HomeDiv.querySelector('#input-password');

  buttonSubmitRegister.addEventListener('click', (e) => {
    e.preventDefault();

    crearUsuarioConCorreoYContraseña(inputEmail.value, inputPassword.value);
    /* then(() => {
      onNavigate('/post');
    });*/
  });

  buttonBack.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonBack);

  HomeDiv.classList.add('register');

  return HomeDiv;
};
