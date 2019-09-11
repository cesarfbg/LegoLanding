import { Component } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent {

  stations1 = [
    ['Avengers', 'Estacion_Avengers.jpg', 'Encuentra las 5 gemas del infinito que están escondidas en los contenedores y completa el guante de Thanos.', false],
    ['Construcción Monocromática', 'Estacion_ConstruccionMonocromatica.jpg', 'Ven y realiza fantásticas construcciones en violeta y complementa las de otros participantes si quieres. ¡Te sorprenderás con el resultado!', false],
    ['Crea tu País', 'Estacion_CreaPais.jpg', '¿Cómo crearías a Colombia si tuvieras la posibilidad de construirla con ladrillos LEGO®? Construye lo que piensas que representa a tu país y ubícalo en la región que desees dentro del mapa.', false],
    ['Galería de arte', 'Estacion_GaleriaArte.jpg', 'Saca a relucir tu artista interior, utilizando una amplia gama de ladrillos de colores LEGO®, con los que podrás realizar las obras más creativas para luego exhibirlas dentro de nuestra galería.  Podrás contar con la ayuda de nuestro crítico de arte si lo deseas.', false],
    ['Photo Opportunity Harry Potter™', 'Estacion_HarryPotter.jpg', 'Disfrázate de tus personajes favoritos de Harry Potter™, tómate una foto con ellos y llévate un recuerdo de esta gran aventura. Vive la experiencia al saber qué dice el sombrero seleccionador sobre tu casa en Hogwarts (Gryffindor, Hufflepuff, Ravenclaw o Slytherin).', false],
    ['Lago duplo', 'Estacion_LagoDuplo.jpg', 'En este gran lago de Duplo™, lo más pequeños podrán dejar volar su imaginación con los ladrillos de LEGO® diseñados especialmente para ellos.', false],
    ['LEGO® city', 'Estacion_LegoCity.jpg', 'Crea las más divertidas aventuras en esta ciudad, ayudándonos a resolver diferentes misiones.', false],
    ['LEGO® friends', 'Estacion_LegoFriends.jpg', 'Da un gran concierto para tus amigos como un artista, con los accesorios que encontrarás en el camerino. Además, podrás construir con Andrea, Mia, Emma, Olivia y Stephanie nuevas aventuras dentro de Harley City.', false],
    ['Tienda LEGO®', '', 'Aquí encontrarás las mejores Minifiguras, ladrillos y ediciones especiales que LEGO® tiene para ti.', false]
  ];

  stations2 = [
    ['LEGO® Mike', 'Estacion_LegoMike.jpg', 'Diviértete y pon mucha atención a las indicaciones que te dará Mike dentro de esta estación. Construye la torre más alta, el puente más resistente, la mejor pizza o hamburguesa.', false],
    ['Mar LEGO®', 'Estacion_MarLego.jpg', 'Nada en medio de infinitos ladrillos de colores LEGO® y construye todo lo que puedas imaginar.', false],
    ['Modelos LEGO®', 'Estacion_ModeloLEGO.jpg', '¡Bienvenido a la alfombra roja! Tómate foto con las celebridades más importantes de Lego®.', false],
    ['NINJAGO®', 'Estacion_Ninjago.jpg', 'Piensa, muévete y construye como un NINJA de LEGO® NINJAGO™. Después deberás completar 2 retos contra reloj que desafiarán tus habilidades NINJA.', false],
    ['Rampas de Carreras', 'Estacion_Rampas.jpg', 'Construye el vehículo más veloz en la zona de PITS y pon a prueba su desempeño y resistencia en las increíbles rampas. Si quedas entre los tres primeros subirás a celebrar en el podio. En sus marcas, ¿listos? ¡Fuera!', false],
    ['Star Wars™', 'Estacion_StarWars.jpg', 'Intercepta al enemigo y junto a tu equipo construye una increíble nave a toda velocidad, ¡Deprisa! no cuentas con mucho tiempo.', false],
    ['Zona de Desafíos', 'Estacion_ZonadeDesafios.jpg', 'El tiempo corre y tienes pocos minutos para construir la creación de LEGO® que te indicará nuestro explorador. ', false],
    ['Sala LEGO®', '', 'Este espacio está equipado para mantener a tus papás a salvo mientras los encuentras.', false],
    ['Building Happening', '', 'Siguiendo las instrucciones del guía, vas a construir partes de este camión de bomberos, así entre todos vamos a hacer el camión más grande que haya existido.', false]
  ];

  show( idx, arr ) {
    if ( arr === 1) {
      this.stations1[idx][3] = !this.stations1[idx][3];
    } else if (arr === 2) {
      this.stations2[idx][3] = !this.stations2[idx][3];
    }
  }

}
