import {Component, OnInit} from '@angular/core';
import {chartTaxeFournisseur, data_for_chart, MONTHS} from '../../../models/Models';
import {RavService} from '../../rav/service/rav.service';
import {Chart} from 'chart.js';
import {FournisseurService} from '../service/fournisseur.service';

@Component({
  selector: 'app-fournisseur-chart',
  imports: [],
  templateUrl: './fournisseur-chart.component.html',
  standalone: true,
  styleUrl: './fournisseur-chart.component.css'
})
export class  FournisseurChartComponent  implements OnInit{
  chart: any;
  dataChart!:  chartTaxeFournisseur ;
  names: string[] = [];
  taxes: number[] = [];

  constructor(private service: FournisseurService) {}

  ngOnInit() {
    this.getData();

  }

  getData() {
    this.service.getDataChart().subscribe(data=>{
       this.dataChart = data ;
       this.names = this.dataChart.nom_fournisseurs ;
       this.taxes = this.dataChart.taxe_abbatages ;
      this.createChart();
    } , error => {
      console.log(error);
    })


  }

  createChart() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.names ,
        datasets: [{
          label: "Taxe abbatage",
          data: this.taxes,
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
        indexAxis:'y',
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
