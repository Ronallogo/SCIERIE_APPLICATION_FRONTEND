import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {EssenceService} from '../service/essence.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Essence_2} from '../../../models/Models';
import {_confirmation, _error} from '../../../models/notification';


@Component({
  selector: 'app-essence-update',
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule

  ],
  templateUrl: './essence-update.component.html',
  standalone: true,
  styleUrl: './essence-update.component.css'
})
export class EssenceUpdateComponent implements OnInit{

  protected  essence! : Essence_2;
  protected form  =  new FormGroup({
    id_essence : new FormControl( "", [Validators.required  ,  Validators.pattern('^[0-9]*\\.?[0-9]+$') ,Validators.min(0), Validators.max(100) ]) ,
    libelle: new FormControl( "", [Validators.required , Validators.minLength(5)]),
    abbreviation: new FormControl(" ", [Validators.required , Validators.minLength(3)]),
    densite: new FormControl( "", [Validators.required  ,  Validators.pattern('^[0-9]*\\.?[0-9]+$')  ,Validators.min(0)] , ),
    mercuriale: new FormControl( "", [Validators.required  ,  Validators.pattern('^[0-9]*\\.?[0-9]+$')  ,Validators.min(0)]),
    teneur_en_eau: new FormControl( "", [Validators.required  ,  Validators.pattern('^[0-9]*\\.?[0-9]+$') ,Validators.min(0), Validators.max(100) ]),
  }) ;





  constructor(private service: EssenceService)  {
  }


  resetView() {
      this.service.hide = "liste";
  }

  ngOnInit(): void {
    this.init()
    console.log({...this.form.getRawValue()})
  }

  modifier() {
    this.service.edit({
      id_essence : Number(this.form.value.id_essence) ,
      libelle: String(this.form.value.libelle),
      abbreviation: String(this.form.value.abbreviation),
      densite: Number(this.form.value.densite),
      mercuriale: Number(this.form.value.mercuriale),
      teneur_en_eau: Number(this.form.value.teneur_en_eau)
    }).subscribe(data => {
      console.log(data)
      _confirmation(null)
    }, error => {
      console.log(error)
      _error(null)
    })
  }


  init(){

    this.essence =  this.service.getEssence() ;
    console.log({...this.essence})
    this.form.controls.id_essence.setValue(String(this.essence.id_essence)) ;
    this.form.controls.libelle.setValue(String(this.essence.libelle)) ;
    this.form.controls.abbreviation.setValue(String(this.essence.abbreviation)) ;
    this.form.controls.densite.setValue(String(this.essence.densite)) ;
    this.form.controls.mercuriale.setValue(String(this.essence.mercuriale)) ;
    this.form.controls.teneur_en_eau.setValue(String(this.essence.teneur_en_eau)) ;


  }


}
