import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Essence_1, Monnaie} from '../../../models/Models';
import {TarifService} from '../service/tarif.service';
import {EssenceService} from '../../essence/service/essence.service';
import {forkJoin} from 'rxjs';
import {NgClass} from '@angular/common';
import {_confirmation, _warning} from '../../../models/notification';

@Component({
  selector: 'app-tarif-creation',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  standalone : true ,
  templateUrl: './tarif-creation.component.html',
  styleUrl: './tarif-creation.component.css'
})
export class TarifCreationComponent implements  OnInit{

  constructor(protected service : TarifService  , protected se : EssenceService) {
  }

  protected form = new FormGroup({

    essence : new FormControl("" , Validators.required) ,
    diam_moy : new FormControl(0 , [Validators.required , Validators.min(2)]) ,
    long_moy : new FormControl(0 , [Validators.required , Validators.min(2)]) ,
    montant_unitaire : new FormControl(0 , [Validators.required , Validators.min(2)]) ,
    monnaie : new FormControl( 0 , Validators.required) ,
  });

  protected essences: Essence_1[] = [];
  protected monnaies : Monnaie[] = [] ;
  protected check : boolean = false ;
  ngOnInit(): void {
      this.getAll() ;
  }

  create() {
      this.service.create(this.form.value).subscribe(data=>{
          _confirmation("tarif enregistré avec succès!!!");
      },error => console.log(error));
  }


  getAll(){

  forkJoin({essences :this.se.getAllEssence() , monnaies : this.service.getAllMonnaie()}).subscribe({
        next : (result)=>{
          this.essences = result.essences  ;
          this.monnaies = result.monnaies ;
        } ,
        error : (error)=>{
          console.log(error);
          _warning("Veuillez saisir tous les éléments");
          ////

        }
      }
    )


  }

  resetView() {
      this.service.hide = "liste" ;
  }

  checkForm():boolean{
    return (

      ( this.form.controls.essence.invalid && this.form.controls.essence.dirty) ||
      ( this.form.controls.long_moy.invalid && this.form.controls.long_moy.dirty) ||
      ( this.form.controls.diam_moy.invalid && this.form.controls.diam_moy.dirty) ||
      ( this.form.controls.monnaie.invalid && this.form.controls.monnaie.dirty) ||
      ( this.form.controls.montant_unitaire.invalid && this.form.controls.montant_unitaire.dirty)
    );
  }
}
