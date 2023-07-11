import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { auth, db } from '../firebase';

// ----------------------------- CREAR USUARIO -----------------------------------------

//  CON CORREO Y CONTRASE;A
export function createUser(email, contraseña) {
  return createUserWithEmailAndPassword(auth, email, contraseña);
}

/* export function crearUsuarioConCorreoYContraseña(
  email,
  contraseña,
  onNavigate,
) {
  createUserWithEmailAndPassword(auth, email, contraseña).then((result) => {
    if (result.user) {
      localStorage.setItem('user', email);
      onNavigate('/post');
    }
  });
} */

// ----------------------------INICIAR SESION -------------------------------

// CON CORREO Y CONTRASE;A

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

/* export function signIn(email, contraseña, onNavigate) {
  signInWithEmailAndPassword(auth, email, contraseña).then((result) => {
    console.log(result);
    // console.log(result)
    if (result.user) {
      localStorage.setItem('user', email);
      onNavigate('/post');
    }
  });
} */

// INICIAR SESION CON GOOGLE

export const initSessionsWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider);
};

// INICIAR SESION CON FACEBOOK

/* export const initSessionsWithFacebook = () => {
  const provider = new FacebookAuthProvider();

  return signInWithPopup(auth, provider);
}; */

// --------------------------- POSTEAR -----------------------------------

// CRAER POST

export const createPost = (contenido, userLogin) => {
  // console.log(contenido, 'jkdhfkjdhr')
  addDoc(collection(db, 'posts'), {
    container: contenido,
    date: Date.now(),
    usuario: userLogin,
    likes: [],

  });
};
// ------- OBTENER DATA DE POSTS FIRESTORE------------

export const onGetPosts = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const getPost = (id) => getDoc(doc(db, 'posts', id));

// export const getPosts = () => getDocs(collection(db, 'posts'));

// ---------- BORRAR Y EDITAR POST ----------

export const deletePosts = (id) => deleteDoc(doc(db, 'posts', id));

export const updatePost = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields);

// ADD LIKE
export const addLike = (id, like) => updateDoc(doc(db, 'posts', id), { likes: arrayUnion(like) });

// REMOVE LIKE
export const removeLike = (id, like) => updateDoc(doc(db, 'posts', id), { likes: arrayRemove(like) });

// ----------------------------- CERRAR SESION -----------------------

/* export const logOut = (onNavigate) => {
  signOut(auth)
    .then(() => {
      localStorage.clear();
      onNavigate('/');
    })
    .catch(() => {
    });
}; */
export const logOut = (onNavigate) => signOut(auth, onNavigate);
