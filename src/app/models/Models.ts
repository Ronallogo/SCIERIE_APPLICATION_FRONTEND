


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
  localisaton : string ;
  longueur_moy : number ;
  diam_moy : number ;
  poids_moy :number;
  quantite :number;
  cubage_moy :number;
  qualite :number;
  id_essence :number;
  nom_essence :string;
  poids_grume : number ;
  entree :string;


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
    id_fourniseur : number ;
    nom_fournisseur  :number ;
    code_rav  : string;
    date_rav : string ;
    prix_rav :number;
}



