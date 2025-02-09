import {Component, OnInit} from '@angular/core';
import {data_for_chart, DataChartEsssenceGrume, MONTHS} from '../../../models/Models';
import {EssenceService} from '../../essence/service/essence.service';
import {GrumeService} from '../../grume/service/grume.service';
import {elementAt, forkJoin} from 'rxjs';
import {Chart} from 'chart.js';
import {RavService} from '../service/rav.service';

@Component({
  selector: 'app-rav-chart',
  imports: [],
  templateUrl: './rav-chart.component.html',
  standalone: true,
  styleUrl: './rav-chart.component.css'
})
export class RavChartComponent implements OnInit {
  chart: any;
  dataChart: data_for_chart[] = [];
  names: string[] = [];
  qts: number[] = [0,0,0,0,0,0,0,0,0,0,0,0];

  constructor(private service: RavService) {}

  ngOnInit() {
    this.getData();

  }

  getData() {
      this.service.getDataChart().subscribe(data=>{
          this.qts = data ;
          this.createChart();
      } , error => {
        console.log(error);
      })


  }

  createChart() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: MONTHS,
        datasets: [{
          label: "Nombre de ravitaillement dans l'année",
          data: this.qts,
          backgroundColor: [

            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [

            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 3
        }]
      },
      options: {

        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
