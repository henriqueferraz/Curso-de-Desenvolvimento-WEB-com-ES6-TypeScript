export class Coracao {
  constructor(
    public cheio: boolean,
    public urlCoracaoCheio = 'assets/imgs/coracao_cheio.png',
    public urlCoracaoVazio = 'assets/imgs/coracao_vazio.png'
  ) { }

  exibeCoracao(): string {
    if (this.cheio) {
      return this.urlCoracaoCheio;
    } else {
      return this.urlCoracaoVazio;
    }
  }

}
