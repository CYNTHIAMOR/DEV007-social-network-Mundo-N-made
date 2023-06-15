// aqui exportaras las funciones que necesites

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";

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

export const initSessionsWithGoogle = () => {
  const provider = new GoogleAuthProvider();


  return signInWithPopup(auth, provider)
}



//signInWithEmailAndPassword(auth, email, password);