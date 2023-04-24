export namespace Usuario {

  export interface listar {
    content: Usuario[];
    pageable: Paginacao;
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    first: boolean;
    numberOfElements: number;
    empty: boolean;
  }

  interface Usuario {
    id: string;
    cpf: string;
    name: string;
    lastName: string;
    active: boolean;
    restrictions: string;
    wage: number;
  }
  
  interface Paginacao {
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    unpaged: boolean;
  }
  
 export interface Create {
  cpf: string;
  name: string;
  lastName: string;
  active: boolean;
  firstAcess: boolean;
  restrictions: string;
  password: string;
  wage: number;
  }
}