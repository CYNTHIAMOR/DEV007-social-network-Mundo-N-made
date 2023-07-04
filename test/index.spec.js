// importamos la funcion que vamos a testear
import { signInWithEmailAndPassword, deleteDoc } from 'firebase/auth';
import { signIn, deletePosts } from '../src/lib/index';

// mock a todo firebase
jest.mock('firebase/auth');
jest.mock('firebase/firestore');

describe('signIn', () => {
  console.log(signInWithEmailAndPassword);

  it('debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });

  it('deberia llamar a la funcion de firebase signInWithEmailAndPassword cuando se ejecuta', async () => {
    await signIn('mjensignia@gmail.com', 'olidata');
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });

  /* it('devulve un objeto', async () => {
        const response = await signIn('mjensignia@gmail.com', 'olidata');
        expect(typeof response).toBe('object');
      });

      it('devulve un objeto con propiedad email', async () => {
        const response = await signIn('mjensignia@gmail.com', 'olidata');
        expect(response.user).toHaveProperty('email');
  }); */
});

describe('deletePosts', () => {
  it('debería ser una función', () => {
    expect(typeof deletePosts).toBe('function');
  });

  it('deberia llamar a la funcion de firebase deleteDoc cuando se ejecuta', async () => {
    await deletePosts('dfkxllf');
    expect(deleteDoc).toHaveBeenCalled(1);
  });
});
