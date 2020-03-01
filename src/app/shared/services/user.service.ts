import { Injectable } from '@angular/core';
import { UserModelService } from '../models/user-model.service';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userModel: UserModelService) { }

  getUser(): Promise<User> {
    return this.userModel.getUser();
  }
}
