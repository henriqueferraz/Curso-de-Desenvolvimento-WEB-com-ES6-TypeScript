import { Component, EventEmitter, OnInit, Output } from '@angular/core';


import { FRASE } from '../shared/frase.mock';

import { Frase } from '../shared/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASE;
  public instrucao = 'Traduza a frase:';
  public resposta = '';

  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso = 0;

  public tentativas = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value);
  }

  verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr === this.resposta) {

      // Troca a pergunta da rodada
      this.rodada++;
      this.progresso = this.progresso + (100 / this.frases.length);

      // Verifica se o jogador chegou ao final
      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
      }

      // Atualiza a rodada
      this.atualizaRodada();

      alert('A Tradução está correta');

    } else {

      this.tentativas--;

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
      alert('A Tradução está errada');
    }
  }

  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
