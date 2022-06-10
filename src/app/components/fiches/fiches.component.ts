import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fiche } from 'src/app/models/Fiche';
import { PdiServiceService } from 'src/app/pdi-service.service';

@Component({
  selector: 'app-fiches',
  templateUrl: './fiches.component.html',
  styleUrls: ['./fiches.component.css']
})
export class FichesComponent implements OnInit {
  size:number = 4;
  currentPage:number = 0;
  totalPages: number;
  fiches :Fiche[]
  pages : Array<number>;
  currentKeyword: string = "";
  constructor(private pdiService:PdiServiceService, private router: Router) { }

  ngOnInit(): void {
this.onGetFiches()
  }

  ajouter(){
    this.router.navigateByUrl('ficheInfo/newFiche');
  }
  
  onGetFiches(){
    this.pdiService.getResource("fiches",this.currentPage,this.size).subscribe(data=>{
     this.fiches = data;
    this.totalPages = data['page'].totalPages
    this.pages = new Array<number>(this.totalPages);
    },err=>{
      console.log(err)
    })



  }
  onPageFiche(i:number){
    this.currentPage = i;
   this.chercherFiches()
  }
  onChercher(form :any){
      this.currentPage = 0;
      this.currentKeyword = form.keyword;
      this.chercherFiches()
  }

  chercherFiches(){
  
    this.pdiService.getResourceByKeyword("fiches",this.currentPage,this.size,this.currentKeyword,"Fiche").subscribe(data=>{
      this.fiches = data;
     
     this.totalPages = data['page'].totalPages
     this.pages = new Array<number>(this.totalPages);
     },err=>{
       console.log(err) 
     })

  }
  onEditFiche(p:Fiche){
    console.log(p)
      let url = p['_links'].self.href;
      this.router.navigateByUrl("ficheInfo/edit-fiche/"+btoa(url))
  }
  download(){
    this.pdiService.downloadAll("/report/pdf").subscribe(data=>{
        alert('Projets éxportés avec succès')
      
    })
  }
  onDeleteFiche(url:string){
    if(confirm('Etes vous sur de vouloir supprimer cette fiche ?')){
    this.pdiService.deleteResource('fiches',url).subscribe(data=>{
      this.chercherFiches();
      this.onGetFiches()
    },err=>{
      console.log(err)
    })
    }
     
   
  }  
}
