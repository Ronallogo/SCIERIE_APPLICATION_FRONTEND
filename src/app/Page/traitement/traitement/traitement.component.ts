import {Component, OnInit} from '@angular/core';
import {ListGrumeComponent} from '../../grume/list-grume/list-grume.component';
import {TraitementListComponent} from '../traitement-list/traitement-list.component';
import {Essence_2} from '../../../models/Models';
import {TraitementService} from '../service/traitement.service';

@Component({
  selector: 'app-traitement',
  imports: [
    TraitementListComponent
  ],
  templateUrl: './traitement.component.html',
  standalone : true ,
  styleUrl: './traitement.component.css'
})
export class TraitementComponent implements OnInit{
  qtTraitement!: number;
  essenceTraitement!:  Essence_2;
  protected essenceWithMostProcess!: any   ;

  constructor(private service : TraitementService) {
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.qtTraitement = Number(localStorage.getItem("qtTraitement"));
    }, 7000);
    this.getData();

  }

  getData(){
      this.service.getEssenceMostProcessed().subscribe(data=>{
          this.essenceWithMostProcess = data ;
          console.log(this.essenceWithMostProcess);
      },error => {
        console.log(error);
      })
  }







}
