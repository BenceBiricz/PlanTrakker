import { BundlesItemInterface } from './interfaces/bundles-item-interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BundleBox } from './interfaces/bunlde-box-interface';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FireStoreService } from '../../shared/components/services/fireStoreService';

@Component({
  selector: 'app-bundles-page',
  templateUrl: './bundles-page.component.html',
  styleUrl: './bundles-page.component.scss',
})
export class BundlesPageComponent implements OnInit {
  bundleBoxes: BundleBox[] = [];
  bunldeItems: BundlesItemInterface[] = [];
  choosenBundle = '';
  bundleServerData: any;
  title: string = '';
  subtitleOne: string = '';
  subtitleTwo: string = '';

  mobileMode = false;

  constructor(
    private readonly breabpointObserver: BreakpointObserver,
    private fireStoreService: FireStoreService,
    private router: Router
  ) {}

  searchById(array: any, id: string) {
    return array.find((obj: any) => obj.id === id);
  }

  ngOnInit(): void {
    this.choosenBundle = this.router.url.split('/').pop()!; //  /routename

    this.fireStoreService.getData().subscribe((data: any) => {
      this.bundleBoxes = [];
      this.bundleServerData = this.searchById(data, this.choosenBundle);

      if (this.bundleServerData.main) {
        this.title = this.bundleServerData.main.title;
        this.subtitleOne = this.bundleServerData.main?.subTitleOne;
        this.subtitleTwo = this.bundleServerData.main?.subTitleTwo;
      }

      var packages = this.bundleServerData.packages;

      for (let i = 0; i < packages.length; i++) {
        this.bunldeItems = [];

        for (let j = 0; j < packages[i].name.length; j++) {
          this.bunldeItems.push({
            title: packages[i].name[j],
            svgPath: 'assets/bundles/' + packages[i].iconPath[j] + '.svg',
          });
        }

        this.bundleBoxes.push({
          title: packages[i].title,
          item: this.bunldeItems,
        });
      }
    });

    this.breabpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        this.mobileMode = false;
        if (result.matches) {
          this.mobileMode = true;
        }
      });
  }
}
