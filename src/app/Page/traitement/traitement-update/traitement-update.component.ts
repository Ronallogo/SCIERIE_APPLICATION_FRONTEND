import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgForOf} from "@angular/common";
import {Essence_2, formulaireTraitement, Traitement} from '../../../models/Models';
import {TraitementService} from '../service/traitement.service';
import {EssenceService} from '../../essence/service/essence.service';
import {_confirmation} from '../../../models/notification';


@Component({
  selector: 'app-traitement-update',
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './traitement-update.component.html',
  standalone: true,
  styleUrl: './traitement-update.component.css'
})
export class TraitementUpdateComponent implements OnInit{
  protected  form = formulaireTraitement ;
  protected traitement!: Traitement ;
  protected listEssence : Essence_2[] = [];


  constructor(private service : TraitementService , private  service_essence : EssenceService) {
  }

  ngOnInit(): void{
      this.init();

  }


  modifier(){
      console.log("je suis dans la fonction");
      let id_traitement = this.traitement.id_traitement ;
      this.service.update({id_traitement , ...this.form.value}).subscribe(data=>{
          _confirmation('Modification effectuée avec succès!!!');
          console.log(data);
      } , err=>{
          console.log(err);
      })
  }


  init(){
    this.getEssence() ;
    this.traitement = this.service.getTraitement()
    this.form.controls.nom_traitement.setValue(this.traitement.nom_traitement);
    this.form.controls.bois_a_traiter.setValue(this.traitement.bois_a_traiter);
    this.form.controls.description.setValue(this.traitement.description);
    this.form.controls.pourcent_reduction_cubage.setValue(String(this.traitement.pourcent_reduction_cubage));
    this.form.controls.pourcent_reduction_diam.setValue(String(this.traitement.pourcent_reduction_diam));
    this.form.controls.pourcent_reduction_long.setValue(String(this.traitement.pourcent_reduction_long));
    this.form.controls.pourcent_reduction_poids.setValue(String(this.traitement.pourcent_reduction_poids));

  }

  getEssence(){
      this.service_essence.getAllEssence().subscribe(data=>{
          this.listEssence = data ;
      },error => {
          console.log(error);
      });
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

  resetView() {
      this.service.hide = "liste";
  }
}
