import { Component, Input, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
// register Swiper custom elements
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselComponent {
  @Input() urlImages: string[] = [];

  @ViewChild('swiperContainer') swiperContainer!: ElementRef<SwiperContainer>;

  constructor() {
    afterNextRender(() => {
      // register Swiper custom elements
      register();

      const swiperOptions: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: true,
        pagination: {
          clickable: true,
        },
        loop: true,
      };

      if (this.swiperContainer) {
        Object.assign(this.swiperContainer.nativeElement, swiperOptions);
        this.swiperContainer.nativeElement.initialize();
      }
    });
  }
}