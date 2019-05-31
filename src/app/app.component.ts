import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'monblogvoyage';  
  
  posts = [
    {
      title: "Japon",
      content: "Magnifique voyage, arrivée à tokyo. visite de Kamakura et tous les temples de la région. Beaucoup de temples à visiter. Nous sommes ensuite partis à Kyoto pour 3 nuits. Visite du musée du manga où nous sommes repartis avec une caricature. Le sentiment de sécurité et de sérénité ne nous a pas quitté. Très romantique et reposant.Retour à Tokyo pour repartir en France.",
      loveIts: 1,
      created_at: new Date(2014, 5, 28, 23,8,59,351)
    },
    {
      title: "Canada",
      content: "Génial! A faire en camping-car. Arrivée à Montréal puis direction Lac St Jean. Ensuite, direction le St Laurent! Passage par Québec au retour pour retour à Montréal pour rentrer en France",
      loveIts: 0,
      created_at: new Date(2010, 7, 23, 20,15,59,351)
    },
    {
      title: "Maroc",
      content: "Un peu décevant. Balades dans Marakech avec le guide où nous sommes passés dans des quartiers très pauvres. Le boucher avec la viande au soleil et les mouches qui tournent autour. Les enfants qui réalisent des soudures à l'arc avec des lunettes de soleil pour faire des objets à vendre aux touristes. Nous avons adoré Fès, les plaines du Maroc et l'hotel de luxe tout neuf avec piscine quand nous sommes revenus à Marakech.",
      loveIts: -1,
      created_at: new Date(2009, 5, 15, 10,40,59,351)
    }
  ];
}
