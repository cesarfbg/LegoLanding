import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {

  ticketText1 = '¿Aún no decides que día ir?';
  ticketText2 = 'Asegura tu visita el día que quieras con el pase Free Day';

  items = [
    ['Niño (Lun a Jue)', '$ 11.500'],
    ['Adulto (Lun a Jue)', '$ 13.500'],
    ['Niño (V-S-D-Fest)', '$ 20.500'],
    ['Adulto (V-S-D-Fest)', '$ 25.000'],
    ['Free Day Niño', '$ 23.500'],
    ['Free Day Adulto', '$ 28.500']
  ];

}
