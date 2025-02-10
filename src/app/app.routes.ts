import { Routes } from '@angular/router';
import {EssenceListComponent} from './Page/essence/essence-list/essence-list.component';
import {EssenceComponent} from './Page/essence/body/essence.component';
import { EssenceUpdateComponent } from './Page/essence/essence-update/essence-update.component';
import {EssenceCreationComponent} from './Page/essence/essence-creation/essence-creation.component';
import {ClientComponent} from './Page/client/body/client/client.component';
import {GrumeComponent} from './Page/grume/grume/grume.component';
import {FournisseurComponent} from './Page/fournisseur/fournisseur/fournisseur.component';
import {PortVillePaysComponent} from './Page/port_ville_pays/port-ville-pays/port-ville-pays.component';
import {TraitementComponent} from './Page/traitement/traitement/traitement.component';


export const routes: Routes = [
  { path: '', redirectTo: 'essence', pathMatch: 'full' },
  { path: 'essenceList', component: EssenceListComponent },
  { path: 'essence', component: EssenceComponent },
  { path: 'essenceUpdate', component: EssenceUpdateComponent },
  { path: 'essenceCreation', component: EssenceCreationComponent },
  { path: 'client', component: ClientComponent },
  { path: 'grume', component: GrumeComponent },
  { path: 'fournisseur', component: FournisseurComponent },
  { path: 'port-ville-pays', component:  PortVillePaysComponent },
  { path: 'traitement', component:   TraitementComponent },


];
