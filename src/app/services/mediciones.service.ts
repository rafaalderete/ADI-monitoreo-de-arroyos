import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicion } from '../models/medicion';

@Injectable({
  providedIn: 'root'
})
export class MedicionesService {

  mediciones: Medicion[];

  constructor(private http: HttpClient) { }
  
  readonly URL_API = 'https://adi-monitoreo-de-arroyos.herokuapp.com/medicion';

  getMediciones() {
    return this.http.get(this.URL_API);
  }
}
