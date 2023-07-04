import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
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
  getDocs,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { auth, db } from '../firebase';

// ----------------------------- CREAR USUARIO -----------------------------------------

// PERFIL

// export const profile = (name_, xx) => updateProfile((name_, xx), { displayName: , photoURL: });

//  CON CORREO Y CONTRASE;A
export function crearUsuarioConCorreoYContraseña(
  email,
  contraseña,
  onNavigate,
) {
  createUserWithEmailAndPassword(auth, email, contraseña).then((result) => {
    if (result.user) {
      localStorage.setItem('casita', JSON.stringify(result));
      onNavigate('/post');
    }
  });
}

// ----------------------------INICIAR SESION -------------------------------

// CON CORREO Y CONTRASE;A

export function signIn(email, contraseña, onNavigate) {
  signInWithEmailAndPassword(auth, email, contraseña).then((result) => {
    if (result.user) {
      localStorage.getItem('casita', JSON.stringify(result));
      onNavigate('/post');
    }
  });
}

// INICIAR SESION CON GOOGLE

export const initSessionsWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider);
};

// INICIAR SESION CON FACEBOOK

export const initSessionsWithFacebook = () => {
  const provider = new FacebookAuthProvider();

  return signInWithPopup(auth, provider);
};

// --------------------------- POSTEAR -----------------------------------

// CRAER POST

export const createPost = (contenido) => {
  addDoc(collection(db, 'posts'), {
    container: contenido,
    date: Date.now(),
    usuario: auth.currentUser.email,
    likes: [],

  });
};

// ------- OBTENER DATA DE POSTS FIRESTORE------------

export const onGetPosts = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const getPost = (id) => getDoc(doc(db, 'posts', id));

export const getPosts = () => getDocs(collection(db, 'posts'));

// ---------- BORRAR Y EDITAR POST ----------

export const deletePosts = (id) => deleteDoc(doc(db, 'posts', id));

export const updatePost = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields);

// ADD LIKE
export const addLike = (id, like) => updateDoc(doc(db, 'posts', id), { likes: arrayUnion(like) });

// REMOVE LIKE
export const removeLike = (id, like) => updateDoc(doc(db, 'posts', id), { likes: arrayRemove(like) });

// ----------------------------- CERRAR SESION -----------------------

export const logOut = (onNavigate) => {
  signOut(auth)
    .then(() => {
      onNavigate('/');
    })
    .catch(() => {
    });
};
