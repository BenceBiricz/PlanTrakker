import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PackagePageComponent } from './pages/package-page/package-page.component';
import { BundlesPageComponent } from './pages/bundles-page/bundles-page.component';
import { BlogsPageComponent } from './pages/blogs-page/blogs-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
  },
  {
    path: 'bundles/:packageId/:packageName',
    component: BundlesPageComponent,
  },
  {
    path: 'packages/:packageId/:packageName',
    component: PackagePageComponent,
  },
  {
    path: 'about-us',
    component: AboutUsPageComponent,
  },
  {
    path: 'blogs',
    component: BlogsPageComponent,
  },
  {
    path: '**',
    redirectTo: 'main',
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
