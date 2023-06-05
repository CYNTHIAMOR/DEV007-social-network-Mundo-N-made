// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  // eslint-disable-next-line no-console
  console.log ('Hola mundo!');
};
export const  anchoPage =(register, login, password)=>{

  if (window.innerWidth > 850){
      caja_trasera_register.style.display = "block";
      caja_trasera_login.style.display = "block";
  }else{
      caja_trasera_register.style.display = "block";
      caja_trasera_register.style.opacity = "1";
      caja_trasera_login.style.display = "none";
      formulario_login.style.display = "block";
      contenedor_login_register.style.left = "0px";
      formulario_register.style.display = "none";   
  }
}

anchoPage();


  export function iniciarSesion(){
      if (window.innerWidth > 850){
          formulario_login.style.display = "block";
          contenedor_login_register.style.left = "10px";
          formulario_register.style.display = "none";
          caja_trasera_register.style.opacity = "1";
          caja_trasera_login.style.opacity = "0";
      }else{
          formulario_login.style.display = "block";
          contenedor_login_register.style.left = "0px";
          formulario_register.style.display = "none";
          caja_trasera_register.style.display = "block";
          caja_trasera_login.style.display = "none";
      }
  }

  function register(){
      if (window.innerWidth > 850){
          formulario_register.style.display = "block";
          contenedor_login_register.style.left = "410px";
          formulario_login.style.display = "none";
          caja_trasera_register.style.opacity = "0";
          caja_trasera_login.style.opacity = "1";
      }else{
          formulario_register.style.display = "block";
          contenedor_login_register.style.left = "0px";
          formulario_login.style.display = "none";
          caja_trasera_register.style.display = "none";
          caja_trasera_login.style.display = "block";
          caja_trasera_login.style.opacity = "1";
      }
}
