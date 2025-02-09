import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { EssenceService } from '../service/essence.service';
import { GrumeService } from '../../grume/service/grume.service';
import { forkJoin } from 'rxjs';
import {DataChartEsssenceGrume} from '../../../models/Models';


@Component({
  selector: 'app-chart-essence-stock',
  templateUrl: './chart-essence-stock.component.html',
  standalone: true,
  styleUrls: ['./chart-essence-stock.component.css']
})
export class ChartEssenceStockComponent implements OnInit {
  chart: any;
  dataChart : DataChartEsssenceGrume[] =[];
  names: string[] = [];
  qts: number[] = [];

  constructor(private service_essence: EssenceService, private service_grume: GrumeService) {}

  ngOnInit() {
    this.getData();

  }

  getData() {
    // Utilisation de forkJoin pour attendre que les deux appels HTTP soient terminés
    forkJoin({
      dataChart: this.service_essence.getDataChart(),
      plusAcheter : this.service_essence.plusAcheter()

    }).subscribe({
      next: (result) => {
        // Les données sont maintenant disponibles
        this.dataChart = result.dataChart;
        console.log("essence plus achter : " , result.plusAcheter);
        localStorage.setItem("plusAcheter" ,  JSON.stringify(result.plusAcheter));

        // Remplir les noms des essences et les quantités des grumes
        this.names = this.dataChart.map(data => data.essence);
        this.qts = this.dataChart.map(data => data.qtGrume);

        this.createChart();
        console.log(this.names);
        console.log(this.qts);
      },
      error: (err) => {
        console.log('Erreur lors de la récupération des données :', err);
      }
    });
  }

  createChart() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.names,
        datasets: [{
          label: 'Quantité de Grumes par Essence',
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
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
