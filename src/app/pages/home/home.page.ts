import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}


  public ngOnInit(): void{
    this.complexFormInitialization();
  }

  private complexFormInitialization(): void{

    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]]
    });
  }
  submitForm() {
    console.log("hola " + this.form.value.name);
  }

}
 