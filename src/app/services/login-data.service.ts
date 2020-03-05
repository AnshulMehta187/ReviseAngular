import { Injectable } from '@angular/core';
import { timer, throwError, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { User } from '../pages/components/login/state/index';

const user: User = {
  firstName: 'Anshul ',
  lastName: 'Mehta',
  token: 'ab123abde'
};

interface Credentials {
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor() { }

  getUser(cred: Credentials): Observable<User> {
    return (cred.username === 'admin' && cred.password === 'admin')
      ? timer(300).pipe(mapTo(user)) :
      throwError('Invalid username or password');
  }
}
