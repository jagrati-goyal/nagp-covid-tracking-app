import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { NewsInMemoryDataService } from './core/services/news-in-memory-data.service';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './core/approuting/app-routing.module';
import { PrecautionsComponent } from './precautions/precautions.component';
import { StatesDataComponent } from './dashboard/states-data/states-data.component';
import { DistrictDataComponent } from './dashboard/district-data/district-data.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { AdminLogoutComponent } from './auth/admin-logout/admin-logout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    AddNewsComponent,
    NewsDetailsComponent,
    DashboardComponent,
    PagenotfoundComponent,
    PrecautionsComponent,
    StatesDataComponent,
    DistrictDataComponent,
    AdminLoginComponent,
    AdminLogoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      NewsInMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
