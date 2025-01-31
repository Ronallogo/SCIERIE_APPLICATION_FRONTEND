import {Component, OnInit} from '@angular/core';
import {BodyApplicationComponent} from '../body-application/body-application.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';
import {ServicePrincipal} from '../ServicePrincipal/service-principal.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLinkActive,
    RouterLink,

    NgClass,



  ],
  templateUrl: './sidebar.component.html',
  standalone: true,
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  isSidebarOpen: boolean = true;

  constructor(protected sp : ServicePrincipal) {
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen
  }

  changeComponent(views: string) {
      this.sp.views = views ;
  }

  ngOnInit(): void {
  }
}
