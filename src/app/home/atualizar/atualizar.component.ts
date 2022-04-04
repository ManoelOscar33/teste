import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../api.service';
import { AtualizarUsuario } from '../../shared/atualizar-usuario';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  public obj: any = {};

  public usuarios: any[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) { }

  formulario: FormGroup = new FormGroup({
    "name": new FormControl( null, [Validators.required, Validators.minLength(0), Validators.maxLength(50)]),
    "job": new FormControl( null, [Validators.required, Validators.minLength(0), Validators.maxLength(50)]),
  });

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (res) => {
        this.obj = res
        this.formulario.patchValue({
          name: this.obj.first_name ? this.obj.first_name+" "+this.obj.last_name : this.obj.name
        })
        console.log(this.obj)
        this.usuarios.push(this.obj)
      },
      error: (err) => console.log('Erro no procedimento') 
    })
  }

  public atualizarUsuario() {
    this.usuarioService.atualizarUsuarios(this.formulario.value).subscribe({
      next: (res) => { 
        this.usuarios.push(res);
      },
      error: (err) => console.log('Erro ao atualizar usuário')
    })
  }

  
}



