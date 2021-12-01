import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvertListComponent } from './advert-list/advert-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoutComponent } from './logout/logout.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestsSentComponent } from './requests-sent/requests-sent.component';
import { RequestsIncomingComponent } from './requests-incoming/requests-incoming.component';
import { AdvertCreateComponent } from './advert-create/advert-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertListComponent,
    AdvertDetailsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HomepageComponent,
    LogoutComponent,
    RequestsComponent,
    RequestsSentComponent,
    RequestsIncomingComponent,
    AdvertCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
