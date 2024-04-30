import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
    slidesStore: any = [
    {
      title: 'Route',
      alt: 'Student intern',
      st: 'Start',
      dateSt: 'july 2023',
      end: 'End',
      daternd: 'October 2023',
    },
    {
      title: 'Route',
      alt: 'Student intern',
      st: 'Start',
      dateSt: 'October 2023',
      end: 'End',
      daternd: 'February 2024',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
