import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { OtrosserviciosService } from './otrosservicios.service';

@Component({
  selector: 'app-otroservicio',
  templateUrl: './otroservicio.page.html',
  styleUrls: ['./otroservicio.page.scss'],
})
export class OtroservicioPage implements OnInit {

constructor(private menuCtrl: MenuController, private  otrosseerviciosService:OtrosserviciosService, public alertController: AlertController) { 

  }
  onClick() 
  {
    this.menuCtrl.toggle();
  }

  otrosservicios = []

  ngOnInit(){
    this.getOtrosServicios()
  }

  async getOtrosServicios() {
    this.otrosservicios = await this.otrosseerviciosService.getOtrosServicios()
    console.table(this.otrosservicios);
  }
}

