import { Component, OnInit } from '@angular/core';
import { User, USERS } from 'src/app/clases/users';
import { unsupported } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-crud-basico',
  templateUrl: './crud-basico.component.html',
  styleUrls: ['./crud-basico.component.css']
})
export class CrudBasicoComponent implements OnInit {

  users: User[] = [...USERS];

  newNom: string = "";
  newEmail: string = "";
  newPhone: string = "";
  id: number = 11;

  userSel: User = null;

  indexSel: number = -1;

  showX: number = -1;

  constructor() {

  }

  ngOnInit() {
  }

  selectItem(index: number) {
    if ( this.indexSel == index )
    {
      this.indexSel = -1;
      this.userSel = null;
      return;
    }
    this.indexSel = index;
    this.userSel = this.users[this.indexSel];
  }

  addUser(newNom: string, newEmail: string, newPhone: string) {
    this.users.push(new User(this.id++,newNom,newEmail,newPhone));
  }

  deleteUser(index: number) {
      this.users.splice(index, 1);
  }

  limpiarDatos() {
    this.newNom = "";
    this.newEmail = "";
    this.newPhone = "";
  }

  xVisible(index: number) {
    this.showX = index;
  }

  resetShowX() {
    this.showX = -1;
  }

  getBKColor(cad: string) {
    if ( cad == '')
      return "red";
    return "green";
  }
}
