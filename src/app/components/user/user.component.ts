import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html'
})
export class UserComponent {

  //Esto lo tiene que pasar el padre
  @Input() users: User[]= [];

  //Para emitir al componente padre
  @Output() idUserEventEmitter = new EventEmitter();

  @Output() selectedUserEventEmitter = new EventEmitter();

  onRemoveUser(id:number):void{
    this.idUserEventEmitter.emit(id);

  }

  onSelectedUser(user:User):void{
    this.selectedUserEventEmitter.emit(user);
  }


}
