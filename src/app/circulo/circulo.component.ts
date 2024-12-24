import { Component, OnInit } from '@angular/core';
import { IonItem,  IonInput, IonButton, IonList, IonImg } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonImg, IonList, IonItem,  IonInput, IonButton, FormsModule],
})

export class CirculoComponent  implements OnInit {
radio: string = "";
resultado: string = "";

  constructor() { 
    
  }

  ngOnInit() {}

  calcularPerimetro(){
    const radio = parseFloat(this.radio);
    let resul: number; 
    if (!isNaN(radio)) {
      resul = 2 * Math.PI * radio;
      this.resultado = `El perímetro es ${resul} cm`;
    } else {
      this.resultado = "Introduzca un valor numérico válido para el radio.";
    }
  }

}
