import {Component, OnInit} from '@angular/core';
import {EssenceListComponent} from '../essence-list/essence-list.component';
import {ChartEssenceStockComponent} from '../chart-essence-stock/chart-essence-stock.component';
import {ServicePrincipal} from '../../ServicePrincipal/service-principal.service';
import {EssenceService} from '../service/essence.service';

@Component({
  selector: 'app-essence',
  imports: [
    EssenceListComponent ,
    ChartEssenceStockComponent
  ],
  templateUrl: './essence.component.html',
  standalone: true,
  styleUrl: './essence.component.css'
})
export class EssenceComponent implements  OnInit{

  public qtEssence! : number ;
  public qtMoy! :number ;
  public mercuriale! : string  ;
  constructor(private service : EssenceService) {
  }
  ngOnInit(): void {
      this.getMercuriale();

      console.log(this.qtEssence)


  }


  getMercuriale(){
     setInterval(()=>{
       this.service.mercuriale().subscribe(data=>{
         this.mercuriale = Number(data).toFixed(2);
       } , err => console.log(err));
     } , 8000)

    setInterval(()=>{
      this.qtEssence = Number(localStorage.getItem("qtEssence"));
      this.qtMoy = Number(localStorage.getItem("qtGrumeMoy"));
    } , 5000)
  }


}
