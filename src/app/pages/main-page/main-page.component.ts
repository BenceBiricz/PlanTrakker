import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { VideoInterface } from './interfaces/video-interface';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  @ViewChild('backButton') backButton!: ElementRef;
  adVideos: VideoInterface[] = [];

  mainVideoPath = 'assets/smaller/main-video.mp4';

  mobileMode = false;

  constructor(
    private router: Router,
    private readonly breabpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breabpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        this.mobileMode = false;
        if (result.matches) {
          this.mobileMode = true;
        }
      });

    this.adVideos.push(
      {
        id: 1,
        name: 'date',
        title: 'Date ideas',
        text: 'Crafting unforgettable moments for lasting connections.',
        videoUrl: 'assets/smaller/date.mp4',
      },
      {
        id: 2,
        name: 'birthday',
        title: 'The perfect birthday',
        text: 'Making every birthday moment truly exceptional.',
        videoUrl: 'assets/smaller/skating.mp4',
      },
      {
        id: 3,
        name: 'bachelor',
        title: 'Hen & stag parties',
        text: 'Planning unforgettable pre-wedding celebrations together.',
        videoUrl: 'assets/smaller/party.mp4',
      }
      // {
      //   id: 4,
      //   name: 'indoor',
      //   title: 'Indoor activities',
      //   text: `Find Homebound Happiness with Indoor Activities.`,
      //   videoUrl: 'assets/smaller/indoor.mp4',
      // },
      // {
      //   id: 5,
      //   name: 'outdoor',
      //   title: 'Outdoor activities',
      //   text: `Embrace Nature's Playground for Fun.`,
      //   videoUrl: 'assets/smaller/pool.mp4',
      // },
      // {
      //   id: 6,
      //   name: 'explore',
      //   title: 'Explore Budapest',
      //   text: `Immersing in Budapest's Beauty`,
      //   videoUrl: 'assets/smaller/danube.mp4',
      // }
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
        //else {
        //entry.target.classList.remove('show');
        //}
      });
    });

    const hiddenELements = document.querySelectorAll('.hidden');
    hiddenELements.forEach((el) => {
      observer.observe(el);
    });
  }

  srollTo(fragment: string) {
    this.router.navigateByUrl('main#' + fragment);
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll($event: any) {
    const threshold = 500; // Change this value to set the scroll threshold for background color change
    const button = this.backButton.nativeElement.style;

    const verticalOffset =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (verticalOffset > threshold) {
      button.opacity = 1;
    } else {
      button.opacity = 0;
    }
  }
}
