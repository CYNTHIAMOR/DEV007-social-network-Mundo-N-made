export const Register = (onNavigate) => {
 const HomeDiv = document.createElement('div');
 const buttonSubmitRegister = document.createElement('button');
 const buttonBack = document.createElement('button')
 buttonSubmitRegister.textContent = 'Enviar';
 buttonBack.textContent = 'Back';


  HomeDiv.innerHTML += 
  `<input id='input-email' placeholder='Correo electronico' type='email'>
  <input id='input-password' placeholder='Contraseña' type='password'>`;

 const inputEmail = HomeDiv.querySelector('#input-email');
 const inputPassword = HomeDiv.querySelector('#input-password');
  
 buttonSubmitRegister.addEventListener('click', (e) => {
  e.preventDefault();
  crearUsuarioConCorreoYContraseña(
    inputEmail.ariaValue,
    inputPassword.ariaValue
  )/*.then(() =>{
  onNavigate('/login')
 });*/
});
buttonBack.addEventListener('click', () => onNavigate('/'));

HomeDiv.appendChild(buttonBack);
HomeDiv.appendChild(buttonSubmitRegister);
return HomeDiv

};

