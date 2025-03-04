import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from '../../../env/env';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  hide: string  = "liste";

  constructor(private http : HttpClient) { }

  getAll():Observable<any> {
      return this.http.get(BASE_URL+'/ville/all')
  }

  edit(t: any):Observable<any> {
      return this.http.put(BASE_URL+'/ville/edit', t)

  }
}
