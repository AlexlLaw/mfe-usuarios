import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseService } from '../../base.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends BaseService<any> {

  constructor(protected http: HttpClient) {
    super(http, 'user');
  }
}