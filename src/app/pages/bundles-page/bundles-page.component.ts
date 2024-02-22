import { BundlesItemInterface } from './interfaces/bundles-item-interface';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BundleBox } from './interfaces/bunlde-box-interface';

@Component({
  selector: 'app-bundles-page',
  templateUrl: './bundles-page.component.html',
  styleUrl: './bundles-page.component.scss',
})
export class BundlesPageComponent implements OnInit {
  bundleBoxes: BundleBox[] = [];
  bunldeItems: BundlesItemInterface[] = [];

  ngOnInit(): void {
    this.bundleBoxes.push(
      {
        title: 'Creative and tasty',
        item: [
          {
            title: 'Chimney Cake Workshop',
            svgPath: 'assets/bundles/chimney.svg',
          },
          {
            title: 'Budapest Eye',
            svgPath: 'assets/bundles/eye.svg',
          },
          {
            title: 'Dinner at Divine Porcello',
            svgPath: 'assets/bundles/dinner.svg',
          },
        ],
      },
      {
        title: 'Active date',
        item: [
          {
            title: 'Cyber Jump - Trampoline Park',
            svgPath: 'assets/bundles/jump.svg',
          },
          {
            title: 'Cofee break at Ruszwurm',
            svgPath: 'assets/bundles/coffee.svg',
          },
          {
            title: 'Sightseeing cruise with unlimited prosecco',
            svgPath: 'assets/bundles/ship.svg',
          },
        ],
      },
      {
        title: 'Relaxing Day',
        item: [
          {
            title: 'Brunch at Zoska',
            svgPath: 'assets/bundles/croissant.svg',
          },
          {
            title: 'Dandár Thermal Bath',
            svgPath: 'assets/bundles/bath.svg',
          },
          {
            title: 'Cinema Mystica Exhibition',
            svgPath: 'assets/bundles/ticket.svg',
          },
        ],
      }
    );
  }
}
