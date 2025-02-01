import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FournisseurService} from '../service/fournisseur.service';
import {NgForOf} from '@angular/common';
import {Fournisseur, Ville} from '../../../models/Models';
import {PortService} from '../../port_ville_pays/port-service/port.service';
import {_confirmation} from '../../../models/notification';

@Component({
  selector: 'app-fournisseur-creation',
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './fournisseur-creation.component.html',
  standalone: true,
  styleUrl: './fournisseur-creation.component.css'
})
export class FournisseurCreationComponent implements OnInit{

  protected list : Ville[] = [];

  protected form = new FormGroup({
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
      this.getAllVille() ;
  }



  create(){
      console.log({...this.form.getRawValue()})
      this.service.create(
        {
          id_fournisseur : null , telephone_fournisseur : String(this.form.value.telephone_fournisseur),
          nom_ville : String(this.form.value.nom_ville), nom_fournisseur : String(this.form.value.nom_fournisseur),
          fax_fournisseur : String(this.form.value.fax_fournisseur), adresse_fournisseur : String(this.form.value.adresse_fournisseur),
          taxe_abbatage : Number(this.form.value.taxe_abbatage),
          email_fournisseur : String(this.form.value.email_fournisseur)
        }
      ).subscribe(data=>{
          _confirmation("fournisseur enregistré avec succès!!!");
          console.log(data);
        this.service.createFournisseur= true ;
      } , err => console.log(err.error));
  }

  getAllVille(){
    this.service_ville.getAllVille().subscribe(data=>{
      this.list  = data ;

    } ,error => {
      console.log(error);
    })
  }

  resetView() {
    this.service.hide = "liste"
  }
}
