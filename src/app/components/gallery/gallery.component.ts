import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  showSlide = false;
  slides = [
    ['assets/images/gallery/Foto6_Preview.jpg', false],
    ['assets/images/gallery/Foto7_Preview.jpg', false],
    ['assets/images/gallery/Foto8_Preview.jpg', false],
    ['assets/images/gallery/Foto9_Preview.jpg', false],
    ['assets/images/gallery/Foto10_Preview.jpg', false],
    ['assets/images/gallery/Foto11_Preview.jpg', false],
    ['assets/images/gallery/Foto7_Preview.jpg', false],
    ['assets/images/gallery/Foto6_Preview.jpg', false],
    ['assets/images/gallery/Foto9_Preview.jpg', false],
    ['assets/images/gallery/Foto8_Preview.jpg', false],
    ['assets/images/gallery/Foto11_Preview.jpg', false],
    ['assets/images/gallery/Foto10_Preview.jpg', false],
    ['assets/images/gallery/Foto6_Preview.jpg', false],
    ['assets/images/gallery/Foto8_Preview.jpg', false],
    ['assets/images/gallery/Foto11_Preview.jpg', false],
    ['assets/images/gallery/Foto7_Preview.jpg', false],
    ['assets/images/gallery/Foto10_Preview.jpg', false],
    ['assets/images/gallery/Foto9_Preview.jpg', false],
  ];

  onClick(idx) {
    this.slides[idx][1] = true;
    this.showSlide = true;
  }

  carouselExit() {
    this.slides.forEach( slide => {
      slide[1] = false;
    });
    this.showSlide = false;
  }

}
