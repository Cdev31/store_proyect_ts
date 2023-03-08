import {productInterface} from './utility'
import {responseStatus,responseType} from '../../response'

class Products {
    products: Array<productInterface> =[
        {
            id: 1,
            tittle: 'Audifonos blancos, cascos',
            price: 23.5,
            stock: 25,
            brand: 'Samsung',
            createAt: new Date(2022,11,23),
            belongingCategory: 1
        },
        {
            id: 2,
            tittle: 'Audifonos blancos, cascos',
            price: 23.5,
            stock: 25,
            brand: 'Panasonic',
            createAt: new Date(2022,11,23),
            belongingCategory: 2
        },
        {
            id: 3,
            tittle: 'Audifonos blancos, cascos',
            price: 23.5,
            stock: 25,
            brand: 'Sony',
            createAt: new Date(2022,11,23),
            belongingCategory: 3
        },
        {
            id: 4,
            tittle: 'Audifonos blancos, cascos',
            price: 23.5,
            stock: 25,
            brand: 'Samsung',
            createAt: new Date(2022,11,23),
            belongingCategory: 2
        }
    ]

    findAll(): Array<productInterface>{
        return this.products
    }

    findProduct(idProduct:number):responseType<productInterface | string> | undefined{
        for(let i=0;this.products.length> i;i++){
            if(this.products[i].id == idProduct){
                return {
                      status: responseStatus.Correct,
                      response: this.products[i]
                }
            }
        }return {
              status: responseStatus['Not Found'],
              response: 'Product not found'
        }
    }

    createProduct(body: productInterface): responseType<productInterface | string> | undefined{
       const newProduct = body;
       if(body){
        this.products.push(body)
        return {
            status: responseStatus.Created,
            response: newProduct
        }
       }return {
        status: responseStatus['Failed Process'],
        response: 'Product not created'
    }
    }

    updateProduct(idProduct: number,changes: Partial<productInterface>): 
    responseType<Partial<productInterface> | string>| undefined {
       for (let i =0;this.products.length > i;i++){
        if(this.products[i].id == idProduct){
            this.products[i] = {
                ...changes,
                ...this.products[i]
            }
            return {
                status: responseStatus.Updated,
                response: this.products[i]
            }
        }return {
            status: responseStatus['Not Found'],
            response: 'Producto not found'
        }
       }
       return {
        status: responseStatus['Failed Process'],
        response: 'Product not updated'
       }
    }

    deleteProduct(idProduct:number): responseType<number | boolean> |undefined{
        for(let i =0;this.products.length > i;i++){
            if(this.products[i].id == idProduct){
               delete this.products[i]
               return {
                  status: responseStatus.Deleted,
                  response: idProduct
               }
            }
        }return {
            status: responseStatus['Failed Process'],
            response: 'Product not deleted'
        }
    }
}