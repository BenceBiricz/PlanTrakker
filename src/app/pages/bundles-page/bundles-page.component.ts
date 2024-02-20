import { BundlesInterface } from './interfaces/bundle-interface';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-bundles-page',
  templateUrl: './bundles-page.component.html',
  styleUrl: './bundles-page.component.scss',
})
export class BundlesPageComponent implements OnInit {
  packageCards: BundlesInterface[] = [];

  constructor(private readonly route: Router) {}

  ngOnInit() {
    this.packageCards.push(
      {
        id: this.createId(),
        header: 'Header1',
        title: 'First',
        body: 'Sample',
      },
      {
        id: this.createId(),
        header: 'Header2',
        title: 'Second',
        body: 'Sample',
      },
      {
        id: this.createId(),
        header: 'Header3',
        title: 'Third',
        body: 'Sample',
      },
      {
        id: this.createId(),
        header: 'Header3',
        title: 'Third',
        body: 'Sample',
      },
      {
        id: this.createId(),
        header: 'Header3',
        title: 'Third',
        body: 'Sample',
      },
      {
        id: this.createId(),
        header: 'Header3',
        title: 'Third',
        body: 'Sample',
      }
    );
  }

  createId() {
    let max = 9999;
    let min = 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  navigateToPackage(packageCard: BundlesInterface) {
    this.route.navigate(['/packages', packageCard.id, packageCard.title]);
  }
}
