import {Component, OnInit} from '@angular/core';
import {ListGrumeComponent} from '../list-grume/list-grume.component';
import { GrumeChartComponent } from '../grume-chart/grume-chart.component';


@Component({
  selector: 'app-grume',
  imports: [
    ListGrumeComponent ,
    GrumeChartComponent
  ],
  templateUrl: './grume.component.html',
  standalone: true,
  styleUrl: './grume.component.css'
})
export class GrumeComponent  implements  OnInit{
  qtGrumes!:  number;
  qtBoisTraite !: number ;
  ngOnInit(): void {
      this.qtGrumes =  Number(localStorage.getItem('qtGrume')) ;
      console.log(this.qtGrumes)
      this.qtBoisTraite = Number(localStorage.getItem('qtBoisTraiter'))
    console.log(this.qtBoisTraite)
  }

}
