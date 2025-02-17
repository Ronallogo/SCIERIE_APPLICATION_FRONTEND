import {FormControl, FormGroup, Validators} from '@angular/forms';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  views : string ;
}


export interface Essence_1{

  libelle :string
  abbreviation :string
  densite : number
  mercuriale : number
  teneur_en_eau : number

}
export interface Essence_2 extends Essence_1   {
  id_essence : number
}

export interface Grume_1{

  code_lots : string ;
  longueur_moy : number ;
  diam_moy : number ;
  poids_moy :number;
  quantite :number;
  cubage_moy :number;
  qualite :number;
  id_essence :number;
  nom_essence :string;
  entree :string;
  traiter : boolean ;


}

export interface Grume_2 extends Grume_1   {
  id_grume  : number ,
}


export interface DataChartEsssenceGrume{
    essence : string;
    qtGrume  :number;
}

export interface Port_1{

   nom_port : number ;
   ville : Ville
}

export interface Port_2 extends Port_1 {
    id_port : number ;
}

export interface Ville{
  id_ville : number ;
  nom_ville : string ;
  id_pays : number ;
  nom_pays : string ;
}



export interface Pays{
  id_pays : number ;
  nom_pays : string ;
}

export interface Fournisseur{
  id_fournisseur :number ;
  nom_fournisseur :string ;
  adresse_fournisseur :string ;
  email_fournisseur : string ;
  fax_fournisseur :  string ;
  telephone_fournisseur : string ;
  taxe_abbatage :number ;
  id_ville :number;
  nom_ville:string ;

}


export interface  Ravitaillement{
    id_rav : number ;
    id_fournisseur : number ;
    nom_fournisseur  :number ;
    code_rav  : string;
    date_rav : string ;
    prix_rav :number;
    qtBois : number ;
}

export const MONTHS   = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];


export interface data_for_chart{
    nbr_rav : number ,
    month : number ,
}

export interface chartTaxeFournisseur{
   nom_fournisseurs  : string[];
   taxe_abbatages : number[] ;
}


export interface  Traitement{
  id_traitement :number ;
  nom_traitement  : string;
  description :string;
  bois_a_traiter : string ;
  pourcent_reduction_long :number;
  pourcent_reduction_diam :number;
  pourcent_reduction_poids :number;
  pourcent_reduction_cubage :number;

}


export const  formulaireTraitement  = new FormGroup({
  nom_traitement  : new FormControl("" , [Validators.required ,Validators.minLength(3) ]) ,
  description : new FormControl("" , [Validators.required ,Validators.minLength(3) ]) ,
  bois_a_traiter : new FormControl( "" ,[Validators.required , Validators.min(2) , Validators.max(100)])  ,
  pourcent_reduction_long : new FormControl("" , [Validators.required , Validators.min(2) , Validators.max(100)])  ,
  pourcent_reduction_diam : new FormControl("", [Validators.required , Validators.min(2) , Validators.max(100)])  ,
  pourcent_reduction_poids : new FormControl("" , [Validators.required , Validators.min(2) , Validators.max(100)])  ,
  pourcent_reduction_cubage : new FormControl("" , [Validators.required , Validators.min(2) , Validators.max(100)])  ,

});


export interface GrumeTraiter{
  id_operation : number ;
  code_grume : string;
  id_traitement : number;
   nom_traitement  : string;
   bois_associe : string ;
  date_traitement : string;
}



export function   getTodayDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const h  = String(today.getHours())
  const m = String(today.getMinutes());


  return `${year}-${month}-${day}-${h}:${m}`;
}
