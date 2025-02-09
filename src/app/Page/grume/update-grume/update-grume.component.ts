import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Essence_2, Grume_2, Ravitaillement} from '../../../models/Models';
import {GrumeService} from '../service/grume.service';
import {EssenceService} from '../../essence/service/essence.service';
import {RavService} from '../../rav/service/rav.service';
import {_confirmation} from '../../../models/notification';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-update-grume',
    imports: [
        NgForOf,
        ReactiveFormsModule
    ],
  templateUrl: './update-grume.component.html',
  standalone: true,
  styleUrl: './update-grume.component.css'
})
export class UpdateGrumeComponent  implements OnInit{
  protected form = new  FormGroup({
    code_lots : new FormControl("" ,  [Validators.required]) ,
    longueur_moy : new FormControl(0 , [Validators.required]) ,
    diam_moy : new FormControl(0 , [Validators.required , Validators.min(2)]) ,
    poids_moy : new FormControl(0 , [Validators.required , Validators.min(2)]),
    quantite : new FormControl(0 , [Validators.required , Validators.min(2)]),

    qualite : new FormControl(0 , [Validators.required , Validators.min(2) , Validators.max(100)]),
    nom_essence : new FormControl("" , [Validators.required]),

  })
  listEssence:  Essence_2[] = [];
  listRav:  Ravitaillement[] = [];
  constructor(protected service :GrumeService  , private se : EssenceService , private sr : RavService) {

  }

  ngOnInit(): void {
    this.getData() ;
  }

  update() {
    this.service.update({
      code_lots : this.form.value.code_lots ,
      longueur_moy :  this.form.value.longueur_moy ,
      diam_moy :  this.form.value.diam_moy ,
      poids_moy :  this.form.value.poids_moy ,
      quantite : this.form.value.quantite ,
      qualite :  this.form.value.qualite ,
      nom_essence :  this.form.value.nom_essence
    }).subscribe(data=>{
      console.log(data);
      _confirmation("lots de grume modifié avec succès!!!!");
    } , error => {
      console.log(error);
    })

  }

  resetView() {
    this.service.hide  = "liste";
  }

  getData(){
    forkJoin({essences :this.se.getAllEssence() , ravs : this.sr.getAll() }).subscribe({
        next : (result)=>{
          this.listEssence = result.essences  ;
          console.log(this.listEssence)
          this.listRav = result.ravs ;
          console.log(this.listRav);
          this.init(this.service.getGrume());

        } ,
        error : (error)=>{ console.log(error);}
      }
    )
  }


  init(g : Grume_2){
    this.form.controls.diam_moy.setValue(g.diam_moy);
    this.form.controls.longueur_moy.setValue(g.longueur_moy);
    this.form.controls.nom_essence.setValue(g.nom_essence);
    this.form.controls.poids_moy.setValue(g.poids_moy);
    this.form.controls.qualite.setValue(g.qualite)
    this.form.controls.quantite.setValue(g.quantite);
    this.form.controls.code_lots.setValue(g.code_lots);

  }

}
