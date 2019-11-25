import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarLoginEmitter = new EventEmitter<boolean>();

  esconderLoginEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }  

  submit(usuario: Usuario){
    if (usuario.nome === 'admin' &&
    usuario.senha === 'admin') {
      this.usuarioAutenticado = true;
      this.router.navigate(['/home'])
      alert(`Seja bem-vindo, ${usuario.nome}`)

      this.mostrarLoginEmitter.emit(true);
      this.esconderLoginEmitter.emit(false);
    } else {
      this.usuarioAutenticado = false;
      alert('Usuário ou senha incorretos')
    }
  }

}
