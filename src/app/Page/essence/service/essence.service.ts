import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Essence_1, Essence_2,} from '../../../models/Models';
import {Observable} from 'rxjs';
import {BASE_URL} from '../../../../../env/env';
import {readUsedSize} from 'chart.js/helpers';


@Injectable({
  providedIn: 'root'
})
export class EssenceService {
  public hide : string = "liste";
  public essence!: Essence_2 ;
  public quantiteEssence! : number ;
  createEssence: boolean = false;
  constructor(private http : HttpClient) { }

  create(e : Essence_1):Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return  this.http.post(BASE_URL+"/essence/create" , e , { headers: headers })
  }


  searching(keyword : string): Observable<any>{
    return   this.http.get(BASE_URL+"/essence/search/" + keyword)
  }

  edit(e : Essence_2):Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json',})
    return  this.http.put(BASE_URL+"/essence/edit" , e , { headers: headers })
  }

  getAllEssence():Observable<any> {
    return this.http.get(BASE_URL+"/essence/all");
  }
  getDataChart() : Observable<any>{
      return this.http.get(BASE_URL+"/grume/dataChart");
  }

  setEssence(essence : Essence_2) {
    this.essence = essence;
  }

  getEssence(){
    return this.essence;
  }
  mercuriale():Observable<any>{
      return this.http.get(BASE_URL+"/essence/mercuriale");
  }

  delete(id : number) : Observable<any> {
      return  this.http.delete(BASE_URL+"/essence/delete/" + id);
  }
}
