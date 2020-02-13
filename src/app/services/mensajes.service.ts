import { Injectable } from '@angular/core';
import { Mensaje } from '../models/mensajes.model';
import { Observable } from 'rxjs';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private readonly mensaje: Mensaje[];

  constructor(private http: HttpClient) {}

   getMensaje(): Observable<Mensaje>{
     return this.http.get(`${environment.apiUrl}`) as Observable<Mensaje>;
   }

   crearMensaje(mensaje: Mensaje): Observable<Mensaje>{
     return this.http.post(`${environment.apiUrl}`, mensaje) as Observable<Mensaje>;
   }

   escuchaMensaje(): WebSocketSubject<Mensaje>{
     return webSocket('ws://157.230.116.173:3000/messages');
   }
}
