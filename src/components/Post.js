import heart from '../img/heart-empty.png';
import heartblue from '../img/heart-blue.png';

import {
  onGetPosts,
  createPost,
  deletePosts,
  getPost,
  logOut,
  updatePost,
  addLike,
  removeLike,
} from '../lib';
import { auth } from '../firebase';

export const Post = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.classList.add('all');
  let editStatus = false;
  let id = '';

  const userLogin = localStorage.getItem('user');

  HomeDiv.innerHTML = `
  <div class="container-background">
  <div class="container-presentation">
  <div class="container-logo"></div>
  <button class="btn-finish"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout-2" width="30" height="44" viewBox="0 0 24 24" stroke-width="2.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
  <path d="M15 12h-12l3 -3" />
  <path d="M6 15l-3 -3" />
  </svg></button>
  </div>
    <main >
      <div class="container-menu">
        <nav class="menu_">
          <div class="container-nav_">
            <div>
              <button class="nav-button">
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="64" height="64" viewBox="0 0 24 24" stroke-width="1" stroke="#1F0D3A" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M10 12h4v4h-4z" />
                  </svg>
                </a> 
              </button>
              <h3>Inicio</h3>
            </div>
            
            <div> 
              <button class="nav-button">
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="64" height="64" viewBox="0 0 24 24" stroke-width="1" stroke="#1F0D3A" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                  </svg>
                </a>
              </button>
              <h3>Perfil</h3>
            </div>
           
          </div>
        </nav>
      </div>
      <div class="section-post-father">
        <section class="section-post">
          <div class="div-post" id="divPost">
          <div class="container-name-picture">
          </svg></a></button>
        <button class="nav-button"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9E9E9E" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
        </svg></a></button>
            <h3 class="name">${userLogin}</h3>
            </div>
            <div class="am"><textarea placeholder="Qué quieres compartir?" class="text-area-post" name="post" id="textAreaPost" cols="30" rows="10"></textarea></div>
              <div class="container-photo-post">
                <div><svg xmlns="http://www.w3.org/2000/svg" class="icon1 icon-tabler icon-tabler-photo-filled" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597E8D" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8.813 11.612c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.986 4.986l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l.292 -.293l.106 -.095c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.674 4.675a4 4 0 0 1 -3.775 3.599l-.206 .005h-12a4 4 0 0 1 -3.98 -3.603l6.687 -6.69l.106 -.095zm9.187 -9.612a4 4 0 0 1 3.995 3.8l.005 .2v9.585l-3.293 -3.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-.307 .306l-2.293 -2.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-5.307 5.306v-9.585a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-2.99 5l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" stroke-width="0" fill="currentColor" />
              </svg></div>
                <div> <button class="comparts" id="printerPostButton">Compartir</button></div>
              </div>
              </div>
        </section>
        <section class="section-post-history">
            <div class="printer-post" id="printerPost"></div>
        </section>
      </div>
    </main>
    <nav class="menu">
      <div class="container-nav">
        <button class="nav-button"><a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9E9E9E" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg></a>
        </button>
        <button class="nav-button">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9E9E9E" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
          </a>
        </button>
      </div>
    </nav>
  </div>
      `;

  // ------------------------------------FUNCIONES ---------------------------------
  // console.log(auth.currentUser)
  // BORRAR POST

  function deletePost() {
    const btnsDelete = document.body.querySelectorAll('.btn-delete');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', async () => {
        try {
          await deletePosts(btn.dataset.id);
        } catch (error) {
          console.log(error);
        }
      });
    });
  }

  // EDITAR POST

  function editPost() {
    const btnsEdit = document.body.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async () => {
        try {
          const doc = await getPost(btn.dataset.id);
          const task = doc.data();
          const textAreaPost = HomeDiv.querySelector('#textAreaPost');
          textAreaPost.value = task.container;
          textAreaPost.focus();
          id = btn.dataset.id;
          HomeDiv.querySelector('#printerPostButton').innerText = 'Guardar';
          editStatus = true;
        } catch (error) {
          console.log(error, 'hello1');
        }
      });
    });
  }

  // DAR COLOR A LOS LIKES

  // const num = HomeDiv.querySelector('.num');
  // num.textContent = doc.likes.length;
  // const containerLikes = document.body.querySelector('.container-likes')
  // containerLikes.innerHTML += `${doc[0].likes.length}`

  // DAR Y QUITAR LIKE
  /* function like() {
    console.log(like);
    const buttonLike = document.body.querySelectorAll('.button-like');
    buttonLike.forEach((btn_) => {
      btn_.addEventListener('click', async () => {
        // console.log(btn_.dataset.id);
        // console.log(auth.currentUser.uid);

        const cod = btn_.dataset.id;
        try {
          if (btn_.dataset.id.includes(auth.currentUser.uid)) {
            await removeLike(cod, auth.currentUser.uid);
          } else {
            await addLike(cod, auth.currentUser.uid);
          }
        } catch (err) {
          // console.log(error, 'hello1');
        }
      });
    });
  }
*/
  // ----------------------------POST---------------------------------------------

  const printerPost = HomeDiv.querySelector('#printerPost');
  // window.addEventListener('DOMContentLoaded', async (e) => {
  // const querySnapshot = await getPosts();
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data());
  // });
  // cuando se cargue el don hare ...
  // const postNew = onGetPosts(querySnapshot)
  // console.log(querySnapshot)
  onGetPosts((querySnapshot) => {
  // console.log(querySnapshot.docs, 'bkhzlhflgkhlg')
    printerPost.innerHTML = '';
    const newArr = [];
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      const idDoc = doc.id;
      newArr.push([task, { id: idDoc }]);
    });

    const task = newArr.sort((a, b) => b[0].date - a[0].date);

    task.forEach((doc) => {
      const likeImg = doc[0].likes.includes(auth.currentUser.uid)
        ? heartblue
        : heart;

      const html = `
                                 <div class="card">

                                    <div class="user">
                                      <div class="user-name">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                        </svg>
                                        <p class="name">${doc[0].usuario}</p>
                                       
                                      </div>
                                     
                                      <div class="del-edit" id="delEdit" style="display:${doc[0].usuario === userLogin ? 'flex' : 'none'}">
                                        <button class="btn-delete" data-id="${doc[1].id}">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M4 7l16 0" />
                                            <path d="M10 11l0 6" />
                                            <path d="M14 11l0 6" />
                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                          </svg>
                                        </button>
                                        <button class="btn-edit" data-id="${doc[1].id}">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                            <path d="M13.5 6.5l4 4" />
                                          </svg> 
                                        </button>
                                      </div>
                                    </div>
                                    <div class="container-text-post">
                                    <p >${doc[0].container}</p>
                                    </div>
                                    <hr>
                                    <div class="likes">
                                      <button class="button-like" data-id="${doc[1].id}">
                                      <img src='${likeImg}' class="color-like">
                                      </button>
                                      <div class="container-likes">${doc[0].likes.length}</div>
                                    </div>
                                  </div>`;

      printerPost.insertAdjacentHTML('beforeend', html);

      const buttonLike = printerPost.lastElementChild.lastElementChild.firstElementChild;
      buttonLike.addEventListener('click', async () => {
        const cod = doc[1].id;
        try {
          if (doc[0].likes.includes(auth.currentUser.uid)) {
            await removeLike(cod, auth.currentUser.uid);
          } else {
            await addLike(cod, auth.currentUser.uid);
          }
        } catch (err) {
          console.error(err.message, 'ahhhhhh');
        }
      });
    });
    deletePost();
    editPost();
  });

  // ---------------------------------------- EVENTOS ----------------------------------

  // CERRAR SESION

  const btnFinish = HomeDiv.querySelector('.btn-finish');
  btnFinish.addEventListener('click', async () => {
    try {
      if (userLogin) {
        // console.log(logOut)
        await logOut(onNavigate);
        localStorage.clear();
        onNavigate('/');
      } else {
        console.log('hola');
      }
    } catch (err) {
      console.error(err.message);
    }
  });

  // CREAR O EDITAR EL POST

  HomeDiv.querySelector('#printerPostButton').addEventListener(
    'click',
    async (e) => {
      e.preventDefault();
      const textAreaPost = HomeDiv.querySelector('#textAreaPost');
      const textAreaContainer = textAreaPost.value;
      /* if (textAreaContainer === '') {
        // console.log('jijd')
        return alert('El contenido del post no puede estar vacío');
      } */
      try {
        if (!editStatus) {
          createPost(textAreaContainer, userLogin);
          textAreaPost.value = '';
        } else {
          // console.log(updatePost);
          await updatePost(id, { container: textAreaContainer });
          editStatus = false;
          id = '';
          textAreaPost.value = '';
          HomeDiv.querySelector('#printerPostButton').innerText = 'Compartir';
        }
      } catch (error) {
        console.error(error.message, 'ahccccccchhhhh');
      }
      // return null;
    },
  );

  return HomeDiv;
};
