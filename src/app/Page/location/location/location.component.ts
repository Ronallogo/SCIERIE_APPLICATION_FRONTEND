import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PortListComponent} from '../../port_ville_pays/port-list/port-list.component';
import {LocationListComponent} from '../location-list/location-list.component';
import {LocationService} from '../service/location.service';

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

  constructor(protected service : LocationService) {
  }

  search() {
        if(String(this.searchForm.value.keyword) == ""){
            this.service.getAll().subscribe(data=>{
                this.service.listLocation = data ;
            } , e=> console.log(e)) ;
            return ;
        }
        this.service.search(String(this.searchForm.value.keyword)).subscribe(data=>{
            this.service.listLocation = data ;
        } , e=> console.log(e));
  }
}
