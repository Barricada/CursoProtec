import { Component, OnInit } from '@angular/core';
import { USERS, User } from 'src/app/clases/users';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent implements OnInit {

  user: User = USERS[4];
  userForm: FormGroup;
  userArray: FormArray;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
        name: this.user.name,
        username: this.user.username,
        email: this.user.email,
        address: this.fb.group({
          street: this.user.address.street,
          city: this.user.address.city,
          zipcode: this.user.address.zipcode
        })
      });

      let webSiteControl = new FormControl('protecmedia.com');
      this.userForm.addControl('password', webSiteControl);
  }

  ngOnInit() {
  }

}
