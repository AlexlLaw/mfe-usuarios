import { FormGroup } from '@angular/forms';



export class FormularioForm extends FormGroup {
//   private _errorMessages = {
//     required: 'O campo %s é obrigatório.',
//     cpfInvalid: 'Digite um CPF valido'
//   };

  //   constructor() {
  //     super({
  //       id: new FormControl(null),
  //       nome: new FormControl(null, [Validators.required]),
  //       cpf: new FormControl(null, [Validators.required, ValidatorsCustom.validCpf, Validators.maxLength(11)]),
  //       sobrenome: new FormControl(null, [Validators.required]),
  //       ativo: new FormControl(false, [Validators.required]),
  //       restricoes: new FormControl('', [Validators.required]),
  //       senha: new FormControl(null, [Validators.required]),
  //       salario: new FormControl('', [Validators.required]),
  //     });
  //   }

  //   public get id(): AbstractControl {
  //     return this.get('id');
  //   }

  //   public get cpf(): AbstractControl {
  //     return this.get('cpf');
  //   }

  //   public get nome(): AbstractControl {
  //     return this.get('nome');
  //   }

  //   public get sobrenome(): AbstractControl {
  //     return this.get('sobrenome');
  //   }

  //   public get ativo(): AbstractControl {
  //     return this.get('ativo');
  //   }

  //   public get restricoes(): AbstractControl {
  //     return this.get('restricoes');
  //   }

  //   public get senha(): AbstractControl {
  //     return this.get('senha');
  //   }

  //   public get salario(): AbstractControl {
  //     return this.get('salario');
  //   }

  //   public markAllAsTouched(): void {
  //     Object.keys(this.controls).map((control) =>
  //       this.get(control).markAsDirty()
  //     );
  //   }

  //   public getFirstErrorFrom(controlName: string, label: string): string {
  //     return this._errorMessages[
  //       Object.keys(this.get(controlName).errors)[0]
  //     ].replace('%s', label || controlName);
  //   }

  //   public patchValueForm(obj: any, formGroup: FormGroup) {
  //     Object.keys(formGroup.controls).forEach((key) => {
  //       if (obj[key]) {
  //         formGroup.controls[key].patchValue(obj[key]);
  //       }
  //     });
  //   }

  //   public getDadosEnvioCreate(): UsuarioCreateDto {
  //     return new UsuarioCreateDto(this.value);
  //   }

//   public getDadosEnvioUpdate(): UsuarioUpdateDto {
//     return new UsuarioUpdateDto(this.value);
//   }
}