import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioService } from '../../core/services/usuario/v1/usuario.service';
import { FormularioForm } from './formulario.form';

@Component({
  selector: 'ib-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {

  public id: string;
  private _form!: FormularioForm;

  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) {
    this._form = new FormularioForm();
    this.id = this.route.snapshot.paramMap.get('id')!;
  }
  
  ngOnInit(): void {
    this.getById(this.id);
  }

  public get formularioForm(): FormularioForm {
    return this._form;
  }

  public getById(id: string): void {
    this.usuarioService.getById(id).subscribe((res: any) => {
      console.log(res);
      this.patchValueForm(res, this.formularioForm);
    }
    );
  }

  public patchValueForm(obj: any, formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      if (obj[key]) {
        formGroup.controls[key].patchValue(obj[key]);
      }
    });
  }
 
  public chooseMethod() {
    if (this.id) {
      this.update();

      return;
    }

    this.create();
  }

  public create(): void {
    this.formularioForm.markAllAsTouched();
    if (this.formularioForm.valid) {
      this.usuarioService.post(this.formularioForm.getDadosEnvioCreate()).subscribe(() => {
        alert('cadastrado com sucesso');
        this.router.navigate(['usuarios/']);
      });
    }
  }
  
  public update(): void {
    this.formularioForm.markAllAsTouched();
    if (this.formularioForm.valid) {
      this.usuarioService.put(this.id, this.formularioForm.getDadosEnvioUpdate()).subscribe(() => {
        alert('atualizado com sucesso');
        this.router.navigate(['usuarios/']);
      });
    }
  }

  public isFieldValid(form: FormGroup, field: string) {
    return !form.get(field)!.valid && form.get(field)!.dirty;
  }
}