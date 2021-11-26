import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';
import { AdvertListComponent } from './advert-list/advert-list.component';

const routes: Routes = [
  {path:'',component:AdvertListComponent},
  {path:'advert/:advertId',component:AdvertDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
