import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentIndex = 0; // Tracks the current slide
  totalSlides = 3; // Number of slides
  slideInterval!: any; // Interval reference for auto-slide

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    // Auto-slide every 3 seconds
    this.slideInterval = setInterval(() => {
      this.goToNextSlide();
    }, 3000);
  }

  goToNextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
  }

  goToPrevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    clearInterval(this.slideInterval);
  }
}
