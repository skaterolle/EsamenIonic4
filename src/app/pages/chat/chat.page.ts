import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Mensaje } from '../../models/mensajes.model';
import { MensajesService } from '../../services/mensajes.service';
import {ActivatedRoute} from '@angular/router';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public form: FormGroup;

  public mensajes = [];
  public nombre: string;
  
  @Input() public title: string;

  constructor(private formBuilder: FormBuilder,
    private mensaje: MensajesService,
    private route: ActivatedRoute) {
      this.nombre = route.snapshot.params.nombre;
     }

  ngOnInit() {
    this.complexFormInitialization();
    this.leer();
  
  }

  private leerContinuo(){
    this.mensaje.escuchaMensaje().subscribe(
      (mensajes) => {
        this.mensajes.push(mensajes);
        console.log(mensajes);
        return this.mensaje;
      }
    )
  }

  private leer(){
    this.mensaje.getMensaje().subscribe(
      (mensajes ) => {
        this.mensajes = mensajes;
        console.log(mensajes);
        
        this.leerContinuo();
      }
    );
  }

  ngOnDestroy(): void{
  }

  private complexFormInitialization(): void{

    this.form = this.formBuilder.group({
      name: ''
    });
  }

  submitForm() {
    let mens: Mensaje = {
      text: this.form.value.name,
      user: this.nombre
    };
    
    this.mensaje.crearMensaje(mens).subscribe(
      mensa => this.form.patchValue({
        name: ''
      }))
  }
}
