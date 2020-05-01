import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

import { serviceUsers } from '../usersjaque/users.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  constructor(private userRegis: serviceUsers, private activeRouter: ActivatedRoute) { }

  users = [];
  mosbosuser:any[] = [];

  buscaruser(termino:string):any{
    let userArr: any;
    termino = termino.toLowerCase();
    
    this.userRegis.UsersRegi().subscribe(
      resp => {
        for(let i of resp['users']){
          let nombre = i.name.toLowerCase();
          console.log(nombre);
          if(nombre.indexOf( termino ) >= 0){
           userArr.push(i);
          }
        }
        console.log(userArr);
        return userArr;
      });
  }

  ngOnInit(): void {
    this.activeRouter.params.subscribe( params => {
      this.mosbosuser = this.buscaruser( params['termino'] );
      console.log(this.mosbosuser);
    } )
  }

}
