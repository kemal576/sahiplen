import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertCreateComponent } from './advert-create/advert-create.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';
import { AdvertListComponent } from './advert-list/advert-list.component';
import { AuthenticationGuard } from './authentication.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'advertlist', component: AdvertListComponent, canActivate: [AuthenticationGuard] },
  { path: 'advert/:advertId', component: AdvertDetailsComponent, canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'requests', component: RequestsComponent, canActivate: [AuthenticationGuard] },
  { path: 'create-advert', component: AdvertCreateComponent, canActivate: [AuthenticationGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
