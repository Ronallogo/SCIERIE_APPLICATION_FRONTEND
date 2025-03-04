import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../../../env/env';
import {Observable} from 'rxjs';
import {Fournisseur} from '../../../models/Models';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  hide: string = "liste";

  fournisseur! : Fournisseur;
  createFournisseur: boolean = false;



  constructor(protected http: HttpClient) { }

  getAllFournisseur():Observable<any>{
    return this.http.get(BASE_URL + "/fournisseur/all");
  }


  getTaxe():Observable<any>{
    return this.http.get(BASE_URL + "/fournisseur/taxe_moy");
  }

  create(f: {
    nom_ville: string;
    adresse_fournisseur: string;
    id_fournisseur: null;
    telephone_fournisseur: string;
    email_fournisseur: string;
    fax_fournisseur: string;
    taxe_abbatage: number;
    nom_fournisseur: string
  }): Observable<any>{
      return this.http.post(BASE_URL+"/fournisseur/create" , f);
  }

  searching(s: string):Observable<any> {
      return this.http.get(BASE_URL+"/fournisseur/search/"+s);
  }

  setFournisseur(f: Fournisseur) {
      this.fournisseur = f ;
  }

  getFournisseur(){
      return this.fournisseur ;
  }

  edit(param: {
    nom_ville: string;
    adresse_fournisseur: string;
    id_fournisseur: number;
    telephone_fournisseur: string;
    email_fournisseur: string;
    fax_fournisseur: string;
    taxe_abbatage: number;
    nom_fournisseur: string
  }) {
      return this.http.put(BASE_URL+"/fournisseur/edit" , param)
  }

  delete(id : number):Observable<any> {
      return this.http.delete(BASE_URL+"/fournisseur/delete/"+id);
  }

  getDataChart():Observable<any> {
      return this.http.get(BASE_URL+"/fournisseur/dataChart")
  }
}
