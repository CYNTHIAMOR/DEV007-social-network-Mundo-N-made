export const Post = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const buttonBack = document.createElement('button');

  /* const postArea = HomeDiv.querySelector('#post').value;
  const printerPost = HomeDiv.querySelector('#printerPost');
  const printerPostButton = HomeDiv.querySelector('#printerPostButton');

  printerPostButton.addEventListener('click', () => {
    printerPost.innerHTML += postArea;
  }); */

  buttonBack.textContent = 'Cerrar Sesión';

  HomeDiv.textContent = 'Bienvenida al Post';

  HomeDiv.innerHTML = `
  <main> 
  <nav class="menu">
      <ul>
        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#C5312A" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M10 12h4v4h-4z" />
        </svg></a></li>
        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
        </svg></a></li>
        <h1>Mundo Nómade</h1>
        <li><a href="#">Cerrar Sesión</a></li>
      </ul>
    </nav>
    <section>
      <div class="div-post" id="divPost">
        <h2>Hola Mundo</h2>
        <div><textarea name="post" id="post" cols="30" rows="10"></textarea></div>
        <div> <button class="principal-button" id="printerPostButton">Compartir</button></div>
      </div>
        <div class="printer-post" id="printerPost"></div>
    </section>
    </main>`;

  buttonBack.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonBack);

  return HomeDiv;
};
