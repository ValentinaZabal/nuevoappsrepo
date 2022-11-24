import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { invalid } from 'moment';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  myDate = Date.now();
 
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private registroService:RegistroService) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'email':new FormControl("",Validators.compose([ Validators.required, Validators.email ])),
      'telefono':new FormControl("",Validators.compose([ Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
      'fechadenacimiento':new FormControl("", Validators.required),
      'usuario': new FormControl("",Validators.compose([ Validators.required, Validators.minLength(6)])),
      'password': new FormControl("", Validators.compose([ Validators.required, Validators.minLength(6)])),
      'confirmacionPassword': new FormControl("", Validators.required),
      'terminosycondiciones': new FormControl("false", Validators.compose([ Validators.required, Validators.requiredTrue ]))
    },
    {
      validators:this.confirmarcontra('password','confirmacionPassword')
    }
    );
  }

  get f(){
    return this.formularioRegistro.controls;
  }

  confirmarcontra(password:any,confirmacionPassword:any){

    return(formGroup:FormGroup)=>{

      const passwordcontrol=formGroup.controls['password']
      const confirmacionpasswordcontrol=formGroup.controls['confirmacionPassword']

      if(confirmacionpasswordcontrol.errors && !confirmacionpasswordcontrol.errors['confirmarcontra']){
        return;
      }

      if(passwordcontrol.value!==confirmacionpasswordcontrol.value){
        confirmacionpasswordcontrol.setErrors({confirmarcontra: true});
      }else{
        confirmacionpasswordcontrol.setErrors(null);
      }
    }


    };


  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;


    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }

    let usuario = {
      nombre: f.nombre,
      apellido: f.apellido,
      email: f.email,
      telefono: f.telefono,
      fechadenacimiento: f.fechadenacimiento,
      nombredeusuario: f.usuario,
      password: f.password,
      terminosycondiciones: f.terminosycondiciones,

    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
    
    this.registroService.register(usuario)
    this.navCtrl.navigateRoot('login');
  }
  
}