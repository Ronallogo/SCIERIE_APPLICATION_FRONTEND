import {Component, OnInit} from '@angular/core';
import {ListGrumeComponent} from '../list-grume/list-grume.component';

@Component({
  selector: 'app-grume',
  imports: [
    ListGrumeComponent
  ],
  templateUrl: './grume.component.html',
  standalone: true,
  styleUrl: './grume.component.css'
})
export class GrumeComponent  implements  OnInit{
  qtGrumes: number = 0;
  ngOnInit(): void {
      this.qtGrumes =  Number(localStorage.getItem('qtGrume')) ;
      console.log(this.qtGrumes)
  }

}
