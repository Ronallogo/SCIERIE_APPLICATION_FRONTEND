import {Component, OnInit} from '@angular/core';
import {ChartEssenceStockComponent} from '../../essence/chart-essence-stock/chart-essence-stock.component';
import {EssenceListComponent} from '../../essence/essence-list/essence-list.component';
import {FournisseurListComponent} from '../fournisseur-list/fournisseur-list.component';
import {RavitaillementListComponent} from '../../rav/ravitaillement-list/ravitaillement-list.component';
import {FournisseurService} from '../service/fournisseur.service';
import {FournisseurChartComponent} from '../fournisseur-chart/fournisseur-chart.component';
import {RavChartComponent} from '../../rav/rav-chart/rav-chart.component';
import {Essence_2} from '../../../models/Models';

@Component({
  selector: 'app-fournisseur',
  imports: [
    FournisseurListComponent,
    RavitaillementListComponent,
    FournisseurChartComponent,
    RavChartComponent
  ],
  templateUrl: './fournisseur.component.html',
  standalone: true,
  styleUrl: './fournisseur.component.css'
})
export class FournisseurComponent implements OnInit{
  protected qtRav!: number  ;

  protected  taxe!: string;
  protected viewsList : string  = "fournisseur";
  protected viewsChart : string  = "fournisseurChart";
  protected plusAcheter !: Essence_2;

  constructor(protected service : FournisseurService) {
  }
  ngOnInit(): void {
     setInterval(()=>{
       this.taxe = Number(localStorage.getItem("tax_moy")).toFixed(2)
       this.qtRav = Number(localStorage.getItem("qtRav"));

       this.plusAcheter = JSON.parse(String(localStorage.getItem("plusAcheter")));


     } , 5000);
  }






  ChangeViewsList(view : string){
      this.viewsList =  view == "fournisseur" ? "rav" : "fournisseur";
  }

  ChangeViewsChart(view : string){
    this.viewsChart =  view == "fournisseurChart" ? "ravChart" : "fournisseurChart";
  }

  ajouter() {
    this.service.hide = "ajouter";
  }

}
