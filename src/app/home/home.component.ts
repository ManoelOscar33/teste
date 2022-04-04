import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './api.service';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarioService.listaUsuarios().subscribe({
      next: (res) => {
        this.usuarios = res.data
      },
      error: (err) => console.log('Erro ao obter os usuários')
    })
    
  }

  public atualizar(avatar: string, first_name: string, last_name: string, email: string) {
      this.router.navigate(['atualizar', avatar, first_name, last_name, email])
  }

  
}
