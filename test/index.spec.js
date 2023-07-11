import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  addDoc, deleteDoc, getDoc, onSnapshot, updateDoc,
} from 'firebase/firestore';
import {
  addLike,
  createPost,
  createUser,
  deletePosts,
  getPost,
  initSessionsWithGoogle,
  logOut,
  onGetPosts,
  removeLike,
  signIn,
  updatePost,
} from '../src/lib/index';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

describe('deletePosts', () => {
  it('debería ser una función', () => {
    expect(typeof deletePosts).toBe('function');
  });

  it('Deberia llamar a la funcion deleteDoc cuando es ejecutada', async () => {
    await deletePosts('bjidjg');
    expect(deleteDoc).toHaveBeenCalled();
  });
});

describe('updatePost', () => {
  test('debería editar post', async () => {
    updateDoc.mockReturnValueOnce({ constainer: 'newText' });
    const response = await updatePost('12345', 'newText');
    expect(response.constainer).toBe('newText');
  });

  test('debería llamar a la función updateDoc cuando es ejecutada', async () => {
    await updatePost('12345', 'newText');
    expect(updateDoc).toHaveBeenCalled();
  });
});

describe('addLike', () => {
  test('debería dar like a post', async () => {
    updateDoc.mockReturnValueOnce({ likes: 'like' });
    const response = await addLike('12345', 'like');
    expect(response.likes).toBe('like');
  });

  test('debería llamar a la función updateDoc cuando es ejecutada', async () => {
    await addLike('add', 'like');
    expect(updateDoc).toHaveBeenCalled();
  });
});

describe('removeLike', () => {
  test('debería quitar like a post', async () => {
    updateDoc.mockReturnValueOnce({ likes: '' });
    const response = await removeLike('add', 'removelike');
    expect(response.likes).toBe('');
  });

  test('debería llamar a la función updateDoc cuando es ejecutada', async () => {
    await removeLike('add', 'removelike');
    expect(updateDoc).toHaveBeenCalled();
  });
});

describe('onGetPosts', () => {
  it('debería ser una función', () => {
    expect(typeof onGetPosts).toBe('function');
  });

  it('Deberia llamar a la funcion onSnapshot cuando es ejecutada', async () => {
    onGetPosts('bjidjg');
    expect(onSnapshot).toHaveBeenCalled();
  });
});

describe('getPost', () => {
  it('debería ser una función', () => {
    expect(typeof getPost).toBe('function');
  });

  it('Deberia llamar a la funcion getDoc cuando es ejecutada', async () => {
    getPost('bjidjg');
    expect(getDoc).toHaveBeenCalled();
  });
});

describe('initSessionsWithGoogle', () => {
  test('debería retornar usuario al entrar con Google', async () => {
    signInWithPopup.mockReturnValueOnce({ user: 'namegoogle' });
    GoogleAuthProvider.mockReturnValueOnce({});
    // console.log(provider);
    const response = await initSessionsWithGoogle();
    expect(response.user).toBe('namegoogle');
  });

  test('debería llamar a la función signInWithPopup cuando es ejecutada', async () => {
    await initSessionsWithGoogle();
    expect(signInWithPopup).toHaveBeenCalled();
  });
});

describe('createPost', () => {
  test('debería crear un post', async () => {
    addDoc.mockReturnValueOnce({ container: 'info' });
    const response = createPost('contenido');
    expect(response).toBe();
  });

  test('debería llamar a la función addDoc cuando es ejecutada', async () => {
    createPost('contenido');
    expect(addDoc).toHaveBeenCalled();
  });
});

describe('signIn', () => {
  // console.log(signInWithEmailAndPassword);

  it('debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });

  it('Debe llamar la funcion signInWithEmailAndPassword cuando es ejecutada', async () => {
    await signIn('mama@gmail.com', 'mama.123');
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
});

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });

  it('Debe llamar la funcion createUserWithEmailAndPassword cuando es ejecutada', async () => {
    // eslint-disable-next-line no-undef
    createUserWithEmailAndPassword('mama@gmail.com', 'mama.123');
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
});

describe('logOut', () => {
  it('debería ser una función', () => {
    expect(typeof signOut).toBe('function');
  });

  test('debería llamar a la función signOut cuando es ejecutada', async () => {
    await logOut('xxx');
    expect(signOut).toHaveBeenCalled();
  });
});

describe('inicioGoogle', () => {
  it('debería ser una funciónn que crea cuenta con google', () => {
    expect(typeof signInWithPopup).toBe('function');
  });
});
