import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-bundles-page',
  templateUrl: './bundles-page.component.html',
  styleUrl: './bundles-page.component.scss',
})
export class BundlesPageComponent {
  packageId = 0;
  packageName = 'firstName';

  max = 100;
  min = 0;

  constructor(private readonly route: Router) {}

  createId() {
    this.packageId =
      Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

  navigateToPackage() {
    this.createId();

    this.route.navigate(['/packages', this.packageId, this.packageName]);
  }
}
