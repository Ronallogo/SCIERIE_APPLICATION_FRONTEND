import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {FournisseurService} from '../service/fournisseur.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {Essence_2, Fournisseur} from '../../../models/Models';
import {FournisseurCreationComponent} from '../fournisseur-creation/fournisseur-creation.component';
import {FournisseurUpdateComponent} from '../fournisseur-update/fournisseur-update.component';
import {PortService} from '../../port_ville_pays/port-service/port.service';
import {forkJoin} from 'rxjs';
import {_deletion, _error} from '../../../models/notification';

@Component({
  selector: 'app-fournisseur-list',
  imports: [
    NgClass,
    ReactiveFormsModule,
    NgxPaginationModule,
    FournisseurCreationComponent,
    FournisseurUpdateComponent
  ],
  templateUrl: './fournisseur-list.component.html',
  standalone: true,
  styleUrl: './fournisseur-list.component.css'
})
export class FournisseurListComponent implements OnInit {
  public searchForm  = new FormGroup({
    keyword : new FormControl()
  });

  entete:  string[]=["No" , "Nom fournisseur" , "Adresse fournisseur" , "Email fournisseur" , "Fax fournisseur" , "Telephone" , "Taxe abbatage" , "Ville" , "Action"];
  currentPage: number = 0;
  fournisseurs: Fournisseur[] = [];

  constructor(protected service : FournisseurService) {}


  ngOnInit(): void {
      this.getAllFournisseur();
    setInterval(()=> {if(this.service.createFournisseur){
      this.getAllFournisseur() ;this.service.createFournisseur = false; }} , 5000)
  }

  ajouter() {
    this.service.hide = "ajouter";
  }


  modifier(essence : Fournisseur) {
    this.service.hide = "modifier";
    this.service.setFournisseur(essence);

  }

  async delete(id_fournisseur: any) {
    let response: boolean = await _deletion("Voulez-vous supprimer ce fournisseur?");

    if (!response) return;
    this.service.delete(id_fournisseur).subscribe(data => {
      this.getAllFournisseur();
    } , error => {
        _error(null);
        console.log(error);
    })
  }

  search(){
    console.log(this.searchForm.getRawValue().keyword)
    if(this.searchForm.getRawValue().keyword !=  ""){
      this.service.searching(String(this.searchForm.getRawValue().keyword)).subscribe(data =>{
        console.log(data);
        this.fournisseurs = data ;

      } , error => {
        console.log(error)
      })
    }
    else{
      this.getAllFournisseur();
    }
  }


  pageChanged($event: number) {
    this.currentPage = $event ;
  }
  getAllFournisseur(){

      forkJoin({
          fournisseurs : this.service.getAllFournisseur()  ,
          tax_moy : this.service.getTaxe()
        }).subscribe(result=>{
          this.fournisseurs = result.fournisseurs ;
          localStorage.setItem("tax_moy" , result.tax_moy);
      } , error => { console.log(error)})


  }






}
