import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EssenceService} from '../../essence/service/essence.service';
import {GrumeService} from '../service/grume.service';
import {NgForOf} from '@angular/common';
import {Essence_2, Ravitaillement} from '../../../models/Models';
import {forkJoin} from 'rxjs';
import {RavService} from '../../rav/service/rav.service';
import {_confirmation, _warning} from '../../../models/notification';

@Component({
  selector: 'app-creation-grume',
  imports: [
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './creation-grume.component.html',
  standalone: true,
  styleUrl: './creation-grume.component.css'
})
export class CreationGrumeComponent implements OnInit {
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

  create() {
      this.service.create({
        code_lots : this.form.value.code_lots ,
        longueur_moy :  this.form.value.longueur_moy ,
        diam_moy :  this.form.value.diam_moy ,
        poids_moy :  this.form.value.poids_moy ,
        quantite : this.form.value.quantite ,

        qualite :  this.form.value.qualite ,
        nom_essence :  this.form.value.nom_essence
      }).subscribe(data=>{
          console.log(data);
          _confirmation("lots de grume enregistré avec succès!!!!");
      } , error => {
          if(error.error == "low capacity")  _warning("Veuillez changer la quantité de bois du ravitaillement!!!")
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
          } ,
          error : (error)=>{ console.log(error);}
        }
      )
  }
}
