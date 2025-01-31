import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Port_1, Port_2} from '../../../models/Models';
import {BASE_URL} from '../../../../../env/env';
import {Observable} from 'rxjs';
import {readUsedSize} from 'chart.js/helpers';

@Injectable({
  providedIn: 'root'
})
export class PortService {
  ports  : Port_2[] = [] ;
  hide: string = "liste";
  port !: Port_2 ;
  createPort: boolean = false;

  constructor(protected http: HttpClient) { }


  getAllPort():Observable<any> {
    return this.http.get(BASE_URL + "/port/all");

  }

  delete(id : number):Observable<any>{
    return this.http.delete(BASE_URL + "/port/delete/" + id);
  }

  search(keyword: string): Observable<any> {
     return  this.http.get(BASE_URL + "/port/search/" + keyword);
  }

  getAllVille():Observable<any>{
      return this.http.get(BASE_URL+"/ville/all");
  }

  setPort(p : Port_2){
        this.port = p ;
  }


  create(p: {
    nom_port: string;
    ville: { nom_ville: string; id_ville: number; nom_pays: string; id_pays: number }
  }):Observable<any>{

    let body  = {
      nom_port : p.nom_port ,
      nom_ville : p.ville.nom_ville,
      id_ville: p.ville.id_ville ,  nom_pays: p.ville.nom_pays ,  id_pays: p.ville.id_pays
    }
    return this.http.post(BASE_URL+"/port/create", body);
  }
  getPort(){
      return this.port ;
  }



  update(body: {
    nom_port :  string ,
    nom_ville : string,
    id_ville: number,  nom_pays:  string ,  id_pays:  number
  }):Observable<any>{
    return this.http.post(BASE_URL+"/port/edit", body);
  }




}
