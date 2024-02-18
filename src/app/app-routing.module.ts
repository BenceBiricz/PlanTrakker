import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PackagePageComponent } from './pages/package-page/package-page.component';
import { BundlesPageComponent } from './pages/bundles-page/bundles-page.component';
import { BlogsPageComponent } from './pages/blogs-page/blogs-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
  },
  {
    path: 'packages/:packageId/:packageName',
    component: PackagePageComponent,
  },
  {
    path: 'packages',
    component: BundlesPageComponent,
  },
  {
    path: 'blogs',
    component: BlogsPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
