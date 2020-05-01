import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersjaqueComponent } from './usersjaque/usersjaque.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const routes: Routes = [
    {path: 'users', component: UsersjaqueComponent},
    {path: 'buscar/:termino', component: BusquedaComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'users'}
];

export const APP_ROUTING = RouterModule.forRoot(routes);
