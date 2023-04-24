import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../core/interfaces/dto/usuario.interface';
import { UsuarioService } from '../../../core/services/usuario/v1/usuario.service';


@Component({
  selector: 'ib-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {

  public data!: Usuario.listar;

  constructor(private usuarioService: UsuarioService,) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this.usuarioService.get().subscribe((res: Usuario.listar) => {
      this.data = res;
    });
  }

  public delete(id: string) : void {
    this.usuarioService.delete(id).subscribe(() => {
      alert('usuario removido com sucesso');
      this.getAll();
    });
  }
}
