import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { TopoComponent } from './topo/topo.component';


@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    ProgressoComponent,
    TentativasComponent,
    TopoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
