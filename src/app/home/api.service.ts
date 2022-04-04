import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AtualizarUsuario } from '../shared/atualizar-usuario';
import { Novousuario } from '../shared/novousuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url1 = environment.host2;
  public url2 = environment.host1;

  constructor(private http: HttpClient) { }

  public salvar(usuario: Novousuario): Observable<any> {
    return this.http.post<any>(this.url2, usuario)
  }

  public listaUsuarios(): Observable<any> {
    return this.http.get<any>(this.url2)
  }

  public atualizarUsuarios(usuario: any): Observable<any> {
    return this.http.put<any>(this.url1, usuario)
  }
}