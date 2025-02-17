import {Component, OnInit} from '@angular/core';
import {Traitement} from '../../../models/Models';
import {TraitementService} from '../service/traitement.service';
import {CreationGrumeComponent} from '../../grume/creation-grume/creation-grume.component';
import {DetailGrumeComponent} from '../../grume/detail-grume/detail-grume.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {UpdateGrumeComponent} from '../../grume/update-grume/update-grume.component';
import {NgClass} from '@angular/common';
import {TraitementUpdateComponent} from '../traitement-update/traitement-update.component';
import {TraitementCreationComponent} from '../traitement-creation/traitement-creation.component';
import {_deletion} from '../../../models/notification';

@Component({
  selector: 'app-traitement-list',
  imports: [

    DetailGrumeComponent,
    NgxPaginationModule,
    ReactiveFormsModule,

    NgClass,
    TraitementUpdateComponent,
    TraitementCreationComponent
  ],
  templateUrl: './traitement-list.component.html',
  standalone: true,
  styleUrl: './traitement-list.component.css'
})
export class TraitementListComponent implements OnInit{


    protected traitements  : Traitement[] = [];
    protected entete : string[] =["No" ,"Nom traitement" , "Bois a traité"  ,"Reduction de la longueur" , "Reduction du diametre" , "Reduction du poids" , "Reduction du cubage" , "Action"];
    currentPage:  number = 0 ;
    searchForm =  new FormGroup({keyword : new FormControl()});
    constructor(protected service : TraitementService){}


    ngOnInit(): void {
        this.getAll()
    }

    pageChanged($event: number) {
        this.currentPage  = $event ;
    }

    DataTransactionFunction(t: Traitement) {
        this.service.hide = "modifier";
        this.service.setTraitement(t);


    }

  async  delete(id_traitement: number) {
        let resp = await  _deletion("Voulez vous supprimer ce traitement???");
        if(!resp) return ;
        this.service.delete(id_traitement).subscribe(data=>{
            this.getAll();
        },err=>{
            console.log(err);
        })
    }

  search() {
    if(this.searchForm.value.keyword!== ""){
      this.service.search(String(this.searchForm.value.keyword)).subscribe(data=>{
        this.traitements  = data ;
        console.log(data);
      } , error=>{
        console.log(error)
      })
    }else{
      this.getAll() ;
    }
  }

  ajouter() {
        this.service.hide = "ajouter";
    }
    getAll(){
      this.service.getAllTraitement().subscribe(data=>{
          this.traitements = data ;
          console.log(this.traitements);
          localStorage.setItem("qtTraitement" , data.length);
      },error => {
        console.log(error);
      })
    }
}
