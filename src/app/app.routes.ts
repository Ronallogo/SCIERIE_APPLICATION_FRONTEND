import { Routes } from '@angular/router';
import {EssenceListComponent} from './Page/essence/essence-list/essence-list.component';
import {EssenceComponent} from './Page/essence/body/essence.component';

export const routes: Routes = [

  {path:"essenceList" , component:EssenceListComponent   },
  {path:"essence" , component:EssenceComponent   }

];
