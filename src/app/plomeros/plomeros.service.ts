import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlomerosService {

  constructor() { }

  async getPlomeros(){
    const res = await fetch('http://localhost:8080/plomero');
    const resjson = (await res).json()
    return resjson
  }
}
