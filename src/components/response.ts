
//tipa el retorno de funciones de los servicios
export enum responseStatus{
    'Correct',
    'Not Found',
    'Updated',
    'Created',
    'Failed Process'
}

export interface responseType<T>{
   status: responseStatus
   response: T extends string | number ? string | number: T
}

