import { crearUsuarioConCorreoYContraseña } from '../lib';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  // const registerForm = document.querySelector("#registerForm");

  HomeDiv.innerHTML += `<div class='register-form-total' id='registerFormTotal'> 
  <button class="back" id="backP"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12l14 0" />
  <path d="M5 12l6 6" />
  <path d="M5 12l6 -6" />
</svg></button> 
    <div class="register-form">
      <h1 class="title-one">Registro</h1>   
      <form>
        
          <input id='input-name' placeholder='Nombre' type='text' class="input">
       
        
          <input id='input-lastname' placeholder='Apellido' class="input" type='text'>
        
       
          <input id='input-email' placeholder='Correo electronico' class="input" type='email'>
       
        
          <input id='input-password' placeholder='Contraseña' class="input" type='password'>
       
        
      </form>
    
      <hr>
      <div><button class="google-icon"> <img class="google" src="./img/logo-google.png"></button></div> 
      <div><button class="principal-button-dark" id="buttonSubmitRegister">Registrarse</button></div>
    
      </div>  

      <div>
        <p class="condition-p">Al presionar crear cuenta o iniciar sesión, aceptas nuestra politica de privacidad y cookies.</p>
      </div>
    
      </div>`;
  const buttonSubmitRegister = HomeDiv.querySelector('#buttonSubmitRegister');
  const inputEmail = HomeDiv.querySelector('#input-email');
  const inputPassword = HomeDiv.querySelector('#input-password');

  const buttonChico = HomeDiv.querySelector('#backP');
  buttonChico.addEventListener('click', () => {
    onNavigate('/');
  });

  buttonSubmitRegister.addEventListener('click', (e) => {
    e.preventDefault();
    crearUsuarioConCorreoYContraseña(inputEmail.value, inputPassword.value, onNavigate);
  });

  HomeDiv.classList.add('register');

  return HomeDiv;
};
