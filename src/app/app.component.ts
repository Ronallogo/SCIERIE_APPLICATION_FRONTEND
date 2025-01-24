import {Component, OnInit} from '@angular/core';
import {initFlowbite} from 'flowbite';
import {SidebarComponent} from './Page/sidebar/sidebar.component';
import {NavbarComponent} from './Page/navbar/navbar.component';
import {BodyApplicationComponent} from './Page/body-application/body-application.component';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    SidebarComponent,
    NavbarComponent,
    BodyApplicationComponent,

  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent  implements  OnInit{
  title = 'scierie';

  ngOnInit(): void {
    initFlowbite();
  }
}
