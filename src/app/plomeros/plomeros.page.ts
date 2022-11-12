import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { PlomerosService } from './plomeros.service';


@Component({
  selector: 'app-plomeros',
  templateUrl: './plomeros.page.html',
  styleUrls: ['./plomeros.page.scss'],
})
export class PlomerosPage implements OnInit {

  constructor(private  plomerosService:PlomerosService, private menuCtrl: MenuController,
    public alertController: AlertController) { 

  }
  onClick() 
  {
    this.menuCtrl.toggle();
  }

  plomeros = []
  todosLosPlomeros = []

  ngOnInit(){
    this.getPlomeros()
  }

  async getPlomeros() {
    this.plomeros = await this.plomerosService.getPlomeros()
    console.table(this.plomeros);
    this.todosLosPlomeros = Array.from(this.plomeros)

  }

}
