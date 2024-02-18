import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('navLinks') navLinks!: ElementRef;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll($event: any) {
    const threshold = 100; // Change this value to set the scroll threshold for background color change
    const navbarStlyle = this.navbar.nativeElement.style;
    const verticalOffset =
      document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (verticalOffset > threshold) {
      navbarStlyle.backgroundColor = 'black';
      navbarStlyle.opacity = '0.85';
      navbarStlyle.boxShadow = '0 10px 50px rgba(0, 0, 0, 0.3)';
      this.navLinks.nativeElement.style.color = '#f2f2f2';
    } else {
      navbarStlyle.backgroundColor = '#f2f2f2';
      navbarStlyle.opacity = '1';
      navbarStlyle.boxShadow = '0 0 0 rgba(0, 0, 0)';
      this.navLinks.nativeElement.style.color = 'black';
    }
  }
}
