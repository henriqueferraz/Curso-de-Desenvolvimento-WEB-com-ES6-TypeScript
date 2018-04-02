import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import '../util/rxjs-extencao';

import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {
  private subjectPesquisa: Subject<string> = new Subject<string>();
  public ofertas: Observable<Oferta[]>;
  public ofertasView: Oferta[];

  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((termoDaBusca: string) => {
        console.log('requisiçao http');

        if (termoDaBusca.trim() === '') {
          return Observable.of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termoDaBusca);
      })
      .catch((error: any) => {
        console.log(error);
        return Observable.of<Oferta[]>([]);
      });
    this.ofertas.subscribe((ofertas: Oferta[]) => this.ofertasView = ofertas);
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('Teclas pressionada: ', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);
  }
}
