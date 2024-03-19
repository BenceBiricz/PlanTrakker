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

    this.bundleBoxes = [];
    this.bunldeItems = [];

    if (this.choosenBundle === 'date') {
      this.title = 'Perfect Date';
      this.subtitleOne = 'Are you confused about what to with your loved one?';
      this.subtitleTwo =
        'Choose a ready-made package and enjoy a day of perfection!';

      this.bundleBoxes.push(
        {
          title: 'Creative and tasty',
          item: [
            {
              title: 'Chimney Cake Workshop',
              svgPath: 'assets/bundles/' + 'chimney' + '.svg',
            },
            {
              title: 'Budapest Eye',
              svgPath: 'assets/bundles/' + 'eye' + '.svg',
            },
            {
              title: 'Dinner at Divine Porcello',
              svgPath: 'assets/bundles/' + 'dinner' + '.svg',
            },
          ],
        },
        {
          title: 'Active date',
          item: [
            {
              title: 'Cyber Jump - Trampoline Park',
              svgPath: 'assets/bundles/' + 'jump' + '.svg',
            },
            {
              title: 'Cofee break at Ruszwurm',
              svgPath: 'assets/bundles/' + 'coffee' + '.svg',
            },
            {
              title: 'Sightseeing cruise with unlimited prosecco',
              svgPath: 'assets/bundles/' + 'ship' + '.svg',
            },
          ],
        },
        {
          title: 'Relaxing day',
          item: [
            {
              title: 'Brunch at Zoska',
              svgPath: 'assets/bundles/' + 'croissant' + '.svg',
            },
            {
              title: 'Dandár Thermal Bath',
              svgPath: 'assets/bundles/' + 'bath' + '.svg',
            },
            {
              title: 'Cinema Mystica Exhibition',
              svgPath: 'assets/bundles/' + 'ticket' + '.svg',
            },
          ],
        }
      );
    }

    if (this.choosenBundle === 'birthday') {
      this.title = 'The perfect birthday';

      this.subtitleOne =
        'The perfect birthday celebration begins with thoughtful planning.';
      this.subtitleTwo =
        'From selecting the ideal venue to curating personalized gifts, every detail contributes to creating the perfect birthday experience.';

      this.bundleBoxes.push(
        {
          title: 'Quiet ones',
          item: [
            {
              title: 'House of Music Hungary',
              svgPath: 'assets/bundles/' + 'music' + '.svg',
            },
            {
              title: 'Tipo kávézó',
              svgPath: 'assets/bundles/' + 'coffee' + '.svg',
            },
            {
              title: 'Tasting Table - wine tasting',
              svgPath: 'assets/bundles/' + 'wine' + '.svg',
            },
          ],
        },
        {
          title: 'Fun ones',
          item: [
            {
              title: 'Pix Budapest - Self Photo Studio',
              svgPath: 'assets/bundles/' + 'eye' + '.svg',
            },
            {
              title: 'Pirate Empire / The Magic Budapest',
              svgPath: 'assets/bundles/' + 'dinner' + '.svg',
            },
            {
              title: 'VR Vidámpark',
              svgPath: 'assets/bundles/' + 'tv' + '.svg',
            },
          ],
        },
        {
          title: 'Party animals',
          item: [
            {
              title: 'Unicum tasting at Unicum Ház',
              svgPath: 'assets/bundles/' + 'wine' + '.svg',
            },
            {
              title: 'Blue Bird Karaoke Room',
              svgPath: 'assets/bundles/' + 'music' + '.svg',
            },
            {
              title: 'Sparty - Széchenyi Bath Party',
              svgPath: 'assets/bundles/' + 'bath' + '.svg',
            },
          ],
        }
      );
    }

    if (this.choosenBundle === 'bachelor') {
      this.title = 'Hen & Stag party';
      this.subtitleOne =
        'From bar-hopping to daring dares, the Hen & Stag party was a wild ride from start to finish.';
      this.subtitleTwo =
        'Looking for the perfect way to kick off your wedding festivities? Look no further – our Hen & Stag party packages guarantee an epic celebration like no other!';

      this.bundleBoxes.push(
        {
          title: 'Hen',
          item: [
            {
              title: 'Spa Session at Mandala Day',
              svgPath: 'assets/bundles/' + 'bath' + '.svg',
            },
            {
              title: 'Trabant City Tour',
              svgPath: 'assets/bundles/' + 'ticket' + '.svg',
            },
            {
              title: 'Life Drawing with Male model',
              svgPath: 'assets/bundles/' + 'tv' + '.svg',
            },
          ],
        },
        {
          title: 'Stag',
          item: [
            {
              title: 'Escape Room - Horror Factory escape room',
              svgPath: 'assets/bundles/' + 'ticket' + '.svg',
            },
            {
              title: 'Beer Tasting at Brew Studio',
              svgPath: 'assets/bundles/' + 'wine' + '.svg',
            },
            {
              title: 'Laser Park Budapest',
              svgPath: 'assets/bundles/' + 'jump' + '.svg',
            },
          ],
        },
        {
          title: 'Both',
          item: [
            {
              title: 'Enter bar - bowling, darts',
              svgPath: 'assets/bundles/' + 'ticket' + '.svg',
            },
            {
              title: 'Sightseeing Cruise with unlimited prosecco',
              svgPath: 'assets/bundles/' + 'wine' + '.svg',
            },
            {
              title: 'Tipsy Tour - Fun Bar Crawl',
              svgPath: 'assets/bundles/' + 'wine' + '.svg',
            },
          ],
        }
      );
    }

    // this.fireStoreService.getData().subscribe((data: any) => {
    //   this.bundleBoxes = [];
    //   this.bundleServerData = this.searchById(data, this.choosenBundle);

    //   if (this.bundleServerData.main) {
    //     this.title = this.bundleServerData.main.title;
    //     this.subtitleOne = this.bundleServerData.main?.subTitleOne;
    //     this.subtitleTwo = this.bundleServerData.main?.subTitleTwo;
    //   }

    //   var packages = this.bundleServerData.packages;

    //   for (let i = 0; i < packages.length; i++) {
    //     this.bunldeItems = [];

    //     for (let j = 0; j < packages[i].name.length; j++) {
    //       this.bunldeItems.push({
    //         title: packages[i].name[j],
    //         svgPath: 'assets/bundles/' + packages[i].iconPath[j] + '.svg',
    //       });
    //     }

    //     this.bundleBoxes.push({
    //       title: packages[i].title,
    //       item: this.bunldeItems,
    //     });
    //   }
    // });

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
