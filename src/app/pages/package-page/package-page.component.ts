import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrl: './package-page.component.scss',
})
export class PackagePageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id = +params.get('packageId')!;
      console.log(id);
    });
  }
}
