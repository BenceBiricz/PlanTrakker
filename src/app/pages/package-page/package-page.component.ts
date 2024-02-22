import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageInterface } from './interfaces/package-interface';

@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrl: './package-page.component.scss',
})
export class PackagePageComponent implements OnInit {
  packageCards: PackageInterface[] = [];

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

  navigateToPackage(packageCard: PackageInterface) {
    this.route.navigate(['/packages', packageCard.id, packageCard.title]);
  }
}
