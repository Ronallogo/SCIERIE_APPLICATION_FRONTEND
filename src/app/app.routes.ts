import { Routes } from '@angular/router';
import {EssenceListComponent} from './Page/essence/essence-list/essence-list.component';
import {EssenceComponent} from './Page/essence/body/essence.component';
import { EssenceUpdateComponent } from './Page/essence/essence-update/essence-update.component';
import {EssenceCreationComponent} from './Page/essence/essence-creation/essence-creation.component';
import {ClientComponent} from './Page/client/body/client/client.component';

export const routes: Routes = [

  {path:"essenceList" , component:EssenceListComponent   },
  {path:"essence" , component:EssenceComponent   } ,
  {path:"essenceUpdate" , component:EssenceUpdateComponent   } ,
  {path:"essenceCreation" , component:EssenceCreationComponent   } ,
  {path:"essenceCreation" , component:EssenceCreationComponent   } ,
  {path:"client" , component: ClientComponent   } ,


];
