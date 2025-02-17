import {Component, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {GrumeService} from '../service/grume.service';
import {getTodayDate, Grume_2, GrumeTraiter, Traitement} from '../../../models/Models';
import {FournisseurUpdateComponent} from '../../fournisseur/fournisseur-update/fournisseur-update.component';
import {CreationGrumeComponent} from '../creation-grume/creation-grume.component';
import {UpdateGrumeComponent} from '../update-grume/update-grume.component';
import {DetailGrumeComponent} from '../detail-grume/detail-grume.component';
import {_already, _confirmation, _deletion, _getTraitement} from '../../../models/notification';
import {TraitementService} from '../../traitement/service/traitement.service';



@Component({
  selector: 'app-list-grume',
  imports: [
    NgClass,
    ReactiveFormsModule,
    NgxPaginationModule,

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
  entete: string[] = ["No" , "code du lots" , "essence du bois" ,"date d'entrée"   , "quantité" , "etat du bois"  , "Actions"];
  currentPage!: string | number;
  grumes: Grume_2[] = [];
  grumeTraiter: GrumeTraiter = this.constructorGrumeTraier() ;
  traitements : Traitement[] = [];
  nametraitements : string[] =[];




  constructor(protected  service : GrumeService , protected service_t : TraitementService) {
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
          let qtBoisTraiter = 0

           this.grumes.forEach(x=>{
              qt += x.quantite ;
              if(x.traiter){
                qtBoisTraiter += 1  ;
              }



          })
          localStorage.setItem("qtGrume" , String(qt))
          localStorage.setItem("qtBoisTraiter" , String(qtBoisTraiter))

          console.log(data);
      },error => {
        console.log(error)
      });


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

 async delete(id_grume: any) {
      let response = await _deletion("Voulez-vous supprimer ce lot de grume??");
      if(!response) return;
      this.service.delete(id_grume).subscribe(data=>{
          console.log(data);
          this.getAll()
      },err=>{
        console.log(err);
      });
  }

  pageChanged($event: number) {
    this.currentPage = $event ;
  }

  caracteristique(t : Grume_2) {
      this.service.hide = "caracteristiques"
      this.service.setGrume(t);
  }

  async traiter(t: Grume_2) {
    if (t.traiter) {
      _already("Ce lot de grume est déjà traité!!!");
      return;
    } else {
      this.service_t.getAllTraitementByEssence(t.nom_essence).subscribe(data => {
        this.traitements = data;
        this.nametraitements = this.traitements.map(x => x.nom_traitement);
      }, error => {
        console.log(error);
      })
      let name = await _getTraitement(this.nametraitements);
      console.log(name);
     this.initGrumeTraiter(t , name);
      if(name){
        this.service.grumeTraiter(this.grumeTraiter).subscribe(data=>{
          _confirmation("Ce lot grumes est maintenant enregistré comme étant traiter");
          t.traiter = true;
        } , error => {
          console.log(error);
        })
      }




    }

  }

  initGrumeTraiter(t : Grume_2 , nameTraitement : string){
      this.grumeTraiter.code_grume =  t.code_lots  ;
      this.grumeTraiter.bois_associe = t.nom_essence ;
      this.grumeTraiter.nom_traitement = nameTraitement ;
      this.grumeTraiter.date_traitement  = getTodayDate();


  }

  constructorGrumeTraier() {
      let variable : GrumeTraiter = {bois_associe : "" , code_grume : "" ,
        nom_traitement : "" , date_traitement : "" , id_traitement : 0 , id_operation:0
      }
      return variable ;


  }
}


