import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../../../env/env';
import {Observable} from 'rxjs';
import {Essence_1, Grume_2} from '../../../models/Models';

@Injectable({
  providedIn: 'root'
})
export class GrumeService {
  public hide : string = "liste";
  public id_grume! : number ;

  protected grume!: Grume_2

  constructor(private http: HttpClient) { }


  getAll() : Observable<any>{
      return this.http.get(BASE_URL+"/grume/all");
  }


  getGrume(){
    this.id_grume = this.grume.id_grume ;
    return    this.grume ;
  }
  setGrume(grume : Grume_2){
      this.grume = grume ;
  }

  search(s: string) :Observable<any>{
      return this.http.get(BASE_URL+"/grume/search/"+s);
  }
  getOne(s : string){
      return this.http.get(BASE_URL+"/essence/getOne/"+s);
  }

  create(g : any){
      console.log(g);
      return this.http.post(BASE_URL+"/grume/create" , g)
  }

  update(g : any) :Observable<any>{
      console.log(g);
      return this.http.put(BASE_URL+"/grume/edit" , g)
  }

  delete(id : number):Observable<any>{
      return this.http.delete(BASE_URL+"/grume/delete/" +id);
  }

  grumeTraiter(gt : any):Observable<any>{
      return this.http.post(BASE_URL+"/grume/gtr/create" , gt) ;
  }
  getData(essence : string):Observable<any>{
      return this.http.get(BASE_URL+"/grume/dataGrumeTraiter/"+essence);
  }
}
