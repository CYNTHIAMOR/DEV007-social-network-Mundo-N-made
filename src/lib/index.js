// aqui exportaras las funciones que necesites

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const crearUsuarioConCorreoYContraseña = (email, contraseña) => {
  createUserWithEmailAndPassword(auth, email, contraseña);
};
