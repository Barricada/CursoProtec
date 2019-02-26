import { Component, OnInit } from '@angular/core';
import { User, USERS } from 'src/app/clases/users';

@Component({
  selector: 'app-forms-template',
  templateUrl: './forms-template.component.html',
  styleUrls: ['./forms-template.component.css']
})
export class FormsTemplateComponent implements OnInit {

  user: User = USERS[0];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    //Hacer lo que sea
    //Luego limpiar el formulario
    this.user.name = '';
    this.user.username = '';
    this.user.email = '';
   }

   hasUnsavedChanged() : boolean {
     return true;
   }

}
