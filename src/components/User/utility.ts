type Month = 'Enero' | 'Febrero' | 'Marzo' | 'Abril' | 'Noviembre'
| 'Mayo' | 'Junio' | 'Julio' | 'Agosto' | 'Septiembre' | 'Octubre' | 'Diciembre' 


export interface userInterface{
  id: number;
  name: string;
  surname: string;
  password: string;
  email: `${string}@${'gmail' | 'hotmail' | 'outlook'}${'.com' | '.net'}`
  createAt: `${number}-${Month}-${number}`
  dateOfBirth: `${number}-${Month}-${number}`
}



