import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddFicheComponent } from './components/add-fiche/add-fiche.component';
import { EditFichesComponent } from './components/edit-fiches/edit-fiches.component';
import { FichesComponent } from './components/fiches/fiches.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: "ficheInfo/fiches",component: FichesComponent,canActivate: [AuthGuard]},
  {path: "ficheInfo/newFiche",component: AddFicheComponent,canActivate: [AuthGuard]},
  {path: "ficheInfo/edit-fiche/:id",component: EditFichesComponent,canActivate: [AuthGuard]},
  {path: "ficheInfo/login",component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
