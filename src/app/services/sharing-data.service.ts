import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private  _newUserEventEmiter:EventEmitter<User> = new EventEmitter();

  private _idUserEventEmitter = new EventEmitter();

  private _findUserByIdEventEmitter = new EventEmitter();

  private _selecUserEventEmitter = new EventEmitter();

  constructor() { }

  get selectUserEventEmitter(){
    return this._selecUserEventEmitter;
  }

  get findUserByIdEventEmitter(){
    return this._findUserByIdEventEmitter;
  }

  get newUserEventEmiter():EventEmitter<User>{
      return this._newUserEventEmiter;
  }

  get idUserEventEmitter():EventEmitter<number>{
    return this._idUserEventEmitter;
  }


}
