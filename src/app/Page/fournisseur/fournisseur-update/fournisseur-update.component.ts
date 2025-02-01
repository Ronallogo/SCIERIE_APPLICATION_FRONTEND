import {Component, OnInit} from '@angular/core';
import {Fournisseur, Ville} from '../../../models/Models';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FournisseurService} from '../service/fournisseur.service';
import {_confirmation, _error} from '../../../models/notification';
import {NgForOf} from '@angular/common';
import {PortService} from '../../port_ville_pays/port-service/port.service';

@Component({
  selector: 'app-fournisseur-update',
  imports: [
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './fournisseur-update.component.html',
  standalone: true,
  styleUrl: './fournisseur-update.component.css'
})
export class FournisseurUpdateComponent implements OnInit{
  protected list : Ville[] = [];
  protected fournisseur! : Fournisseur;

  protected form = new FormGroup({
    id_fournisseur : new FormControl(),
    nom_fournisseur: new FormControl('', [Validators.required , Validators.minLength(5)]),
    adresse_fournisseur: new FormControl('', [Validators.required , Validators.minLength(6)]),
    email_fournisseur: new FormControl('email@gmail.com', [Validators.required  ,   Validators.email ] ),
    fax_fournisseur: new FormControl( "exemple : 78954156", [Validators.required ,Validators.pattern(/^\+?[0-9]{8,15}$/)]),
    telephone_fournisseur: new FormControl( "exemple : 78954156" , [Validators.required ,Validators.pattern(/^\+?[0-9]{8,15}$/)]),
    taxe_abbatage : new FormControl("" , [ Validators.required , Validators.min(0.1) , Validators.max(100) ] ),
    nom_ville : new FormControl("choisir une ville")
  });


  constructor(private service: FournisseurService , protected service_ville : PortService) {}

  ngOnInit(): void {
    this.init() ;
    this.getAllVille() ;
  }


  modifier() {
    this.service.edit({
      id_fournisseur : this.fournisseur.id_fournisseur , telephone_fournisseur : String(this.form.value.telephone_fournisseur),
      nom_ville : String(this.form.value.nom_ville), nom_fournisseur : String(this.form.value.nom_fournisseur),
      fax_fournisseur : String(this.form.value.fax_fournisseur), adresse_fournisseur : String(this.form.value.adresse_fournisseur),
      taxe_abbatage : Number(this.form.value.taxe_abbatage),
      email_fournisseur : String(this.form.value.email_fournisseur)
    }).subscribe(data => {
      console.log(data)
      _confirmation("Fournisseur modifier avec succès!!") ;
      this.service.createFournisseur = true ;
    }, error => {
      console.log(error)
      _error(null)
    })
  }




  init(){

    this.fournisseur =  this.service.getFournisseur() ;
    console.log({...this.fournisseur})
    this.form.controls.id_fournisseur.setValue(String(this.fournisseur.id_fournisseur)) ;
    this.form.controls.nom_fournisseur.setValue(String(this.fournisseur.nom_fournisseur)) ;
    this.form.controls.adresse_fournisseur.setValue(String(this.fournisseur. adresse_fournisseur)) ;
    this.form.controls.email_fournisseur.setValue(String(this.fournisseur.email_fournisseur)) ;
    this.form.controls.fax_fournisseur.setValue(String(this.fournisseur.fax_fournisseur)) ;
    this.form.controls.telephone_fournisseur.setValue(String(this.fournisseur.telephone_fournisseur)) ;
    this.form.controls.taxe_abbatage.setValue(String(this.fournisseur.taxe_abbatage)) ;
    this.form.controls.nom_ville.setValue(String(this.fournisseur.nom_ville)) ;

  }

  resetView() {
    this.service.hide = "liste"

  }

  getAllVille(){
    this.service_ville.getAllVille().subscribe(data=>{
      this.list  = data ;

    } ,error => {
      console.log(error);
    })
  }
}
