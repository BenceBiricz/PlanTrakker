import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { VideoInterface } from './interfaces/video-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  @ViewChild('backButton') backButton!: ElementRef;
  adVideos: VideoInterface[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.adVideos.push(
      {
        id: 1,
        name: 'date',
        title: 'Date ideas',
        text: 'Explore urban wonders and iconic landmarks',
        videoUrl: 'assets/parlament.mp4',
      },
      {
        id: 2,
        name: 'birthday',
        title: 'The perfect birthday',
        text: 'Glide gracefully on a frozen wonderland',
        videoUrl: 'assets/skating.mp4',
      },
      {
        id: 3,
        name: 'bachelor',
        title: 'Hen & stag parties',
        text: 'Drift away on tranquil waters and scenic vistas',
        videoUrl: 'assets/danube.mp4',
      },
      {
        id: 4,
        name: 'indoor',
        title: 'Indoor activities',
        text: `Embark on nature's path to adventure and serenity`,
        videoUrl: 'assets/hiking.mp4',
      },
      {
        id: 5,
        name: 'outdoor',
        title: 'Outdoor activities',
        text: 'Let loose and celebrate in style under city lights',
        videoUrl: 'assets/pool.mp4',
      },
      {
        id: 6,
        name: 'explore',
        title: 'Explore Budapest',
        text: 'Splash into a world of fun and excitement in the water realm',
        videoUrl: 'assets/danube.mp4',
      }
    );
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
