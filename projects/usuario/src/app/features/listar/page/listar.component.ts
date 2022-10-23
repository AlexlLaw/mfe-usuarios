import { Component, OnInit } from '@angular/core';
import { ListarUsuariosDto } from '../../../core/interfaces/dto/listar-usuarios-dto';
import { UsuarioService } from '../../../core/services/usuario/v1/usuario.service';


@Component({
  selector: 'ib-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {

  public data: ListarUsuariosDto[] = [];

  constructor(private usuarioService: UsuarioService,) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this.usuarioService.get().subscribe((res: ListarUsuariosDto[]) => {
      this.data = res;
    });
  }

  public delete(id: number) : void {
    this.usuarioService.delete(id).subscribe(() => {
      alert('usuario removido com sucesso');
      this.getAll();
    });
  }
}
