import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { UsuarioService } from '../api.service';
import { Novousuario } from '../../shared/novousuario';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  public novoUsuario: Novousuario = new Novousuario('', '');

  public usuarios: Novousuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  formulario: FormGroup = new FormGroup({
    "name": new FormControl( null, [Validators.required, Validators.minLength(0), Validators.maxLength(50)]),
    "job": new FormControl( null, [Validators.required, Validators.minLength(0), Validators.maxLength(50)])
  });

  ngOnInit(): void {
  }

  public criarUsuario() {
    this.usuarioService.salvar(this.formulario.value).subscribe({
      next: (res) => {
        console.log(res)
        this.novoUsuario = res,
        this.usuarios.push(this.novoUsuario)
        console.log(this.usuarios)
        
      },
      error: (err) => console.log('Erro ao adicionar usuário')
    })
    
  }

  public atualizar(name: string, job: string) {
    this.router.navigate(['atualiza', name, job])
  }

 
}
