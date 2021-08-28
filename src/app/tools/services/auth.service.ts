import {Injectable} from '@angular/core';
import {ApisService} from './apis.service';
import {OAuthService} from 'angular-oauth2-oidc'
import { HttpHeaders } from '@angular/common/http';
import { Observable ,from } from 'rxjs';
@Injectable({providedIn: 'root'})
export class AuthService {

    url:any;

    constructor(private apis : ApisService , private oauth:OAuthService) {}

   login(authObj){
      return from ( this.oauth.fetchTokenUsingPasswordFlow(authObj.username,authObj.password,
        new HttpHeaders({
            Authorization: `Basic Y2xpZW50OkR4Nmc1TXd5JHoyaG5AQGhTdWRFRVImUVJoeUY2OTBr`
        })
        ).catch((e) =>{
             throw new Error(e)
        })) as Observable<any> ;
   }
}
