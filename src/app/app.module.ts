import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { initialNavigation : false } 
    )
  ],
//providers: [],
providers: [{provide: APP_BASE_HREF, useValue: window.location.href}],
//providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
 bootstrap: [AppComponent]
})
export class AppModule {}
