
//import firebase from 'firebase/app';
//import 'firebase/firestore';
export const Post = (onNavigate) => {

  const HomeDiv = document.createElement('div');
 // const buttonBack = document.createElement('button');

  /* const postArea = HomeDiv.querySelector('#post').value;
  const printerPost = HomeDiv.querySelector('#printerPost');
  const printerPostButton = HomeDiv.querySelector('#printerPostButton');

  printerPostButton.addEventListener('click', () => {
    printerPost.innerHTML += postArea;
  }); */

 // buttonBack.textContent = 'Cerrar Sesión';

  HomeDiv.textContent = 'Bienvenida al Post';

  HomeDiv.innerHTML = `
<div class="container-background">
<div class="container-presentation">
  <div class="container-logo"></div>

</div>
 
  <main class="main-post"> 

    <section>
    
      <div class="div-post" id="divPost">
      <div class="container-name-picture"> 
      </svg></a></button>
    <button class="nav-button"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
    </svg></a></button>
        <h3>Hutch Valle</h3>
        </div>  
        <div><textarea placeholder="Qué quieres compartir?" class="text-area-post" name="post" id="textAreaPost" cols="30" rows="10"></textarea></div>
          <div class="container-photo-post">
            <div><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-filled" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M8.813 11.612c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.986 4.986l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l.292 -.293l.106 -.095c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.674 4.675a4 4 0 0 1 -3.775 3.599l-.206 .005h-12a4 4 0 0 1 -3.98 -3.603l6.687 -6.69l.106 -.095zm9.187 -9.612a4 4 0 0 1 3.995 3.8l.005 .2v9.585l-3.293 -3.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-.307 .306l-2.293 -2.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-5.307 5.306v-9.585a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-2.99 5l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" stroke-width="0" fill="currentColor" />
          </svg></div>
            <div> <button class="compartir" id="printerPostButton">Compartir</button></div>
          </div>
          </div>
        <div class="printer-post" id="printerPost"></div>
    </section>
  </main>


  <nav class="menu">
    <div class="container-nav">
    <button class="nav-button"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
    </svg></a></button>
    <button class="nav-button"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
    </svg></a></button>
    </div>
  </nav>
 </div>
    `;

  //buttonBack.addEventListener('click', () => onNavigate('/'));

  //HomeDiv.appendChild(buttonBack);

  //POST

HomeDiv.querySelector('#printerPostButton').addEventListener('click', () => {
    const textAreaContainer = HomeDiv.querySelector('#textAreaPost').value
    console.log(textAreaContainer)
      

  });

  }
{


  return HomeDiv;
}


