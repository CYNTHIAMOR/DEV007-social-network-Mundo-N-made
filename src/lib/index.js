// aqui exportaras las funciones que necesites

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore'; //getDocs
import { auth, db } from '../firebase';

// CREAR USUARIO

export function crearUsuarioConCorreoYContraseña(email, contraseña, onNavigate) {
  createUserWithEmailAndPassword(auth, email, contraseña)
    .then((result) => {
      if (result.user) {
        localStorage.setItem('casita', JSON.stringify(result));
        onNavigate('/post');
      }
    });
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
    usuario: auth.currentUser.email,
  });
};