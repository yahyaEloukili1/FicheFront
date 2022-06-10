import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { PdiServiceService } from './pdi-service.service';
import { Observable,pipe, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  
  constructor(private injector: Injector,private router: Router,private pdiServcie:PdiServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req,"***********")
    if(req.url==`http://localhost:8088/login`){
      console.log(req,"88888888888888888888")
      return next.handle(req)
    }else{
      let pdiService = this.injector.get(PdiServiceService)
      console.log(req,"88888888888888888888")
      let tokenizedRequest = req.clone({
        setHeaders: {
          Authorization: pdiService.loadToken()
        }
      })
      return next.handle(tokenizedRequest).pipe(
        tap(
          succ=>{},
          err=>{
            if(err.status===403){
              pdiService.logout()
              this.router.navigateByUrl('/ficheInfo/login')
            }
          }
        )
      )
    }

  }
}
