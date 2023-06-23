// aqui exportaras las funciones que necesites

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import { auth, db } from '../firebase';

// CREAR USUARIO

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
  // .catch((err) => { alert('hola'); });
}

// INICIAR SESION CON CORREO Y CONTRASE;A

export function signIn(email, contraseña, onNavigate) {
  signInWithEmailAndPassword(auth, email, contraseña).then((result) => {
    if (result.user) {
      localStorage.getItem('casita', JSON.stringify(result));
      onNavigate('/post');
    }
  });
}

// INICIAR SESION CON GOOGLE Y FACEBOOK

export const initSessionsWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider);
};

export const initSessionsWithFacebook = () => {
  const provider = new FacebookAuthProvider();

  return signInWithPopup(auth, provider);
};

// CREAR POST

export const createPost = (contenido) => {
  addDoc(collection(db, 'posts'), {
    container: contenido,
    date: Date.now(),
    usuario: auth.currentUser.email,
  });
};

// OBTENER DATA DE POSTS FIRESTORE

export const onGetPosts = (callback) => onSnapshot(collection(db, 'posts'), callback); //ojo verificar

export const getPost = (id) => getDoc(doc(db, 'posts', id));

export const getPosts = () => getDocs(collection(db, 'posts'));

export const deletePosts = (id) => deleteDoc(doc(db, 'posts', id));
/*
// ADD LIKE
export const addLikeArr = (idPost, uid) => (
  firebase.firestore().collection('posts').doc(idPost)
    .update({ likes: firebase.firestore.FieldValue.arrayUnion(uid) })
);

// REMOVE LIKE
export const removeLikeArr = (idPost, uid) => (
  firebase.firestore().collection('posts').doc(idPost)
    .update({ likes: firebase.firestore.FieldValue.arrayRemove(uid) })
);
*/