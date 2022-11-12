import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtrosserviciosService {

  constructor() { }

  async getOtrosServicios(){
    const res = await fetch('http://localhost:8080/otroServicio');
    const resjson = (await res).json()
    return resjson
  }
}
