import {Component, OnInit} from '@angular/core';
import {Location} from '../../../models/Models';
import {LocationService} from '../service/location.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FournisseurCreationComponent} from '../../fournisseur/fournisseur-creation/fournisseur-creation.component';
import {FournisseurUpdateComponent} from '../../fournisseur/fournisseur-update/fournisseur-update.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgClass} from '@angular/common';
import {_confirmation} from '../../../models/notification';

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

  protected  listLocation :  Location[] = [] ;

  protected headers : string[] = ["No" , "Nom du pays ", "Nom de la ville" , "Actions"]
  protected currentPage!: string | number;
  protected onUpdating : boolean  =  false ;

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
          this.listLocation = data ;
      } , error => {
        console.log(error);
      })
  }

  ajouter() {

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
        _confirmation("Localisation modifiée !!");
        this.getAll() ;

    } , error => {
      console.log(error);
    })



  }

  delete(id_ville: number) {

  }

  pageChanged($event: number) {
      this.currentPage = $event ;

  }
}
