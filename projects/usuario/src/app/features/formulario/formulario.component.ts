import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioService } from '../../core/services/usuario/v1/usuario.service';

@Component({
  selector: 'ib-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  
  public controls = {
    cpf: new FormControl(null, Validators.required),
    nome: new FormControl(null, Validators.required),
    sobrenome: new FormControl(null, Validators.required),
    senha: new FormControl(),
    ativo: new FormControl(true),
    restricoes: new FormControl('administrador'),
    salario: new FormControl(123456)
  };
  
  public form: FormGroup;
  public id: string;

  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup(this.controls);
    this.id = this.route.snapshot.paramMap.get('id')!;
  }
  
  ngOnInit(): void {
    this.getById(this.id);
  }

  public getById(id: string): void {
    this.usuarioService.getById(id).subscribe((res: any) => {
      this.patchValueForm(res, this.form);
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
    if (this.form.valid) {
      this.usuarioService.post(this.form.getRawValue()).subscribe(() => {
        alert('cadastrado com sucesso');
        this.router.navigate(['usuarios/']);
      });
    }
  }
  
  public update(): void {
    if (this.form.valid) {
      this.usuarioService.put(this.id, this.form.getRawValue()).subscribe(() => {
        alert('atualizado com sucesso');
        this.router.navigate(['usuarios/']);
      });
    }
  }
}
