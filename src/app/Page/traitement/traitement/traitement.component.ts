import {Component, OnInit} from '@angular/core';
import {ListGrumeComponent} from '../../grume/list-grume/list-grume.component';
import {TraitementListComponent} from '../traitement-list/traitement-list.component';

@Component({
  selector: 'app-traitement',
  imports: [
    ListGrumeComponent,
    TraitementListComponent
  ],
  templateUrl: './traitement.component.html',
  standalone : true ,
  styleUrl: './traitement.component.css'
})
export class TraitementComponent implements OnInit{
  qtTraitement!: number;

  ngOnInit(): void {

  }







}
