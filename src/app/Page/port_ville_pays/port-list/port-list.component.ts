import {Component, OnInit} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {EssenceService} from '../../essence/service/essence.service';
import {PortService} from '../port-service/port.service';
import {NgClass} from '@angular/common';
import {PortUpdateComponent} from '../port-update/port-update.component';
import {PortCreationComponent} from '../port-creation/port-creation.component';
import {_confirmation, _deletion, _warning} from '../../../models/notification';
import {Essence_2, Port_2} from '../../../models/Models';

@Component({
  selector: 'app-port-list',
  imports: [
    NgxPaginationModule,
    NgClass,
    PortUpdateComponent,
    PortCreationComponent
  ],
  templateUrl: './port-list.component.html',
  standalone: true,
  styleUrl: './port-list.component.css'
})
export class PortListComponent implements  OnInit{
  currentPage!:  number;
  entete: string[] =["No" ,"Port" , "Ville" , "Pays" , "Actions"];
  constructor(protected service : PortService) {}


  ngOnInit(): void {
      this.getAll() ;
      setInterval(()=> {if(this.service.createPort){
        this.getAll() ;this.service.createPort = false; }} , 5000)
  }

  pageChanged($event: number) {
    this.currentPage = $event ;
  }

 async delete(id: any) {
    let response: boolean = await _deletion("Voulez-vous supprimer ce port?");
    if (!response) return;

    this.service.delete(id).subscribe(data=>{
        this.getAll();
        console.log(data)
    } , error => {
      console.log(error);

    })
  }


  modifier(p : Port_2) {
    this.service.hide = "modifier";
    this.service.setPort(p);

  }

  getAll(){
    this.service.getAllPort().subscribe(data=>{
      this.service.ports = data;
      console.log(data);
    } , error => {
      console.log(error);
    });
  }

  ajouter() {
    this.service.hide = "ajouter";
  }
}
