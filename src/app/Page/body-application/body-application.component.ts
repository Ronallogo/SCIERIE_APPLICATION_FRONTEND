import {Component, OnInit} from '@angular/core';
import {EssenceListComponent} from '../essence/essence-list/essence-list.component';
import {RouterOutlet} from '@angular/router';
import {EssenceComponent} from '../essence/body/essence.component';
import {ServicePrincipal} from '../ServicePrincipal/service-principal.service';
import {BodyDashbordComponent} from '../dashboard/body-dashbord/body-dashbord.component';
import {ClientComponent} from '../client/body/client/client.component';

@Component({
  selector: 'app-body-application',
  imports: [


    EssenceComponent,
    BodyDashbordComponent,
    ClientComponent,
    RouterOutlet
  ],
  templateUrl: './body-application.component.html',
  standalone: true,
  styleUrl: './body-application.component.css'
})
export class BodyApplicationComponent  implements OnInit{

 constructor(protected sp : ServicePrincipal) {
 }
  ngOnInit(): void {
  }

}
