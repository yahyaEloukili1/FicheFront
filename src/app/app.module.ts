import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FichesComponent } from './components/fiches/fiches.component';
import { AddFicheComponent } from './components/add-fiche/add-fiche.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { EditFichesComponent } from './components/edit-fiches/edit-fiches.component';
@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    FichesComponent,
    AddFicheComponent,
    LoginComponent,
    EditFichesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,{
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
