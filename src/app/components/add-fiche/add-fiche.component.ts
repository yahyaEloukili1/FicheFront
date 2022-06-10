import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PdiServiceService } from 'src/app/pdi-service.service';

@Component({
  selector: 'app-add-fiche',
  templateUrl: './add-fiche.component.html',
  styleUrls: ['./add-fiche.component.css']
})
export class AddFicheComponent implements OnInit {
  editPhoto
  currentFiche
  selectedFiles
  progress
  currentFileUpload
  constructor(private pdiService: PdiServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  onEditPhoto(f){

    this.editPhoto = true
    this.currentFiche = f
    console.log("µµµµµµµµµµµµµµµµµµµµµµµµµµµµµµ*",this.currentFiche)
  }
  onSelectFile(event){
    this.selectedFiles = event.target.files;
  }
  upload(){
    this.progress = 0
    this.currentFileUpload = this.selectedFiles.item(0)
    console.log("µµµµµµµµµµµµµµµµµµµµµµµµµµµµµµ*",this.currentFiche.id)
    this.pdiService.uploadFicheImage(this.currentFileUpload,this.currentFiche.id).subscribe(event=>{
      if(event.type === HttpEventType.UploadProgress){
        this.progress = Math.round(100 * event.loaded /event.total)
      }else if(event instanceof HttpResponse){
        alert("Chargée avec succés")
      }
    },err=>{
      alert("probleme de chargement"+JSON.parse(err.error).message)
    })

  }
  onSaveFiche(f:NgForm){
    if(!f.value.nom || !f.value.prenom || !f.value.cin){
      alert('Merci de saisir les champs obligatoires !')
  }else{
    f.value.photo = "unknown.jpg"
    this.pdiService.addResource("fiches",f.value).subscribe(data=>{
     alert('Fiche de renseignement ajouté avec succées !')
   
    
      f.reset()
      },err=>{
        console.log(err)
      })
  }
}
  gotoList(){
    this.router.navigateByUrl('ficheInfo/fiches');
  }
}
