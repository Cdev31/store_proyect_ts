type brands = 'Sony'| 'Panasonic' | 'Samsung' | 'Hp' 

export interface productInterface{
    id: number
    tittle: string
    price: number
    stock: number
    brand: brands
    createAt:Date
    updateAt?: Date
    belongingCategory: number
}
