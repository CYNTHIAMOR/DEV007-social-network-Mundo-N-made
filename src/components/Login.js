export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const buttonBack = document.createElement('button');
  // const registerForm = document.querySelector('#registerForm');

  buttonBack.textContent = 'atras';

  HomeDiv.innerHTML = `<div class='register-presentation' id='registerPresentation'> 
   <h1>Hello world</h1>
    </div>`;

  HomeDiv.innerHTML += `<div class='register-form' id='registerForm'> 
  <button class="back"> x </button> 
  
    <h1>Inicio de Sesión</h1>   
    <form>
        <div id="input-wrapper">
          <input id='input-email' placeholder='Correo electronico' class="input" type='email'>
        </div>
        <div id="input-wrapper">
          <input id='input-password' placeholder='Contraseña' class="input" type='password'>
        </div> 
    </form>
    <div class="register"><hr> <p class="x"> o </p><hr></div>
    <div><button class="google-icon"> <img class="google" src="./img/logo-google.png"></button></div> 
    <div><button class="principal-button" id="buttonSubmitSingIn">Iniciar Sesión</button></div>
        
        
    
      </div>`;
  const buttonSubmitSingIn = HomeDiv.querySelector('#buttonSubmitSingIn');
  // const inputEmail = HomeDiv.querySelector('#input-email');
  // const inputPassword = HomeDiv.querySelector('#input-password');

  buttonSubmitSingIn.addEventListener('click', () => {
    onNavigate('/post');
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
