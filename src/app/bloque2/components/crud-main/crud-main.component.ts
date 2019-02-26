import { Component, OnInit } from '@angular/core';
import { User, USERS } from 'src/app/clases/users';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-crud-main',
  templateUrl: './crud-main.component.html',
  styleUrls: ['./crud-main.component.css']
})
export class CrudMainComponent implements OnInit {

  users: User[];
  //private userServices: UserService;

  newNom: string = "";
  newEmail: string = "";
  newPhone: string = "";
  id: number = 11;
  isLoaded: boolean = false;

  userSel: User = null;
  indexSel: number = -1;
  showX: number = -1;

  constructor(private userServices: UserService) {
    //this.users = this.userServices.get();
    this.userServices.get().subscribe(
      (response) => this.users = response,
      (error) => {},
      () => {this.isLoaded = true}
    );
  }

  ngOnInit() {

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

  deleteFromChild(user: User) {
      this.users = this.users.filter( el => el.id != user.id);
      this.indexSel = -1;
      this.userSel = null;

  }
}
