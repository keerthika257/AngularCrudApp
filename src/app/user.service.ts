import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDetails } from './user-details';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static URL_USER_CONTROLLER = environment.apiUrl + '/user';
  constructor(private httpClient: HttpClient) { }

 saveUser(userDetails :UserDetails):Observable<object>{
  return this.httpClient.post(UserService.URL_USER_CONTROLLER+ '/saveUser', userDetails)
}



}
