import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RavService} from '../service/rav.service';
import {Fournisseur, Ravitaillement} from '../../../models/Models';
import {FournisseurService} from '../../fournisseur/service/fournisseur.service';
import {_confirmation} from '../../../models/notification';

@Component({
  selector: 'app-ravitaillement-update',
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './ravitaillement-update.component.html',
  standalone: true,
  styleUrl: './ravitaillement-update.component.css'
})
export class RavitaillementUpdateComponent implements OnInit{

  form  = new FormGroup({
    qtBois : new FormControl(0 , [Validators.required , Validators.pattern('^[0-9]*\\.?[0-9]+$')  ,Validators.min(0)]) ,
    nom_fournisseur : new FormControl("" , [Validators.required]),
    date_rav : new FormControl("" , [Validators.required]) ,
    prix_rav : new FormControl(0 , [Validators.required  , Validators.pattern('^[0-9]*\\.?[0-9]+$')  ,Validators.min(0)]),
  });


  protected rav! : Ravitaillement;
  listFournisseur:  Fournisseur[] =[];

  constructor(private service : RavService , private serviceFournisseur : FournisseurService ) {
  }
  ngOnInit(): void {

    this.init();
    this.service.update = true ;
    this.serviceFournisseur.getAllFournisseur().subscribe(data=>{
      this.listFournisseur = data;
      console.log(this.listFournisseur);
    } , error => {
      console.log(error) ;
    })

  }

  modifier() {
      this.service.edit({
        id_rav : this.rav.id_rav  ,
        id_fournisseur : Number(this.rav.id_fournisseur ) ,
        code_rav  : this.rav.code_rav ,
        date_rav : this.form.value.date_rav  ,
        prix_rav :this.form.value.prix_rav ,
        qtBois : this.form.value.qtBois  ,

      }).subscribe(data=>{
        this.service.update = true ;
        console.log(data);
        _confirmation('Ravitaillement modifié avec succès!!!!');
      } ,error => {
          console.log(error);
      })

  }

  resetView() {
      this.service.hide = "liste";
  }

  init(){
      this.rav = this.service.getRav() ;
      console.log(this.rav)


      this.form.controls.prix_rav.setValue(Number(this.rav.prix_rav))  ;
      this.form.controls.date_rav.setValue(String(this.rav.date_rav))  ;
      this.form.controls.qtBois.setValue(Number(this.rav.qtBois))  ;
      this.form.controls.nom_fournisseur.setValue( String(this.rav.nom_fournisseur))  ;


  }
}
