import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { ElectricistasService } from './electricistas.service';


@Component({
  selector: 'app-electricistas',
  templateUrl: './electricistas.page.html',
  styleUrls: ['./electricistas.page.scss'],
})
export class ElectricistasPage implements OnInit {

  constructor(private menuCtrl: MenuController, private electricistasService: ElectricistasService,
    public alertController: AlertController) { 

  }
  onClick()
  {
    this.menuCtrl.toggle();
  }

  electricistas = []
  todosLosElectricistas = []

  ngOnInit(){
    this.getElectricistas()
  }

  async getElectricistas() {
    this.electricistas = await this.electricistasService.getElectricistas()
    console.table(this.electricistas);
    this.todosLosElectricistas = Array.from(this.electricistas)
  }
}
