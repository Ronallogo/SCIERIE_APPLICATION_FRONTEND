import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Port_2, Ville} from '../../../models/Models';
import {PortService} from '../port-service/port.service';
import {_confirmation} from '../../../models/notification';

@Component({
  selector: 'app-port-update',
    imports: [
        NgForOf,
        ReactiveFormsModule
    ],
  templateUrl: './port-update.component.html',
  standalone: true,
  styleUrl: './port-update.component.css'
})
export class PortUpdateComponent  implements OnInit {
  protected ville !: Ville ;
  private port!: Port_2;

  protected  list : Ville[] = [];
  protected form = new FormGroup({
    nom_port: new FormControl('', [Validators.required , Validators.minLength(5)]),
    ville: new FormControl(this.ville ,
      [Validators.required , Validators.minLength(5)]),

  });

  ngOnInit(): void {
     this.init() ;
    this.getAllVille() ;
  }
  constructor(protected service : PortService) {
  }

  update() {

    this.service.update({

      nom_port : String(this.form.value.nom_port) ,
      id_pays  : Number(this.form.value.ville?.id_pays),
      id_ville :Number( this.form.value.ville?.id_ville),
      nom_ville : String(this.form.value.ville?.nom_ville),
      nom_pays : String(this.form.value.ville?.nom_pays),
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


  init(){

    this.port =  this.service.getPort() ;
    console.log({...this.port})
    this.form.controls.nom_port.setValue(String(this.port.nom_port)) ;
    this.form.controls.ville.setValue(this.port.ville) ;



  }

}
