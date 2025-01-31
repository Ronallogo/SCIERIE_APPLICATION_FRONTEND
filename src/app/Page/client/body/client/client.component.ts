import { Component } from '@angular/core';
import {ChartEssenceStockComponent} from '../../../essence/chart-essence-stock/chart-essence-stock.component';
import {EssenceListComponent} from '../../../essence/essence-list/essence-list.component';

@Component({
  selector: 'app-client',
  imports: [
    ChartEssenceStockComponent,
    EssenceListComponent
  ],
  templateUrl: './client.component.html',
  standalone: true,
  styleUrl: './client.component.css'
})
export class ClientComponent {

}
