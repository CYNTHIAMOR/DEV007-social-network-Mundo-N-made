import { onGetPosts, createPost, deletePost } from '../lib';

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

  const editStatus = false;
  const id = '';

  HomeDiv.innerHTML = `
<div class="container-background">
<div class="container-presentation">
  <div class="container-logo"></div>

</div>
 
  <main > 

    <section class="section-post">
    
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
          
    </section>
    <section class="section-post">
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

  buttonBack.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonBack);

  // POST
  const printerPost = HomeDiv.querySelector('#printerPost');

  window.addEventListener('DOMContentLoaded', async (e) => {
    // const querySnapshot = await getPosts();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });

    onGetPosts((querySnapshot) => {
      printerPost.innerHTML = '';

      querySnapshot.forEach((doc) => {
        console.log(doc, 'hola');
        const task = doc.data();
        console.log(doc.data());

        printerPost.innerHTML += `
                                  <div class="card">
                                    <p>${task.container}</p>
                                  <div>
                                  <button class="btn-delete" data-id="${doc.id}">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                  <path d="M4 7l16 0" />
                                  <path d="M10 11l0 6" />
                                  <path d="M14 11l0 6" />
                                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                  </svg>
                                  </button>
                                  <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                  <path d="M13.5 6.5l4 4" />
                                </svg>
                                  </button>
                                  </div>
                                  </div>`;
      });
      borrarPost();
    });

    function borrarPost() {
      const card = printerPost.querySelector('.card');
      const btnsDelete = card.querySelectorAll('.btn-delete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', async () => {
          try {
            console.log(btn.id);
            await deletePost(btn.id);
          } catch (error) {
            console.log(error);
          }
        });
      });
    }

    HomeDiv.querySelector('#printerPostButton').addEventListener(
      'click',
      async () => {
        e.preventDefault();
        const textAreaPost = HomeDiv.querySelector('#textAreaPost');
        const textAreaContainer = textAreaPost.value;
        createPost(textAreaContainer);
        textAreaPost.value = '';

        // .then(() => {
        /* const printerPost = HomeDiv.querySelector('#printerPost');
    const textAreaContainer = HomeDiv.querySelector('#textAreaPost').value;

    console.log(textAreaContainer);

    createPost(textAreaContainer).then(() => {
      console.log(querySnapshot);
      onGetPosts((querySnapshot) => {
        printerPost.innerHTML = '';

        querySnapshot.forEach((doc) => {
          console.log(doc, 'hola');
          const task = doc.data();

          printerPost.innerHTML += `
      <div class="card card-body mt-2 border-primary">
    <p>${task.contenido}</p>
    <div>
      <button class="btn btn-primary btn-delete" data-id="${doc.id}">
        🗑 Delete
      </button>
      <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
        🖉 Edit
      </button>
    </div>
  </div>`;
        });
        const btnsDelete = HomeDiv.querySelectorAll('.btn-delete');
        btnsDelete.forEach((btn) => btn.addEventListener('click', async ({ target: { dataset } }) => {
          try {
            await deleteTask(dataset.id);
          } catch (error) {
            console.log(error);
          }
        }));

        const btnsEdit = HomeDiv.querySelectorAll('.btn-edit');
        btnsEdit.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            try {
              const doc = await getPost(e.target.dataset.id);
              const task = doc.data();

              printerPost['#textAreaPost'].value = task.contenido;

              editStatus = true;
              id = doc.id;
              printerPost['#printerPostButton'].innerText = 'Update';
            } catch (error) {
              console.log(error);
            }
          })
        });
      });

      /* obtenTodosLosPost().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          HomeDiv.querySelector('#printerPost').innerHTML += `
          <div class="printer-post">
            <h4> ${doc.data().usuario}</h4>
            <p> ${doc.data().contenido}</p>

          </div>`;
        });
      }); */
      },
    );
  });

  return HomeDiv;
};
