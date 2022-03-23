import { Component, OnInit } from '@angular/core';
import { Suma } from 'src/app/entidades/suma';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  miSuma: Suma;
  title = 'clase2';
  numero1:number;
  numero2:number;
  sumar:number ;


  constructor() {
    this.miSuma = new Suma();
    this.numero1=0;
    this.numero2=0;
    this.sumar=0;
  }
  

  SumarNumeros(){
    this.sumar = this.numero1 + this.numero2;

  }

  cambiandoText(e:any){


  }
  ngOnInit(): void {
  }

}
