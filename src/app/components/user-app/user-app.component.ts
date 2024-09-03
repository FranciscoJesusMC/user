import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { UserComponent } from "../user/user.component";
import { FormUserComponent } from '../form-user/form-user.component';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [UserComponent,FormUserComponent,FormsModule],
  templateUrl: './user-app.component.html',
  styleUrls:['../user-app.components.css']
})
export class UserAppComponent implements OnInit {

  title : string ='Listado de usuarios';

  users: User[] = [];

  userSelected : User;

  open: boolean= false;

  constructor(private service:UserService){
    this.userSelected =  new User();
  }


  ngOnInit(): void {
    this.service.findAll().subscribe(users =>this.users = users);
  }

  //Emite el componente hijo ($event)
  adduser(user:User){
    if(user.id > 0){
      this.users = this.users.map(u =>{
        if(u.id==user.id){
          return {...user};
        }
        return u;
      });
    }else{
      this.users = [... this.users,{...user,id: new Date().getTime()}];
    }
    Swal.fire({
      title: "Guardado!",
      text: "Usuario registrado con exito",
      icon: "success"
    });
    //Se limpia para selecionar otro
    this.userSelected =  new User();
    this.setOpen();
  }

  removeUser(id: number):void{
    Swal.fire({
      title: "Seguro que quieres eliminar",
      text: "No sera capaz de revertir esta action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si"
    }).then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter(user => user.id != id);
        Swal.fire({
          title: "Eliminado!",
          text: "El usuario ha sido eliminado.",
          icon: "success"
        });
      }
    });

  }

  setSelectedUser(userRow:User):void{
    this.userSelected={...userRow};
    this.open = true;
  }


  setOpen(){
    this.open = !this.open;
  }

}
