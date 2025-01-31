import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {PortService} from '../port-service/port.service';
import {Ville} from '../../../models/Models';
import {NgForOf} from '@angular/common';
import {_confirmation} from '../../../models/notification';

@Component({
  selector: 'app-port-creation',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './port-creation.component.html',
  standalone: true,
  styleUrl: './port-creation.component.css'
})
export class PortCreationComponent implements OnInit{
  protected ville !: Ville ;
  protected  list : Ville[] = [];
  protected form = new FormGroup({
    nom_port: new FormControl('', [Validators.required , Validators.minLength(5)]),
    ville: new FormControl(this.ville ,
      [Validators.required , Validators.minLength(5)]),

  });
  ngOnInit(): void {
      this.getAllVille() ;
  }
  constructor(protected service : PortService) {
  }

  create() {

    this.service.create({

        nom_port : String(this.form.value.nom_port) ,
        ville : {
            id_pays  : Number(this.form.value.ville?.id_pays),
            id_ville :Number( this.form.value.ville?.id_ville),
            nom_ville : String(this.form.value.ville?.nom_ville),
            nom_pays : String(this.form.value.ville?.nom_pays),
        }
      }).subscribe(data=>{
        _confirmation("Le port a été enregistré avec succès!!");
          console.log(data);
           this.service.createPort= true ;
      } , error => {
          console.log(error);
      })

  }

  resetView() {
      this.service.hide = "liste";
  }

  getAllVille(){
      this.service.getAllVille().subscribe(data=>{
        this.list  = data ;
      } ,error => {
          console.log(error);
      })
  }
}
