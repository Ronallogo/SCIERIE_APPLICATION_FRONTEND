import {Component, OnInit} from '@angular/core';
import {Tarif} from '../../../models/Models';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {RavitaillementCreationComponent} from '../../rav/ravitaillement-creation/ravitaillement-creation.component';
import {RavitaillementUpdateComponent} from '../../rav/ravitaillement-update/ravitaillement-update.component';
import {NgClass} from '@angular/common';
import {TarifService} from '../service/tarif.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-tarif-list',
  imports: [
    FormsModule,
    NgxPaginationModule,
    RavitaillementCreationComponent,
    RavitaillementUpdateComponent,
    ReactiveFormsModule,
    NgClass
  ],
  standalone : true ,
  templateUrl: './tarif-list.component.html',
  styleUrl: './tarif-list.component.css'
})
export class TarifListComponent implements  OnInit{

  protected tarifs : Tarif[] = [];
  protected headers : string[] =["No" , "Code tarif" , "Nom essence" , "Diamtre" , "Longueur" ,"Montant unitaire" , "Monnaie" , "Actions"];
  protected searchForm = new FormGroup({
    keyword : new FormControl()
  });
  protected currentPage!: string | number;

  constructor(protected service : TarifService) {}




  ngOnInit(): void {
      this.getAll() ;
  }



  getAll(){
    forkJoin({ tarifs :this.service.getAll() ,  monnaie : this.service.monnaieWithMostTarif() }).subscribe({
        next : (result)=>{
            localStorage.setItem("mostTarifs",JSON.stringify(result.monnaie))
            this.tarifs = result.tarifs
          console.log(this.tarifs);
        } ,
        error : (error)=>{ console.log(error);}
      }
    )
  }

  ajouter() {

  }

  search() {

  }

  modifier(t: Tarif) {

  }

  delete(code_rav: any) {

  }

  pageChanged($event: number) {
      this.currentPage = $event ;
  }
}
