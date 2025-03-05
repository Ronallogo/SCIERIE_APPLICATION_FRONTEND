import { Component, OnInit } from '@angular/core';
import { TarifListComponent } from '../tarif-list/tarif-list.component';
import { TarifChartComponent } from '../tarif-chart/tarif-chart.component';

@Component({
  selector: 'app-tarif',
  imports: [
      TarifListComponent ,
      TarifChartComponent,

  ],
  standalone: true,
  templateUrl: './tarif.component.html',
  styleUrl: './tarif.component.css'
})
export class TarifComponent implements OnInit {


  protected totalTarif! : number ;
  protected mostChoosed! : number ;
  protected bestTarif!:number ;

  constructor() {
  }
  ngOnInit(): void {
  }


}
