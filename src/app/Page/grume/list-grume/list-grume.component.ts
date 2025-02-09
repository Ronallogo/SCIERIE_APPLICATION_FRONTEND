import {Component, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {GrumeService} from '../service/grume.service';
import {Grume_2} from '../../../models/Models';
import {FournisseurUpdateComponent} from '../../fournisseur/fournisseur-update/fournisseur-update.component';
import {CreationGrumeComponent} from '../creation-grume/creation-grume.component';
import {UpdateGrumeComponent} from '../update-grume/update-grume.component';
import {DetailGrumeComponent} from '../detail-grume/detail-grume.component';


@Component({
  selector: 'app-list-grume',
  imports: [
    NgClass,
    ReactiveFormsModule,
    NgxPaginationModule,
    FournisseurUpdateComponent,
    CreationGrumeComponent,
    UpdateGrumeComponent,
    DetailGrumeComponent
  ],
  templateUrl: './list-grume.component.html',
  standalone: true,
  styleUrl: './list-grume.component.css'
})
export class ListGrumeComponent implements  OnInit{


  public searchForm  = new FormGroup({
    keyword : new FormControl()
  });
  entete: string[] = ["No" , "code du lots" , "essence du bois" ,"date d'entrée"   , "quantité"  , "Actions"];
  currentPage!: string | number;
  grumes: Grume_2[] = [];



  constructor(protected  service : GrumeService) {
  }

  ngOnInit(): void {
      this.getAll();
  }

  ajouter() {
    this.service.hide = "ajouter"
  }
  getAll(){
      this.service.getAll().subscribe(data=>{
          this.grumes = data ;
          let qt = 0 ;
          let qtMoy = 0 ;
           this.grumes.forEach(x=>{
              qt += x.quantite ;


          })
          localStorage.setItem("qtGrume" , String(qt))
          localStorage.setItem("qtGrumeMoy" , String(qt/this.grumes.length))
          console.log(data);
      },error => {
        console.log(error)
      })
  }

  search() {
      if(this.searchForm.value.keyword!== ""){
            this.service.search(String(this.searchForm.value.keyword)).subscribe(data=>{
                this.grumes  = data ;
                console.log(data);
            } , error=>{
                console.log(error)
            })
      }else{
          this.getAll() ;
      }
  }

  DataTransactionFunction(t: any) {
      this.service.setGrume(t);
      this.service.hide = "modifier"

  }

  delete(id_grume: any) {

  }

  pageChanged($event: number) {
    this.currentPage = $event ;
  }

  caracteristique(t : Grume_2) {
      this.service.hide = "caracteristiques"
      this.service.setGrume(t);
  }
}
