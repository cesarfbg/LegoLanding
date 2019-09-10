import { Component } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent {

  stations1 = [
    ['Avengers', 'Estacion_Avengers.jpg', 'XXXX XXXX XXXXXX XXXXX XXXXX XXXXX XXXXX XXXX', false],
    ['Construcción Monocromática', 'Estacion_ConstruccionMonocromatica.jpg', 'XXXX XXXX XXXXXX XXXXX XXXXX XXXXX XXXXX XXXX', false],
    ['Crea tu País', 'Estacion_CreaPais.jpg', 'XXXX XXXX XXXXXX XXXXX XXXXX XXXXX XXXXX XXXX', false],
    ['Galería de arte', 'Estacion_GaleriaArte.jpg', 'XXXX XXXX XXXXXX XXXXX XXXXX XXXXX XXXXX XXXX', false],
    ['Photo Opportunity Harry Potter™', 'Estacion_HarryPotter.jpg', 'XXXX XXXX XXXXXX XXXXX XXXXX XXXXX XXXXX XXXX', false],
    ['Lago duplo', 'Estacion_LagoDuplo.jpg', 'XXXX XXXX XXXXXX XXXXX XXXXX XXXXX XXXXX XXXX', false],
    ['LEGO® city', 'Estacion_LegoCity.jpg', 'XXXX XXXX XXXXXX XXXXX XXXXX XXXXX XXXXX XXXX', false],
    ['LEGO® friends', 'Estacion_LegoFriends.jpg', 'XXXX XXXX XXXXXX XXXXX XXXXX XXXXX XXXXX XXXX', false],
    ['LEGO® Mike', 'Estacion_LegoMike.jpg', 'XXXX XXXX XXXXXX XXXXX XXXXX XXXXX XXXXX XXXX', false]
  ];

  stations2 = [
    ['Mar LEGO®', 'Estacion_MarLego.jpg', 'XXXX XXXX XXXXXX XXXXX XXXXX XXXXX XXXXX XXXX', false],
    ['Modelos LEGO®', 'Estacion_ModeloLEGO.jpg', 'XXXX XXXX XXXXXX XXXXX XXXXX XXXXX XXXXX XXXX', false],
    ['NINJAGO®', 'Estacion_Ninjago.jpg', 'XXXX XXXX XXXXXX XXXXX XXXXX XXXXX XXXXX XXXX', false],
    ['Rampas de Carreras', 'Estacion_Rampas.jpg', 'XXXX XXXX XXXXXX XXXXX XXXXX XXXXX XXXXX XXXX', false],
    ['Star Wars™', 'Estacion_StarWars.jpg', 'XXXX XXXX XXXXXX XXXXX XXXXX XXXXX XXXXX XXXX', false],
    ['Zona de Desafíos', 'Estacion_ZonadeDesafios.jpg', 'XXXX XXXX XXXXXX XXXXX XXXXX XXXXX XXXXX XXXX', false]
  ];

  show( idx, arr ) {
    if ( arr === 1) {
      this.stations1[idx][3] = !this.stations1[idx][3];
    } else if (arr === 2) {
      this.stations2[idx][3] = !this.stations2[idx][3];
    }
  }

}
