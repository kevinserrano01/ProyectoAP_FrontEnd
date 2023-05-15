import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent}, // HOME: Aplica el ruteo en la principal. Me lleva al localhost:4200
  {path:'login', component: LoginComponent} // Me lleva al localhost:4200/login que es el otro componente login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
