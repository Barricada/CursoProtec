import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponent } from './components/primer/primer.component';
import { OtroComponent } from './components/otro/otro.component';
import { ExponentPipe } from './pipes/exponent.pipe';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { CrudBasicoComponent } from './componentes/crud-basico/crud-basico.component';
import { Bloque2Module } from './bloque2/bloque2.module';
import { LogginComponent } from './components/loggin/loggin.component';
import { LoggedComponent } from './components/logged/logged.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    OtroComponent,
    ExponentPipe,
    GaleriaComponent,
    CrudBasicoComponent,
    LogginComponent,
    LoggedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Bloque2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
