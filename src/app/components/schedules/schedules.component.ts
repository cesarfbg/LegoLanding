import { Component } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent {

  stations1 = [
    ['Construcción Monocromática', 'station01.jpg', false],
    ['Zona de desafíos', 'station01.jpg', false],
    ['Crea tu País', 'station01.jpg', false],
    ['Lego Mike', 'station01.jpg', false],
    ['Galería de arte', 'station01.jpg', false],
    ['Ninjago', 'station01.jpg', false],
    ['Rampa de carreras', 'station01.jpg', false],
    ['Star wars', 'station01.jpg', false],
    ['Avengers', 'station01.jpg', false]
  ];

  stations2 = [
    ['Lego friends', 'station01.jpg', false],
    ['Lego city', 'station01.jpg', false],
    ['Lago duplo', 'station01.jpg', false],
    ['Modelos lego', 'station01.jpg', false],
    ['Photo Opportunity Harry Potter', 'station01.jpg', false],
    ['Casa papás perdidos', 'station01.jpg', false],
    ['Mar lego', 'station01.jpg', false],
    ['Building Happening', 'station01.jpg', false],
    ['Tienda Lego', 'station01.jpg', false]
  ];

  show( idx, arr ) {
    if ( arr === 1) {
      this.stations1[idx][2] = !this.stations1[idx][2];
    } else if (arr === 2) {
      this.stations2[idx][2] = !this.stations2[idx][2];
    }
  }

}
