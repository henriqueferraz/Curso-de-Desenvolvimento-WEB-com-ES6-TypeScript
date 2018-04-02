import {
  animate,
  Component,
  OnInit,
  transition,
  trigger,
  state,
  style
} from '@angular/core';
import { Imagem } from './imagem.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state(
        'escondido',
        style({
          opacity: 0
        })
      ),
      state(
        'visivel',
        style({
          opacity: 1
        })
      ),
      transition('escondido <=> visivel', animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {
  public estado: 'visivel';

  public imagens: Imagem[] = [
    { estado: 'visivel', url: '/assets/banner-acesso/img_1.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_2.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_3.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_4.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_5.png' }
  ];

  constructor() {}

  ngOnInit() {
    setTimeout(() => this.logicaRotacao(), 3000);
  }

  public logicaRotacao(): void {
    let img: number;

    // Ocultar Imagem
    for (let i = 0; i <= 4; i++) {
      if (this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'escondido';
        img = i === 4 ? 0 : i + 1;
        break;
      }
    }
    // Exibir Imagem
    this.imagens[img].estado = 'visivel';
    setTimeout(() => this.logicaRotacao(), 3000);
  }
}
