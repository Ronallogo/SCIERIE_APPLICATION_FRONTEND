import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from '../../../env/env';
import {Tarif} from '../../../models/Models';

@Injectable({
  providedIn: 'root'
})
export class TarifService {
  hide:string  = "liste";
  protected  tarif !: Tarif ;

  constructor(private Http: HttpClient) { }

  getAll():Observable<any>{
      return this.Http.get(BASE_URL+'/tarif/all') ;
  }


  monnaieWithMostTarif():Observable<any>{
      return this.Http.get(BASE_URL+"/tarif/monnaieMostTarif");
  }

  getAllMonnaie():Observable<any>{
      return this.Http.get(BASE_URL+'/monnaie/all');
  }
  search(key : string):Observable<any>{
      return this.Http.get(BASE_URL+'/tarif/search/'+key);
  }

  create(tarif : any):Observable<any>{
      return this.Http.post(BASE_URL+"/tarif/create", tarif);
  }
  update(tarif : any):Observable<any>{
      return this.Http.put(BASE_URL+"/tarif/edit", tarif);
  }

  getTarif(){
      return this.tarif ;
  }
  setTarif(tarif : any){
      this.tarif = tarif ;
  }

}
