import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from '../../../env/env';

@Injectable({
  providedIn: 'root'
})
export class TarifService {
  hide:string  = "liste";

  constructor(private Http: HttpClient) { }

  getAll():Observable<any>{
      return this.Http.get(BASE_URL+'/tarif/all') ;
  }


  monnaieWithMostTarif():Observable<any>{
      return this.Http.get(BASE_URL+"/tarif/monnaieMostTarif");
  }

}
