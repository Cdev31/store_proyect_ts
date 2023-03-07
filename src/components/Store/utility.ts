type Calles = 'Gerardo Barrios' | 'Costa' | 'Matias Delgado'
type Avenida = 'av. Mirador' | 'av. Juan Pablo'  | 'av. Planon'
type Deptos = 'La libertad' | 'San Salvador' | 'Santa Ana' 
type Ciudad = 'Nuevo Cuscatlan' | 'Santa Tecla' | 'Santa Ana' 
export type formatAddres = `${Deptos},${Ciudad}, ${Avenida}, calle ${Calles}`

export interface storeInterface{
    id: number
    addres: formatAddres
}
