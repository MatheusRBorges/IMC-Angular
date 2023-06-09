import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class IMCComponent {

  peso: number = 0;
  altura: number = 0;
  resultado: number = 0;
  mensagem = '';


  calcularimc() {
    this.resultado = this.peso / (this.altura ** 2)


    if (this.resultado < 18.5) {
      this.mensagem = this.resultado.toFixed(2) + ' Abaixo do Peso';
    } else if (this.resultado < 25) {
      this.mensagem = this.resultado.toFixed(2) + ' Peso Normal';
    }
    else if (this.resultado < 30) {
      this.mensagem = this.resultado.toFixed(2) + ' SobrePeso';
    }
    else if (this.resultado < 35) {
      this.mensagem = this.resultado.toFixed(2) + ' Obesidade Grau I';
    }
    else if (this.resultado < 40) {
      this.mensagem = this.resultado.toFixed(2) + ' Obesidade Grau II';
    }
    else {
      this.mensagem = this.resultado.toFixed(2) + 'Obesidade Grau III'
    }
  }
}
