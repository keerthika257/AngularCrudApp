import { Injectable } from '@angular/core';
import { UserDetails } from './user-details';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService {

  private static URL_SECURITY_CONTROLLER = environment.apiUrl +'/security';

  constructor(private httpClient: HttpClient) { }

  login(userDetails: UserDetails):Observable<object>{
return this.httpClient.post(AuthGuardsService.URL_SECURITY_CONTROLLER + '/login',userDetails )
  }



}
