import { Component, Input, AfterViewInit, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselComponent implements AfterViewInit {
  @Input() urlImages: string[] = [];

  @ViewChild('swiperContainer') swiperContainer!: ElementRef<SwiperContainer>;

  ngAfterViewInit(): void {
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
  }
}
