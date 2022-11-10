import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.page.html',
  styleUrls: ['./problemas.page.scss'],
})

export class ProblemasPage implements OnInit {

  constructor(private menuCtrl: MenuController) { 

  }
  onClick()
  {
    this.menuCtrl.toggle();
  }

  ngOnInit() {
  }

  mostrar: Boolean = false;
  respuesta: String = 'hola me estas leyendo';
  respuesta_enlace: String = 'Mostrar';
  
  mostrarOcultar(){
    if(this.mostrar){
      this.mostrar = false;
      this.respuesta_enlace = 'Mostrar';
    }else{
      this.mostrar = true;
      this.respuesta_enlace = 'Ocultar';
    }
  }
  
}


