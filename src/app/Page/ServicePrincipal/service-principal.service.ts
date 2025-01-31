import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicePrincipal {
  public views : string = "essence"
  constructor() { }
}
