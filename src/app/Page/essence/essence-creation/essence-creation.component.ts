import {Component, OnInit} from '@angular/core';
import {EssenceService} from '../service/essence.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass} from '@angular/common';
import {_confirmation , _error} from '../../../models/notification';



@Component({
  selector: 'app-essence-creation',
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './essence-creation.component.html',
  standalone: true,
  styleUrl: './essence-creation.component.css'
})
export class EssenceCreationComponent implements OnInit {

  protected form = new FormGroup({
    libelle: new FormControl('', [Validators.required , Validators.minLength(5)]),
    abbreviation: new FormControl('', [Validators.required , Validators.minLength(3)]),
    densite: new FormControl('0.0', [Validators.required  ,  Validators.pattern('^[0-9]*\\.?[0-9]+$')  ,Validators.min(0)] , ),
    mercuriale: new FormControl('0.0', [Validators.required  ,  Validators.pattern('^[0-9]*\\.?[0-9]+$')  ,Validators.min(0)]),
    teneur_en_eau: new FormControl('0.0', [Validators.required  ,  Validators.pattern('^[0-9]*\\.?[0-9]+$') ,Validators.min(0), Validators.max(100) ]),
  });

  constructor(private service: EssenceService) {
  }

  resetView() {
    this.service.hide = "liste"
  }

  ngOnInit(): void {
  }


  create() {
    this.service.create({
      libelle: String(this.form.value.libelle),
      abbreviation: String(this.form.value.abbreviation),
      densite: Number(this.form.value.densite),
      mercuriale: Number(this.form.value.mercuriale),
      teneur_en_eau: Number(this.form.value.teneur_en_eau)
    }).subscribe(data => {
      console.log(data)
      _confirmation("Essence a été créée avec suucès!!!") ;
      this.service.createEssence = true ;
    }, error => {
      console.log(error)
      _error(null)
    })
  }


}

