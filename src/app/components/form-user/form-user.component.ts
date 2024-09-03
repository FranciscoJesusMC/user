import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'form-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-user.component.html'
})
export class FormUserComponent {

  @Input() user: User;

  @Output() newUserEventEmiter:EventEmitter<User> = new EventEmitter();

  @Output() openEventEmitter: EventEmitter<User> = new EventEmitter();

  constructor(){
    this.user =  new User();
  }

//Se invoca al con el ngsubmit
onSubmit(userForm:NgForm):void{
  if(userForm.valid){
    this.newUserEventEmiter.emit(this.user);
    console.log(this.user);
  }
  userForm.reset();
  userForm.resetForm();
}

onClear(userForm:NgForm):void{
  // this.user = new User();
  userForm.reset();
  // userForm.resetForm();
}

onOpenClose(){
  this.openEventEmitter.emit();
}
}
