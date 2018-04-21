import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Pour les routes
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FournituresComponent } from './fournitures/fournitures.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'test', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'fournitures', component: FournituresComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
