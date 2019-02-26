import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudMainComponent } from './components/crud-main/crud-main.component';
import { CrudAddComponent } from './components/crud-add/crud-add.component';
import { CrudListComponent } from './components/crud-list/crud-list.component';
import { CrudEditComponent } from './components/crud-edit/crud-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { RotateDirective } from './directives/rotate.directive';
import { EjemploEventoComponent } from './components/ejemplo-evento/ejemplo-evento.component';
import { FormsTemplateComponent } from './components/forms-template/forms-template.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { FormsReactiveComponent } from './components/forms-reactive/forms-reactive.component';

@NgModule({
  declarations: [
    CrudMainComponent,
    CrudAddComponent,
    CrudListComponent,
    CrudEditComponent,
    HighlightDirective,
    RotateDirective,
    EjemploEventoComponent,
    FormsTemplateComponent,
    ObservablesComponent,
    SearchComponent,
    FormsReactiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CrudMainComponent,
    HighlightDirective,
    RotateDirective,
    EjemploEventoComponent,
    FormsTemplateComponent,
    ObservablesComponent,
    SearchComponent,
    FormsReactiveComponent
  ]
})
export class Bloque2Module { }
