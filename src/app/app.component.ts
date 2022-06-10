import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PdiServiceService } from './pdi-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token
  constructor(public pdiService: PdiServiceService,private router: Router){
    this.met()
  }
  met(){
   this.token = this.pdiService.loadToken()
   console.log(this.token,"ksksksksksk")
  }
  logout(){
    this.pdiService.logout()
    this.router.navigateByUrl('ficheInfo/login')
  }
}
