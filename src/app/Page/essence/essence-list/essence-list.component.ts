import {Component, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {EssenceUpdateComponent} from '../essence-update/essence-update.component';
import {EssenceService} from '../service/essence.service';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {EssenceCreationComponent} from '../essence-creation/essence-creation.component';
import {Essence_2} from '../../../models/Models';
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {askConfirmation} from '@angular/cli/src/utilities/prompt';
import {_confirmation, _deletion, _warning} from '../../../models/notification';
import {forkJoin} from 'rxjs';





@Component({
  selector: 'app-essence-list',
  imports: [
    NgClass,
    EssenceUpdateComponent,

    EssenceCreationComponent,
    NgxPaginationModule,
    ReactiveFormsModule

  ],
  templateUrl: './essence-list.component.html',
  standalone: true,
  styleUrl: './essence-list.component.css'
})
export class EssenceListComponent implements OnInit{

  protected  qtMoy! : number ;

  public searchForm  = new FormGroup({
      keyword : new FormControl()
  })




  public  entete = ["No" , "Essence du bois" , "Abbreviation" , "Densité" , "Mercuriale" , "Teneur en Eau" , "Action"] ;


  public essences : Essence_2[] = [];
  protected currentPage!: number;
  constructor(protected service : EssenceService  ,private router : Router) {
  }
  ngOnInit(): void {
      this.getAllEssence();
    setInterval(()=> {if(this.service.createEssence){
      this.getAllEssence() ;this.service.createEssence = false; }} , 5000)
  }



  getAllEssence(){
      forkJoin({essence : this.service.getAllEssence() , qtMoy : this.service.qtMoy() }).subscribe({
        next :(result)=>{
          this.essences = result.essence;
          this.service.change = true ;
          localStorage.setItem("qtMoy" , String(result.qtMoy));
          localStorage.setItem("qtEssence" , String( this.essences.length)) ;
          setTimeout(()=>{ this.service.change = false ; } , 2000)

      }})



  }
  modifier(essence : Essence_2) {
    this.service.hide = "modifier";
    this.service.setEssence(essence);

  }

  ajouter() {
    this.service.hide = "ajouter";
  }

  pageChanged($event: number) {
    this.currentPage = $event ;
  }

  search(){
      console.log(this.searchForm.getRawValue().keyword)
      if(this.searchForm.getRawValue().keyword !=  ""){
          this.service.searching(String(this.searchForm.getRawValue().keyword)).subscribe(data =>{

              this.essences = data ;

          } , error => {
              console.log(error)
          })
      }
      else{
          this.getAllEssence();
      }
  }


  async delete(id: number) {
    let response: boolean = await _deletion("Voulez-vous supprimer cette essence?");

    if (!response) return;
    this.service.delete(id).subscribe(data => {
           this.getAllEssence();
    }, error => {
      console.log(error)
      _warning("Cette essence ne peut pas etre supprimer...Vérifier si aucune autre donnée n'est reliée a cette essence")
    })
  }
}
