import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BundlesPageComponent } from './pages/bundles-page/bundles-page.component';
import { PackagePageComponent } from './pages/package-page/package-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BlogsPageComponent } from './pages/blogs-page/blogs-page.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    BundlesPageComponent,
    PackagePageComponent,
    NotFoundPageComponent,
    BlogsPageComponent,
    FooterComponent,
    AboutUsPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
