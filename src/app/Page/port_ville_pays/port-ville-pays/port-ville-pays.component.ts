import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PortListComponent} from '../port-list/port-list.component';
import {PortService} from '../port-service/port.service';

@Component({
  selector: 'app-port-ville-pays',
  imports: [
    ReactiveFormsModule,
    PortListComponent
  ],
  templateUrl: './port-ville-pays.component.html',
  standalone: true,
  styleUrl: './port-ville-pays.component.css'
})
export class PortVillePaysComponent implements OnInit {
  searchForm = new FormGroup({
    keyword : new FormControl('', [Validators.required]),
  });
  constructor(protected  service : PortService) {
  }
  ngOnInit(): void {
  }


  search() {
      if(String(this.searchForm.controls['keyword'].value) == ""){
          this.service.getAllPort().subscribe(data=>{
              this.service.ports = data ;
          } , error => {
              console.log(error);
          });
      }else{

          this.service.search(String(this.searchForm.controls['keyword'].value)).subscribe(data=>{
              this.service.ports = data ;
          } , error => {
            console.log(error)
          });
      }
  }
}
