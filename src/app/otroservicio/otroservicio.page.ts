import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-otroservicio',
  templateUrl: './otroservicio.page.html',
  styleUrls: ['./otroservicio.page.scss'],
})
export class OtroservicioPage implements OnInit {

constructor(private menuCtrl: MenuController) { 

  }
  onClick() 
  {
    this.menuCtrl.toggle();
  }

  ngOnInit() {
  }

  otrosservicios = [
    {
    edad: 18,
    nombre: "Jose Perez",
    rubro:'plomero',
    logo: "./assets/img/persona1.jpg",
    telefono: '+3464560100'
  },
  {
    edad: 18,
    nombre: 'Jose Perez',
    rubro:'plomero',
    logo: "./assets/img/persona2.jpg",
    telefono: '+3464560100'
  },
  {
    edad: 18,
    nombre: 'Jose Perez',
    rubro:'plomero',
    logo: "./assets/img/persona3.jpg",
    telefono: '+3464560100'
  },
  {
    edad: 18,
    nombre: "Jose Perez",
    rubro:'plomero',
    logo: "./assets/img/persona1.jpg",
    telefono: '+3464560100'
  },
  {
    edad: 18,
    nombre: 'Jose Perez',
    rubro:'plomero',
    logo: "./assets/img/persona2.jpg",
    telefono: '+3464560100'
  },
  {
    edad: 18,
    nombre: 'Jose Perez',
    rubro:'plomero',
    logo: "./assets/img/persona3.jpg",
    telefono: '+3464560100'
  }
]

}

