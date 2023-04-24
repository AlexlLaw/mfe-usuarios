import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../core/interfaces/dto/usuario.interface';



export class FormularioForm extends FormGroup {
  private _errorMessages: Record<string, string> = {
    required: 'O campo %s é obrigatório.',
    cpfInvalid: 'Digite um CPF valido'
  };

  constructor() {
    super({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      cpf: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
      lastName: new FormControl(null, [Validators.required]),
      active: new FormControl(false, [Validators.required]),
      restrictions: new FormControl('', [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      wage: new FormControl('', [Validators.required]),
    });
  }

  public get id(): AbstractControl {
    return this.get('id')!;
  }

  public get cpf(): AbstractControl {
    return this.get('cpf')!;
  }

  public get name(): AbstractControl {
    return this.get('name')!;
  }

  public get lastName(): AbstractControl {
    return this.get('lastName')!;
  }

  public get active(): AbstractControl {
    return this.get('active')!;
  }

  public get restrictions(): AbstractControl {
    return this.get('restrictions')!;
  }

  public get password(): AbstractControl {
    return this.get('password')!;
  }

  public get wage(): AbstractControl {
    return this.get('wage')!;
  }

  public override markAllAsTouched(): void {
    Object.keys(this.controls).map((control) => this.get(control)!.markAsDirty());
  }

  public patchValueForm(obj: any, formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      if (obj[key]) {
        formGroup.controls[key].patchValue(obj[key]);
      }
    });
  }

  public getFirstErrorFrom(controlName: string, label: string): string {
    return this._errorMessages[
      Object.getOwnPropertyNames(this.get(controlName)?.errors)[0]
    ].replace('%s', label || controlName);
  }


  public getDadosEnvioCreate(): Usuario.Create {
    return  {
      cpf: this.cpf.value,
      name: this.name.value,
      lastName: this.lastName.value,
      active: this.active.value,
      firstAcess: true,
      restrictions: this.restrictions.value,
      password: this.password.value,
      wage: Number(this.wage.value),
    };
  }

  public getDadosEnvioUpdate(): Usuario.Create {
    return  {
      cpf: this.cpf.value,
      name: this.name.value,
      lastName: this.lastName.value,
      active: this.active.value,
      firstAcess: true,
      restrictions: this.restrictions.value,
      password: this.password.value,
      wage: Number(this.wage.value),
    };
  }
}