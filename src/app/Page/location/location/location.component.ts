import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PortListComponent} from '../../port_ville_pays/port-list/port-list.component';
import {LocationListComponent} from '../location-list/location-list.component';

@Component({
  selector: 'app-location',
  imports: [
    FormsModule,
    PortListComponent,
    ReactiveFormsModule,
    LocationListComponent
  ],
  templateUrl: './location.component.html',
  standalone: true,
  styleUrl: './location.component.css'
})
export class LocationComponent {
  searchForm =   new  FormGroup({
    keyword : new FormControl()
  });

  search() {

  }
}
