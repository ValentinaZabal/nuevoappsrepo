import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { GasistasService } from './gasistas.service';

@Component({
  selector: 'app-gasistas',
  templateUrl: './gasistas.page.html',
  styleUrls: ['./gasistas.page.scss'],
})
export class GasistasPage implements OnInit {

  constructor(private menuCtrl: MenuController, private gasistasService: GasistasService,
    public alertController: AlertController) { 

  }
  onClick()
  {
    this.menuCtrl.toggle();
  }


  gasistas = []

  ngOnInit(){
    this.getGasistas()
  }

  async getGasistas() {
    this.gasistas = await this.gasistasService.getGasistas()
    console.table(this.gasistas);
  }
}
