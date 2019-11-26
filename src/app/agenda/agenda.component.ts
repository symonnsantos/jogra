import { AuthService } from './../login/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  
  logado: boolean = false;
  deslogado: boolean = false;
  

  dias: any[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
  meses: any[] =  ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']  

  horas: any[] = ['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
  minutos: any[] = ['00', '15', '30', '45']

  servicos: any[] = ['Corte Feminino', 'Corte Masculino', 'Escova', 'Barba']

  verificar(){
    console.log(this.authService.online)
    console.log(this.authService.offline)
    this.deslogado = this.authService.offline;
    if(this.authService.online == true){
      this.route.navigate(['agenda/confirmar'])
    }
  }


  constructor(
    private route: Router,
    private authService: AuthService) { }

  ngOnInit() {    
    console.log(`Está logado? ${this.logado}`)
    console.log(`Está deslogado? ${this.deslogado}`)
    this.authService.mostrarLoginEmitter.subscribe(
      mostrar => this.logado = mostrar
    );
    console.log(`Está logado? ${this.logado}`)
    this.authService.esconderLoginEmitter.subscribe(
      esconder => this.deslogado = esconder
    )
  }

}
