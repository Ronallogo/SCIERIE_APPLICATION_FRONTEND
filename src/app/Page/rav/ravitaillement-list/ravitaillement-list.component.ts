import {Component, OnInit} from '@angular/core';
import {FournisseurCreationComponent} from "../../fournisseur/fournisseur-creation/fournisseur-creation.component";
import {FournisseurUpdateComponent} from "../../fournisseur/fournisseur-update/fournisseur-update.component";
import {NgxPaginationModule} from "ngx-pagination";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {RavService} from '../service/rav.service';
import {NgClass} from '@angular/common';
import {Ravitaillement} from '../../../models/Models';

@Component({
  selector: 'app-ravitaillement-list',
  imports: [
    FournisseurCreationComponent,
    FournisseurUpdateComponent,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './ravitaillement-list.component.html',
  standalone: true,
  styleUrl: './ravitaillement-list.component.css'
})
export class RavitaillementListComponent implements OnInit {
  searchForm: FormGroup;
  entete:  string[] = ["No" , "Fournisseur" , "Code" , "Date" , "Prix" , "Action"];
  ravs: Ravitaillement[] = [];
  currentPage: number = 0;



    constructor(protected service : RavService) {
    }


  ngOnInit(): void {
  }

  ajouter() {

  }

  search() {

  }

  modifier(t: Ravitaillement) {
    
  }

  delete(id_rav: number) {
    
  }

  pageChanged($event: number) {
    
  }
}
