import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/clases/users';
import { UserService } from 'src/app/services/user.service';
import { fromEvent } from "rxjs";
import { map, filter, tap, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('search') email: ElementRef;
  users: User[] = [];
  constructor(private userService: UserService) {
    this.userService.get().subscribe(
      response => this.users = response
    );
  }

  ngOnInit() {

    fromEvent(this.email.nativeElement, "keyup")
    .pipe(
      map( (x: any) => x.target.value),
      tap(x => console.log('Después de map:',x)),
      filter((x: string) => x.length > 3),
      tap(x => console.log('Después de filter:',x)),
      debounceTime(500),  // una especie de timer entre "Nexts" del observable
      tap(x => console.log('Después de debounceTime:',x)),
      distinctUntilChanged(), // cuando la búsqueda sea distinta de la anterior
      tap(x => console.log('Después de distinctUntilChanged:',x)),
     // switchMap( (x) => this.userService.get(x)), // quitariamos el Subscribe de abajo
    ).subscribe((value:any) => {
     this.userService.get(value).subscribe(users => this.users = users);
  })


/*    let observable = fromEvent(this.email.nativeElement, "keyup")
    .subscribe((event:any) => {   // en event recojo un KeyboardEvent y el 'target' es la 'caja' donde ocurre
      let value = event.target.value; // por lo tanto, recojo el value del input y me suscribo al userservice pasando el value
      this.userService.get(value).subscribe(users => this.users = users);
    })*/
  }

}
