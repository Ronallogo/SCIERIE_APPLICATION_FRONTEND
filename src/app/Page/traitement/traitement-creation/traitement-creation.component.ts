import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TraitementService} from '../service/traitement.service';
import {EssenceService} from '../../essence/service/essence.service';
import {Essence_2, formulaireTraitement} from '../../../models/Models';

@Component({
  selector: 'app-traitement-creation',
  imports: [
    NgForOf,
    ReactiveFormsModule,
    NgClass
  ],
  standalone : true ,
  templateUrl: './traitement-creation.component.html',
  styleUrl: './traitement-creation.component.css'
})
export class TraitementCreationComponent implements OnInit{
  protected  form = formulaireTraitement ;
  listEssence:  Essence_2[] = [];


  constructor(private service : TraitementService , private service_e : EssenceService) {
  }
  ngOnInit(): void {
      this.getData() ;

  }


  create() {

  }

  getData(){
      this.service_e.getAllEssence().subscribe(data=>{
          this.listEssence = data ;
          console.log(this.listEssence);
      },error => {
          console.log(error);
      })
  }

  resetView() {
      this.service.hide = "liste";
  }

  checkForm():boolean{
      return (

         ( this.form.controls.nom_traitement.invalid && this.form.controls.nom_traitement.dirty) ||
         ( this.form.controls.pourcent_reduction_diam.invalid && this.form.controls.pourcent_reduction_diam.dirty) ||
         ( this.form.controls.pourcent_reduction_long.invalid && this.form.controls.pourcent_reduction_long.dirty) ||
         ( this.form.controls.pourcent_reduction_poids.invalid && this.form.controls.pourcent_reduction_poids.dirty) ||
         ( this.form.controls.pourcent_reduction_cubage.invalid && this.form.controls.pourcent_reduction_cubage.dirty)
      );
  }
}
