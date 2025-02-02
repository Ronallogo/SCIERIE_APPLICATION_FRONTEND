import {Component, OnInit} from '@angular/core';
import {FournisseurCreationComponent} from "../../fournisseur/fournisseur-creation/fournisseur-creation.component";
import {FournisseurUpdateComponent} from "../../fournisseur/fournisseur-update/fournisseur-update.component";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RavService} from '../service/rav.service';
import {NgClass} from '@angular/common';
import {Ravitaillement} from '../../../models/Models';
import {RavitaillementUpdateComponent} from '../ravitaillement-update/ravitaillement-update.component';
import {RavitaillementCreationComponent} from '../ravitaillement-creation/ravitaillement-creation.component';
import {_deletion} from '../../../models/notification';
import {readUsedSize} from 'chart.js/helpers';

@Component({
  selector: 'app-ravitaillement-list',
  imports: [
    NgxPaginationModule,
    ReactiveFormsModule,
    NgClass,
    RavitaillementUpdateComponent,
    RavitaillementCreationComponent
  ],
  templateUrl: './ravitaillement-list.component.html',
  standalone: true,
  styleUrl: './ravitaillement-list.component.css'
})
export class RavitaillementListComponent implements OnInit {
  searchForm = new FormGroup({
    keyword : new FormControl("")
  });

  entete:  string[] = ["No" , "Fournisseur" , "Code" , "Date" , "Prix" ,"quantité de bois" ,  "Action"];
  ravs: Ravitaillement[] = [];
  currentPage: number = 0;



    constructor(protected service : RavService) {
    }


  ngOnInit(): void {
      this.getAllRav();
  }

  ajouter() {
    this.service.hide = "ajouter";
  }

  search() {
      console.log(this.searchForm.getRawValue().keyword)
      if(this.searchForm.getRawValue().keyword !=  ""){
        this.service.search(String(this.searchForm.value.keyword)).subscribe(data=>{
          this.ravs = data ;

        } , error=>{
          console.log(error);
        });
      }else{this.getAllRav();}


  }

  modifier(t: Ravitaillement) {
    this.service.hide = "modifier";
    this.service.setRav(t);
  }

  async delete(id_rav: number) {
    let response = await _deletion("Voulez vous supprimez ce ravitaillement!!!!") ;
    if(!response) return ;

    this.service.delete(id_rav).subscribe(data => {
      this.getAllRav();
    },error => {
        console.log(error);
    })
  }

  pageChanged($event: number) {
      this.currentPage = $event;
  }

  getAllRav(){
        this.service.getAll().subscribe(data=>{
            this.ravs = data ;
            console.log(data)
            localStorage.setItem("qtRav" , String(this.ravs.length))
        } , error => {
          console.log(error)
        })
  }
}
