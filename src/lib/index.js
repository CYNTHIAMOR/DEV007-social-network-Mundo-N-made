// aqui exportaras las funciones que necesites
import { createUserWithEmailAndPasword } from '../firebase/auth';
import { auth } from '../firebase';

export const crearUsuarioConCorreoYContraseña = (email, contraseña) => createUserWithEmailAndPasword(auth, email, contraseña);