import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimerComponent } from './components/primer/primer.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { CrudBasicoComponent } from './componentes/crud-basico/crud-basico.component';
import { CrudMainComponent } from './bloque2/components/crud-main/crud-main.component';
import { EjemploEventoComponent } from './bloque2/components/ejemplo-evento/ejemplo-evento.component';
import { FormsTemplateComponent } from './bloque2/components/forms-template/forms-template.component';
import { ObservablesComponent } from './bloque2/components/observables/observables.component';
import { SearchComponent } from './bloque2/components/search/search.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfirmGuard } from './guards/confirm.guard';
import { FormsReactiveComponent } from './bloque2/components/forms-reactive/forms-reactive.component';

const routes: Routes = [
  {path: '', component: FormsReactiveComponent},
  {path: 'primer', component: PrimerComponent},
  {path: 'galeria', component: GaleriaComponent, canActivate: [AuthGuard]},
  {path: 'crud-basico', component: CrudBasicoComponent},
  {path: 'crud2', component: CrudMainComponent},
  {path: 'ejemplos/evento', component: EjemploEventoComponent},
  {path: 'forms1', component: FormsTemplateComponent, canDeactivate: [ConfirmGuard]},
  {path: 'observables', component: ObservablesComponent},
  {path: 'search', component: SearchComponent},
  {path: 'forms2', component: FormsReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
