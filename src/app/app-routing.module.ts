import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './personas/error/error.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoginComponent } from './personas/login/login.component';
import { LoginGuard } from './personas/login/login.guard';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  { path:'', component: PersonasComponent,canActivate:[LoginGuard]},
  { path:'personas', component: PersonasComponent,canActivate:[LoginGuard], children:[
  { path:':id', component: FormularioComponent},
  { path:'agregar', component: FormularioComponent}
  ]},
  { path:'login', component: LoginComponent},
  { path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
