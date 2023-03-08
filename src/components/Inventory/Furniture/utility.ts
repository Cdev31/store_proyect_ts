
type nameFurniture = 'Escoba' | 'Mueble' | 'Silla' | 'Estante' | 'Asistin'

export enum CATEGORYFURNITURE  {
    CATEGORYA = 'Cleaning',
    CATEGORYB = 'furniture'
}
export interface furnitureInterface{
    id: number
    nameFurniture: nameFurniture,
    belogingCategory: CATEGORYFURNITURE
    stock: number 
    belongingStore: number
}