import { Component } from '@angular/core';
import {BodyApplicationComponent} from '../body-application/body-application.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
    NgClass


  ],
  templateUrl: './sidebar.component.html',
  standalone: true,
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebarOpen: boolean = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen
  }
}
