import {Component, OnInit} from '@angular/core';
import {Location} from '../../../models/Models';
import {LocationService} from '../service/location.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FournisseurCreationComponent} from '../../fournisseur/fournisseur-creation/fournisseur-creation.component';
import {FournisseurUpdateComponent} from '../../fournisseur/fournisseur-update/fournisseur-update.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgClass} from '@angular/common';
import {_confirmation, _deletion, _warning} from '../../../models/notification';

@Component({
  selector: 'app-location-list',
  imports: [
    FormsModule,
    FournisseurCreationComponent,
    FournisseurUpdateComponent,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './location-list.component.html',
  standalone: true,
  styleUrl: './location-list.component.css'
})
export class LocationListComponent implements  OnInit{


  protected location : Location  = {id_pays  :  0 , nom_ville : "" , nom_pays  :"" , id_ville : 0 };

  protected headers : string[] = ["No" , "Nom du pays ", "Nom de la ville" , "Actions"]
  protected currentPage!: string | number;
  protected onUpdating : boolean  =  false ;
  protected view: boolean = false

  protected indexedLocation !: number

  protected  nom_pays : string = "" ;
  protected  nom_ville  : string = "" ;

  constructor(protected service : LocationService) {
  }
  ngOnInit(): void {
    this.getAll();

  }

  getAll(){
      this.service.getAll().subscribe( (data) => {
          this.service.listLocation = data ;

      } , error => {
        console.log(error);
      })
  }

  ajouter() {
      if(this.location.nom_pays.length < 5 || this.location.nom_ville.length < 5) {
        _warning("localisation semble invalide !!");
        this.setViews() ;
        return ;

      }
      this.service.create(this.location).subscribe(data=>{
        console.log(data);
        _confirmation("nouvelle localisation ajoutée") ;
        this.getAll() ;
        this.setViews() ;
      } , error => {
        console.log(error);
      })
  }
  listenUpdate(t : Location){
    this.onUpdating = !this.onUpdating;
    this.nom_pays = t.nom_pays ;
    this.nom_ville = t.nom_ville ;



  }
  indexLocationFunction(t:Location){
    this.indexedLocation = t.id_ville ;
    this.nom_pays = t.nom_pays ;
    this.nom_ville = t.nom_ville;
  }

  modifier(t: Location) {
    this.onUpdating = !this.onUpdating ;
    t.nom_pays = this.nom_pays ;
    t.nom_ville = this.nom_ville ;

    this.service.edit(t).subscribe(data=>{
        t.nom_pays = "";
        t.nom_ville = "";
        this.getAll() ;

    } , error => {
      console.log(error);
    })



  }

  async delete(id_ville: number) {
    let response = await _deletion("Voulez vous supprimez cette localisation!!!!");
    if (!response) return;
    this.service.delete(id_ville).subscribe(data=>{
        this.getAll() ;
    },error => {
      console.log(error);
    })
  }

  pageChanged($event: number) {
      this.currentPage = $event ;

  }

  setViews(){
      this.view = !this.view ;
  }
}
