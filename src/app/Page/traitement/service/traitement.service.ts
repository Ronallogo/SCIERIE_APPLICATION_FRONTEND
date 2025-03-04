import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from '../../../env/env';
import {Traitement} from '../../../models/Models';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {
  hide: string = "liste";

  protected traitement!: Traitement ;


  constructor(private http : HttpClient) { }


  getAllTraitement():Observable<any>{
      return this.http.get(BASE_URL+"/traitement/all")
  }

  getAllTraitementByEssence(essence : string):Observable<any>{
    return this.http.get(BASE_URL+"/traitement/allByEssence/"+essence);
  }

  createTraitement(t : any):Observable<any>{
      return this.http.post(BASE_URL+"/traitement/create" , t)
  }

  edit(t:any):Observable<any>{
    return this.http.put(BASE_URL+"/traitement/edit" , t)

  }

  search(s: string):Observable<any> {
      return this.http.get(BASE_URL+"/traitement/search/"+s);
  }

  create(t : any):Observable<any>{
      return this.http.post(BASE_URL+"/traitement/create",t);
  }


  getTraitement(){
      return this.traitement ;
  }

  setTraitement(t:Traitement){
      this.traitement = t ;
  }

  delete(id_traitement: number):Observable<any> {
    return this.http.delete(BASE_URL+"/traitement/delete/"+id_traitement);
  }

  update(value: any) : Observable<any> {
      return this.http.put(BASE_URL+"/traitement/edit" , value);
  }

  getEssenceMostProcessed():Observable<any>{
      return this.http.get(BASE_URL+"/traitement/essenceMostProcessed" );
  }
}
