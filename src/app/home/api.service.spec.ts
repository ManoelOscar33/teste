import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { UsuarioService } from './api.service';
import { Novousuario } from '../shared/novousuario';
import { AtualizarUsuario } from '../shared/atualizar-usuario';
//import { Observable } from 'rxjs';



describe('UsuarioService', () => {
  let service: UsuarioService;
  let http: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      /*providers: [
        {
          provide: HttpClient,
          useValue: httpStub
        }
      ]*/

      imports: [
        HttpClientTestingModule
      ]

    });
    service = TestBed.inject(UsuarioService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Ele deve chamar um get com o endpoint correto', () => {
    const spy1 = spyOn(http, 'get').and.callThrough();
    service.listaUsuarios();
    expect(spy1).toHaveBeenCalledWith('https://reqres.in/api/users')
  })

  it('Ele deve chamar um post com o endpoint correto', () => {
    const spy2 = spyOn(http, 'post').and.callThrough();
    service.salvar(new Novousuario);
    expect(spy2).toHaveBeenCalled
  })

  it('Ele deve chamar um put com o endpoint correto', () => {
    const spy3 = spyOn(http, 'put').and.callThrough();
    service.atualizarUsuarios(new AtualizarUsuario);
    expect(spy3).toHaveBeenCalled();
  })


});