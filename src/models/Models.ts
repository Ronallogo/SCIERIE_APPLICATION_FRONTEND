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
  mercurial : number
  tener_en_eau : number

}
export interface Essence_2 extends Essence_1   {
  id_essence : number
}
