import { Component } from '@angular/core';
import {EssenceListComponent} from '../essence/essence-list/essence-list.component';
import {RouterOutlet} from '@angular/router';
import {EssenceComponent} from '../essence/body/essence.component';

@Component({
  selector: 'app-body-application',
  imports: [


    EssenceComponent
  ],
  templateUrl: './body-application.component.html',
  standalone: true,
  styleUrl: './body-application.component.css'
})
export class BodyApplicationComponent {

}
