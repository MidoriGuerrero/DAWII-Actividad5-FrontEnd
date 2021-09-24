import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disponibilidad } from '../models/disponibilidad.model';

const baseUrl="http://localhost:8090/rest/disponibilidad"

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadService {

  constructor(private htttp:HttpClient) {   }

  registraDisponibilidad(obj:Disponibilidad):Observable<any>{
    return this.htttp.post<any>(baseUrl,obj);
  }
}
