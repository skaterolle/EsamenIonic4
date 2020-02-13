import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss'],
})
export class MensajeComponent implements OnInit {


  @Input() public title : string;
  
  constructor() { }

  ngOnInit() {}

}
