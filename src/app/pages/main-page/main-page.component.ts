import { Component, OnInit } from '@angular/core';
import { VideoInterface } from './interfaces/video-interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  adVideos: VideoInterface[] = [];

  ngOnInit(): void {
    this.adVideos.push(
      {
        title: 'City Sightseeing',
        text: 'Explore urban wonders and iconic landmarks',
        videoUrl: 'assets/parlament.mp4',
      },
      {
        title: 'Ice-skating',
        text: 'Glide gracefully on a frozen wonderland',
        videoUrl: 'assets/skating.mp4',
      },
      {
        title: 'Boat Ride',
        text: 'Drift away on tranquil waters and scenic vistas',
        videoUrl: 'assets/danube.mp4',
      },
      {
        title: 'Hiking',
        text: `Embark on nature's path to adventure and serenity`,
        videoUrl: 'assets/hiking.mp4',
      },
      {
        title: 'Party',
        text: 'Let loose and celebrate in style under city lights',
        videoUrl: 'assets/party.mp4',
      },
      {
        title: 'Aqua Park',
        text: 'Splash into a world of fun and excitement in the water realm',
        videoUrl: 'assets/pool.mp4',
      }
    );
  }
}
