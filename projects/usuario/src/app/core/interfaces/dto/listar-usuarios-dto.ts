export class ListarUsuariosDto {
  public id!: number;
  public cpf!: string;
  public nome!: string;
  public ativo!: boolean;

  constructor(object: unknown) {
    Object.assign(this, object);
  }
}