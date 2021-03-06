import { Usuario } from './usuario.model';
import * as firebase from 'firebase';

export class Autenticacao {
  public cadastrarUsuario(usuario: Usuario): void {
    firebase
      .auth()
      .createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then((resposta: any) => {
        delete usuario.senha;
        firebase
          .database()
          .ref(`usuario_detalhe/${btoa(usuario.email)}`)
          .set(usuario);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }

  public autenticar(email: string, senha: string): void {
    console.log('Email/Senha:', email, senha);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((resposta: any) => {
        console.log(resposta);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }
}
