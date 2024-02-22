import { Component, HostListener, OnInit } from '@angular/core';
import { BlogCaption } from './interfaces/blog-caption-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrl: './blogs-page.component.scss',
})
export class BlogsPageComponent implements OnInit {
  blogs: BlogCaption[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.blogs.push(
      {
        title: '47 Bachelor Party Ideas for Every Groom',
        text: 'Fill your bachelor party with groom-approved activities. From weekend getaways to nighttime options, explore the best and most unique bachelor party ideas.',
        url: 'https://www.zola.com/expert-advice/bachelor-party-ideas',
        img: 'assets/blogs/bachelor.jpg',
        id: 'first',
      },
      {
        title: '10 Tips for Outdoor Adventure Vacations',
        text: 'In recent years, wellness trips have become increasingly popular, with many travelers seeking adventure vacations that offer a combination of physical activity, natural beauty and personal growth.',
        url: 'https://vacayou.com/magazine/top-10-tips-outdoor-adventure-vacations/',
        img: 'assets/blogs/adventure.jpg',
      },
      {
        title: 'Top 20 Rainy Day Activities',
        text: ' We’ve put together a list of 20 kid-approved activities to combat that inevitable boredom, or you can just store them in your back pocket and save them for a rainy day.',
        url: 'https://sunshinehouse.com/blog/top-20-rainy-day-activities/',
        img: 'assets/blogs/rain.jpg',
      },
      {
        title: 'Best Indoor Activities for Adults of All Ability Levels',
        text: 'Indoor activities for older adults are varied and can include anything from gentle exercises such as Tai Chi, yoga, and Pilates, to games and puzzles, reading, art projects, and even gardening.',
        url: 'https://www.considracare.com/indoor-activities-for-adults/',
        img: 'assets/blogs/puzzle.jpg',
      },
      {
        title: '25 Fun & Easy Dinners to Make If You’re Bored',
        text: 'Cooking at home is one of those things that’s truly great if you enjoy cooking and is truly miserable if you don’t. ',
        url: 'https://theeverygirl.com/dinners-to-make-if-youre-bored-with-cooking-at-home/',
        img: 'assets/blogs/cooking.jpg',
        id: 'last',
      }
    );
  }

  onClick(blogUrl: string) {
    window.open(blogUrl);
  }

  scrollTo() {
    document.getElementById('blogsid')!.scrollLeft -= 200;
  }
}
