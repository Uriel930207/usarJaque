import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersjaqueComponent } from './usersjaque/usersjaque.component';
import { HttpClientModule } from '@angular/common/http';
import { serviceUsers } from './usersjaque/users.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ModaluserComponent } from './modaluser/modaluser.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersjaqueComponent,
    ModaluserComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    DragDropModule
  ],
  providers: [serviceUsers],
  bootstrap: [AppComponent]
})
export class AppModule { }
