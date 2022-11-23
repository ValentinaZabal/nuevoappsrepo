import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { PlomerosService } from './plomeros.service';


@Component({
  selector: 'app-plomeros',
  templateUrl: './plomeros.page.html',
  styleUrls: ['./plomeros.page.scss'],
})
export class PlomerosPage implements OnInit {

  constructor(private  plomerosService:PlomerosService, private menuCtrl: MenuController,
    public alertController: AlertController, private toastController: ToastController) { 

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

  async agregarFav(){
    const toast = await this.toastController.create({
      message:'Agregado a favorito exitosamente',
      duration:1500,
    });
    await toast.present();
  }

}
