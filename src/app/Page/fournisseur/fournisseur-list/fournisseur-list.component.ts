import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {FournisseurService} from '../service/fournisseur.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {Fournisseur} from '../../../models/Models';
import {FournisseurCreationComponent} from '../fournisseur-creation/fournisseur-creation.component';
import {FournisseurUpdateComponent} from '../fournisseur-update/fournisseur-update.component';

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
  })
  entete:  string[]=["No" , "Nom fournisseur" , "Adresse fournisseur" , "Email fournisseur" , "Fax fournisseur" , "Telephone" , "Taxe abbatage" , "Ville" , "Action"];
  currentPage: number = 0;
  fournisseurs: Fournisseur[] = [];

  constructor(protected service : FournisseurService) {
  }
  ngOnInit(): void {
  }

  ajouter() {

  }


  modifier(t: any) {

  }

  delete(id_fournisseur: any) {

  }

  search() {

  }

  pageChanged($event: number) {

  }
}
