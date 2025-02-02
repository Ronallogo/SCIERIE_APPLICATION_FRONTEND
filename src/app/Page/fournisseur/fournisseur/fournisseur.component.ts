import {Component, OnInit} from '@angular/core';
import {ChartEssenceStockComponent} from '../../essence/chart-essence-stock/chart-essence-stock.component';
import {EssenceListComponent} from '../../essence/essence-list/essence-list.component';
import {FournisseurListComponent} from '../fournisseur-list/fournisseur-list.component';
import {RavitaillementListComponent} from '../../rav/ravitaillement-list/ravitaillement-list.component';
import {FournisseurService} from '../service/fournisseur.service';

@Component({
  selector: 'app-fournisseur',
  imports: [
    FournisseurListComponent,
    RavitaillementListComponent
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

  constructor(protected service : FournisseurService) {
  }
  ngOnInit(): void {
     setInterval(()=>{
        this.taxe = Number(localStorage.getItem("tax_moy")).toFixed(2)
       this.qtRav = Number(localStorage.getItem("qtRav"));

     } , 5000);
  }






  ChangeViewsList(view : string){
      this.viewsList =  view == "fournisseur" ? "rav" : "fournisseur";
  }

  ChangeViewsChart(view : string){
    this.viewsList =  view == "fournisseurChart" ? "ravChart" : "fournisseurChart";
  }

  ajouter() {
    this.service.hide = "ajouter";
  }

}
