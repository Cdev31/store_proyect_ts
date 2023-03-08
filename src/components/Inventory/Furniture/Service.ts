import {CATEGORYFURNITURE,furnitureInterface} from './utility'
import {responseStatus,responseType} from '../../response'

class Furniture {
    furniturs: Array<furnitureInterface> =[
        {
         id: 1,
         nameFurniture: 'Escoba',
         belogingCategory: CATEGORYFURNITURE.CATEGORYB,
         stock: 5,
         belongingStore: 1
        },
        {
            id: 2,
            nameFurniture: 'Silla',
            belogingCategory: CATEGORYFURNITURE.CATEGORYA,
            stock: 5,
            belongingStore: 1
        },
        {
            id: 3,
            nameFurniture: 'Asistin',
            belogingCategory: CATEGORYFURNITURE.CATEGORYB,
            stock: 5,
            belongingStore: 1
           },
    ]

    findAll(): Array<furnitureInterface>{
        return this.furniturs
    }

    findFurniture(idFurniture:number):responseType<furnitureInterface| string> | undefined{
        for(let i=0;this.furniturs.length> i;i++){
            if(this.furniturs[i].id == idFurniture){
                return {
                      status: responseStatus.Correct,
                      response: this.furniturs[i]
                }
            }
        }return {
              status: responseStatus['Not Found'],
              response: 'Furniture not found'
        }
    }

    createFurniture(body: furnitureInterface): responseType<furnitureInterface | string> | undefined{
       const newFurniture= body;
       if(body){
        this.furniturs.push(body)
        return {
            status: responseStatus.Created,
            response: newFurniture
        }
       }
       return {
        status: responseStatus['Failed Process'],
        response: 'Furniture not created'
    }
    }

    updateFurniture(idFurniture: number,changes: Partial<furnitureInterface>): 
    responseType<Partial<furnitureInterface> | string>| undefined {
       for (let i =0;this.furniturs.length > i;i++){
        if(this.furniturs[i].id == idFurniture){
            this.furniturs[i] = {
                ...changes,
                ...this.furniturs[i]
            }
            return {
                status: responseStatus.Updated,
                response: this.furniturs[i]
            }
        }return {
            status: responseStatus['Not Found'],
            response: 'Producto not found'
        }
       }
       return {
        status: responseStatus['Failed Process'],
        response: 'Furniture not updated'
       }
    }

    deleteFurniture(idFurniture:number): responseType<number | boolean> |undefined{
        for(let i =0;this.furniturs.length > i;i++){
            if(this.furniturs[i].id == idFurniture){
               delete this.furniturs[i]
               return {
                  status: responseStatus.Deleted,
                  response: idFurniture
               }
            }
        }return {
            status: responseStatus['Failed Process'],
            response: 'Furniture not deleted'
        }
    }

}