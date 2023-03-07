type Month = 'Enero' | 'Febrero' | 'Marzo' | 'Abril' | 'Noviembre'
| 'Mayo' | 'Junio' | 'Julio' | 'Agosto' | 'Septiembre' | 'Octubre' | 'Diciembre' 

export type formatEmail= `${string}@${'gmail' | 'hotmail' | 'outlook'}${'.com' | '.net'}`

type formatDate = `${number}-${Month}-${number}`

export interface userInterface{
  id: number;
  name: string;
  surname: string;
  password: string;
  email: formatEmail;
  ownedStore: number;
  createAt: formatDate;
  dateOfBirth: formatDate;
}



