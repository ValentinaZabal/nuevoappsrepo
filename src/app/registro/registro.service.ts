import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor() { }

async register (usuario) {
  const res = await fetch('http://localhost:8080/usuario', {
    method: "POST",
    body:JSON.stringify(usuario), 
    headers: {'Content-Type': 'application/json'},
})
  const resjson = (await res).json()
  return resjson
}

}
