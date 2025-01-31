import {Component, OnInit} from '@angular/core';
import {ChartEssenceStockComponent} from '../../essence/chart-essence-stock/chart-essence-stock.component';
import {EssenceListComponent} from '../../essence/essence-list/essence-list.component';
import {FournisseurListComponent} from '../fournisseur-list/fournisseur-list.component';

@Component({
  selector: 'app-fournisseur',
  imports: [
    ChartEssenceStockComponent,
    EssenceListComponent,
    FournisseurListComponent
  ],
  templateUrl: './fournisseur.component.html',
  standalone: true,
  styleUrl: './fournisseur.component.css'
})
export class FournisseurComponent implements OnInit{
  protected qtRav!: number  ;
  protected viewsList : string  = "fournisseur"


  ngOnInit(): void {
  }



  ChangeViewsList(view : string){
      this.viewsList =  view == "fournisseur" ? "rav" : "fournisseur";
  }

}
