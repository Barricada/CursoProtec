import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/clases/users';

@Component({
  selector: 'app-crud-edit',
  templateUrl: './crud-edit.component.html',
  styleUrls: ['./crud-edit.component.css']
})
export class CrudEditComponent implements OnInit {

  @Input("userIn")  user: User;
  @Output() deleteEvent: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete() {
      this.deleteEvent.emit(this.user);
  }

}
