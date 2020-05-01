import { Component, OnInit } from '@angular/core';
import { serviceUsers } from './users.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersjaque',
  templateUrl: './usersjaque.component.html',
  styleUrls: ['./usersjaque.component.scss']
})
export class UsersjaqueComponent implements OnInit {
    
  constructor(private userRegis: serviceUsers, private router:Router ) {
   }

  users = [];
  roles = [];
  active = false;

  ngOnInit() {
    this.active = false;

    this.userRegis.UsersRegi().subscribe(
      resp => {
        this.users = resp['users'];
        for(let i of resp['users']){
          this.roles.push(i['roleId']);
        }
      });

    this.userRegis.RolesUser().subscribe(
      resp => {
        for(let a of this.roles){
          for(let b of resp['roles'])
          if (a == b['id']){
            this.users.push(b);
          }
      }
   });

  }

  mostrarMod(){
    this.active = true;
  };

  cerrarMod(){
    this.active = false;
  }

  busquedauser(termino:string){
    console.log(termino);
    this.router.navigate(['/buscar', termino])
  }

  drop(event : CdkDragDrop<string[]>){
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }

}
