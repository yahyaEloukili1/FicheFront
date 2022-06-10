import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PdiServiceService } from './pdi-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private pdi: PdiServiceService,private router: Router){}
  canActivate(){
    if(this.pdi.loggedIn()){
      return true
    }
    else{
      this.router.navigateByUrl('ficheInfo/login')
      return false
    }
  }
}
