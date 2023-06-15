// aqui exportaras las funciones que necesites

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

export function crearUsuarioConCorreoYContraseña(email, contraseña, onNavigate) {
  createUserWithEmailAndPassword(auth, email, contraseña)
    .then((result) => {
      if (result.user) {
        localStorage.setItem('casita', JSON.stringify(result));
        onNavigate('/post');
      }
    });
// .catch((err) => { alert('hola'); });
}

// post

export const createPost = (contenido) => {
  addDoc(collection(db, "posts"),{
    container:contenido,
    usuario:auth.currentUser.email,
  })
}

signInWithEmailAndPassword(auth, email, password);