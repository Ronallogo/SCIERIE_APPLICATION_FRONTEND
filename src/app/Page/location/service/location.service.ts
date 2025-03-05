import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from '../../../env/env';
import {Location} from '../../../models/Models';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  hide: string  = "liste";
  listLocation :  Location[] = [] ;

  constructor(private http : HttpClient) { }

  getAll():Observable<any> {
      return this.http.get(BASE_URL+'/ville/all')
  }

  edit(t: any):Observable<any> {
      return this.http.put(BASE_URL+'/ville/edit', t)

  }

  create(t: any) :Observable<any>{
    return this.http.post(BASE_URL+'/ville/create', t) ;
  }

  delete(id : number):Observable<any>{
      return this.http.delete(BASE_URL+'/ville/delete/' + id);
  }

  search(keyword : string) : Observable<any>{
    return this.http.get(BASE_URL+'/ville/search/'+keyword );
  }
}
