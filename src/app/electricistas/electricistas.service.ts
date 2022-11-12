import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectricistasService {

  constructor() { }

  async getElectricistas(){
    const res = await fetch('http://localhost:8080/electricista');
    const resjson = (await res).json()
    return resjson
  }
}
