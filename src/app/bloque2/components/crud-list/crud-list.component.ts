import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/clases/users';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {

  @Input() users: User[];
  @Output() selectUserChanged: EventEmitter<User> = new EventEmitter();

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
      this.selectUserChanged.emit(this.userSel);
      return;
    }
    this.indexSel = index;
    this.userSel = this.users[this.indexSel];
    this.selectUserChanged.emit(this.userSel);
  }

  xVisible(index: number) {
    this.showX = index;
  }

  resetShowX() {
    this.showX = -1;
  }
}
