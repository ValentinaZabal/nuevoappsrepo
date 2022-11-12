import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GasistasService {

  constructor() { }

  async getGasistas(){
    const res = await fetch('http://localhost:8080/gasista');
    const resjson = (await res).json()
    return resjson
  }
}
