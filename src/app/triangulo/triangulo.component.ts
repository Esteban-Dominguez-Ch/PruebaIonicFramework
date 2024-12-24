import { Component, OnInit } from '@angular/core';
import { IonItem,  IonInput, IonButton, IonList, IonImg } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonImg, IonList, IonItem,  IonInput, IonButton, FormsModule],
})


export class TrianguloComponent  implements OnInit {
resultado: string = "";
ladoA: string = "";
ladoB: string = "";
ladoC: string = "";

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    const ladoA = parseFloat(this.ladoA);
    const ladoB = parseFloat(this.ladoB);
    const ladoC = parseFloat(this.ladoC);
  
    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
      this.resultado = "Por favor, ingrese valores numéricos para todos los lados.";
    } else {
      const perimetro = ladoA + ladoB + ladoC;
      this.resultado = `El perímetro es: ${perimetro.toFixed(2)} cm`;
    }
  }

}
