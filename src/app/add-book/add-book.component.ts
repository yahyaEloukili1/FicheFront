import { Component, OnInit } from '@angular/core';
import { PdiServiceService } from '../pdi-service.service';
import { Chart,registerables } from "../../../node_modules/chart.js";
import { timeout } from 'rxjs';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private pdiService: PdiServiceService) { }

  ngOnInit(): void {
    

  
  }
  addResource(){
 

  }

}