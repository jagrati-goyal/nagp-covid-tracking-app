import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { NewsComponent } from 'src/app/news/news.component';
import { AddNewsComponent } from 'src/app/news/add-news/add-news.component';
import { PagenotfoundComponent } from 'src/app/shared/pagenotfound/pagenotfound.component';
import { PrecautionsComponent } from 'src/app/precautions/precautions.component';
import { DistrictDataComponent } from 'src/app/dashboard/district-data/district-data.component';
import { AdminLoginComponent } from 'src/app/auth/admin-login/admin-login.component';
import { AddNewsActivateGuard } from 'src/app/auth/addnews-activate.guard';
import { AdminLogoutComponent } from 'src/app/auth/admin-logout/admin-logout.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard/state/:state', component: DistrictDataComponent },
    { path: 'news', component: NewsComponent },
    { path: 'news/add', component: AddNewsComponent, canActivate: [AddNewsActivateGuard] },
    { path: 'precautions', component: PrecautionsComponent },
    { path: 'login', component: AdminLoginComponent },
    { path: 'logout', component: AdminLogoutComponent },
    { path: '**', component: PagenotfoundComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    constructor() {
        console.log("App routing module loaded");
    }
}