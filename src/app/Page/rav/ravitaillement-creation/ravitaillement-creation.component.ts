import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {list} from 'postcss';
import {Fournisseur} from '../../../models/Models';
import {FournisseurService} from '../../fournisseur/service/fournisseur.service';
import {_confirmation} from '../../../models/notification';
import {RavService} from '../service/rav.service';

@Component({
  selector: 'app-ravitaillement-creation',
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './ravitaillement-creation.component.html',
  standalone: true,
  styleUrl: './ravitaillement-creation.component.css'
})
export class RavitaillementCreationComponent  implements OnInit{
  form   = new  FormGroup({
      qtBois : new FormControl("" , [Validators.required , Validators.pattern('^[0-9]*\\.?[0-9]+$')  ,Validators.min(0)]) ,
      nom_fournisseur : new FormControl("" , [Validators.required]),
      date_rav : new FormControl("" , [Validators.required]) ,
      prix_rav : new FormControl("" , [Validators.required  , Validators.pattern('^[0-9]*\\.?[0-9]+$')  ,Validators.min(0)]),
  });

  protected listFournisseur : Fournisseur[] = [] ;

  constructor(private  serviceFournisseur : FournisseurService , private service  : RavService) {}


  ngOnInit(): void {
    this.getAllFournisseur() ;
  }

  create() {
    this.service.create({
        qtBois : this.form.value.qtBois ,
        id_fournisseur : this.form.value.nom_fournisseur ,
        date_rav : this.form.value.date_rav ,
        prix_rav : this.form.value.prix_rav
    }).subscribe(data=>{
        console.log(data);
        _confirmation("Ravitaillement enregistré avec succès!!!")
    } , error=>{
        console.log(error)
    })
  }

  resetView() {
      this.service.hide = "liste" ;
  }

  getAllFournisseur(){
      this.serviceFournisseur.getAllFournisseur().subscribe(result=>{
          this.listFournisseur = result ;
      } , error => {
          console.log(error)
      });
  }



}
