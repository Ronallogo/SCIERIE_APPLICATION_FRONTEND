import { Component, OnInit } from '@angular/core';
import { GrumeService } from '../service/grume.service';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-grume-chart',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './grume-chart.component.html',
  styleUrl: './grume-chart.component.css'
})
export class GrumeChartComponent implements OnInit {
  chart: any;
  searchForm = new FormGroup({
    keyword : new FormControl()
  });
  private nameEssence : string  = String(localStorage.getItem('firstEssence'));
  private qts:  number[] =[];

  constructor(private service_grume: GrumeService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    if(localStorage.getItem('firstEssence')){
      this.service_grume.getData(this.nameEssence).subscribe(data=>{
        this.qts = data ;
        console.log(data);
        this.createChart();
      } , error =>  console.log(error));
    }



  }

  search(){

    if(this.searchForm.value.keyword != ""){
      this.service_grume.getData(String(this.searchForm.value.keyword)).subscribe(data=>{
        this.destroy();
        this.nameEssence = String(this.searchForm.value.keyword);
        this.qts = data ;
        this.createChart() ;
        console.log(data);

      } , error =>  console.log(error));
    }
  }




  createChart( ) {

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels:  ["Nombre de grume"  , "Nombre de grumes traitées" , "Nombre de grumes non traitées"],
        datasets: [{
          label: 'Essence consernée : '+this.nameEssence,
          data: this.qts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],

          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive : true ,
        plugins :{

          legend:{
            labels :{
              font:{
                size : 15 ,
                family : 'Lexend Giga, sans-serif' ,
                weight : "extrabold"
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true ,


          }

        } ,


      }
    });
  }
  destroy(){
    this.chart.destroy() ;
  }

}
