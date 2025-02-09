import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../../../../../env/env';
import {Observable} from 'rxjs';
import {Ravitaillement} from '../../../models/Models';

@Injectable({
  providedIn: 'root'
})
export class RavService {
  hide: string = "liste";
  update : boolean = false ;
  rav! : Ravitaillement ;

  constructor(private http : HttpClient) { }



  create(rav :any ) : Observable<any> {
      console.log(rav);
      return this.http.post(BASE_URL+"/rav/create" , rav)
  }

  edit(rav : any){
      console.log(rav);
      return this.http.put(BASE_URL+"/rav/edit" , rav)
  }

  getAll():Observable<any>{
      return  this.http.get(BASE_URL+"/rav/all")
  }


  delete(id : string):Observable<any>{
      return this.http.delete(BASE_URL+"/rav/delete/"+id)
  }

  setRav(t: Ravitaillement) {
      this.rav = t ;
  }

  getRav(){
      return this.rav;
  }

  search(s: string):Observable<any> {
     return this.http.get(BASE_URL+"/rav/search/"+s);
  }

  getDataChart():Observable<any>{
      return this.http.get(BASE_URL+"/rav/dataChart");
  }
}
