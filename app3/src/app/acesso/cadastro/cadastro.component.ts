import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Autenticacao } from '../autenticacao.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter();

  public formulario: FormGroup = new FormGroup({
    email: new FormControl(null),
    nome_completo: new FormControl(null),
    nome_usuario: new FormControl(null),
    senha: new FormControl(null)
  });

  constructor(
    public autenticacao: Autenticacao
  ) {}

  ngOnInit() {}

  public exibirPainelLogin(): void {
    this.exibirPainel.emit('login');
  }

  public cadastrarUsuario(): void {
    const usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    );
    this.autenticacao.cadastrarUsuario(usuario);
  }
}
