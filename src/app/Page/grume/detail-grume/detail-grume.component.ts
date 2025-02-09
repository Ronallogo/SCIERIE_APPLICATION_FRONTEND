import {Component, OnInit} from '@angular/core';
import {Grume_2} from '../../../models/Models';
import {GrumeService} from '../service/grume.service';
import {NgForOf} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-detail-grume',
  imports: [
    NgForOf,
    ReactiveFormsModule
  ],
  standalone : true ,
  templateUrl: './detail-grume.component.html',
  styleUrl: './detail-grume.component.css'
})
export class DetailGrumeComponent  implements OnInit{
  protected grume !: Grume_2 ;

  constructor(private service : GrumeService) {
  }

  ngOnInit(): void {
    this.grume = this.service.getGrume() ;
  }

  resetView() {
    this.service.hide  = "liste";
  }

}
