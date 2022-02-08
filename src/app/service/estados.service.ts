import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../models/estado';

@Injectable()
export class EstadosService {

  constructor(private http: HttpClient) { }

  getEstados() {
return this.http.get<Estado>('../dados/estados.json');
  }

}