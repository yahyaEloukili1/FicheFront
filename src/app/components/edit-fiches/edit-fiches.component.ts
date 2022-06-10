import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fiche } from 'src/app/models/Fiche';
import { PdiServiceService } from 'src/app/pdi-service.service';

@Component({
  selector: 'app-edit-fiches',
  templateUrl: './edit-fiches.component.html',
  styleUrls: ['./edit-fiches.component.css']
})
export class EditFichesComponent implements OnInit {
  currentFiche: Fiche
  editPhoto =true
  currentFiche1
  selectedFiles
  progress
  currentFileUpload
  url: string
    constructor(private router:Router,private activatedRoute: ActivatedRoute,public pdiService:PdiServiceService) { }
  
    ngOnInit(): void {
       this.url = atob(this.activatedRoute.snapshot.params['id'])
      
      this.pdiService.getOneResource(this.url).subscribe(data=>{
        this.currentFiche1 = data;
        console.log(this.currentFiche)
      },err=>{
        console.log(err)
      })
      console.log(this.url);
    }
    onUpdateFiche(value: any){
      console.log(value,"aaaaaaaaaaaaaa")
      this.pdiService.updateResource(this.url,value).subscribe(data=>{
        alert("mise a jour effectué avec succés")
      },err=>{
        console.log(err,"******")
      })
    }
    gotoList(){
      this.router.navigateByUrl('ficheInfo/fiches');
    }
    onEditPhoto(f){

      this.editPhoto = true
      this.currentFiche1 = f
      console.log("µµµµµµµµµµµµµµµµµµµµµµµµµµµµµµ*",this.currentFiche)
    }
    onSelectFile(event){
      this.selectedFiles = event.target.files;
      console.log(this.selectedFiles,"lllllllllllllllllllllllllllllllllllll")
      console.log( this.selectedFiles.item(0),"lllllllllllllllllllllllllllllllllllll")
    }
    upload(){
      this.progress = 0
      this.currentFileUpload = this.selectedFiles.item(0)
     
      console.log(this.currentFiche1,"+++++++++++++++++++++++++++++===")
      this.pdiService.uploadFicheImage(this.currentFileUpload,this.currentFiche1.id).subscribe(event=>{
        console.log(this.currentFileUpload,"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
        if(event.type === HttpEventType.UploadProgress){
          this.progress = Math.round(100 * event.loaded /event.total)
        }else if(event instanceof HttpResponse){
          alert("Chargée avec succés")
        }
      },err=>{
        alert("probleme de chargement"+JSON.parse(err.error).message)
      })
  
    }
}
