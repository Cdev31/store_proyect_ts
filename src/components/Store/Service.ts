
import {storeInterface,formatAddres} from './utility'
import {responseType,responseStatus} from '../response'

class Store{
     stores: Array<storeInterface> =[{
        id:1,
        addres: "San Salvador,Nuevo Cuscatlan, av. Planon, calle Gerardo Barrios"
     },
     {
        id:2,
        addres: "Santa Ana,Santa Ana, av. Mirador, calle Costa"
     },
     {
        id:3,
        addres: "La libertad,Santa Tecla, av. Juan Pablo, calle Matias Delgado"
     }
    ] 
    
   
    findAll(): Array<storeInterface>{
        return this.stores
    }

    
    findStore(id:number): responseType<storeInterface | string>{
        for(let i=0;i < this.stores.length;i++){
            if(this.stores[i].id === id){
                return {
                    status: responseStatus.Correct,
                    response:this.stores[i] 
                }
            }
         }
         return {
            status: responseStatus['Not Found'],
            response: `Usuario con el id ${id} no encontrado`
         }
    }
  
    findStoreAddres(addres:formatAddres): responseType<storeInterface> | undefined {
        for(let i =0;this.stores.length > i;i++){
            if(this.stores[i].addres == addres){
                return {
                    status: responseStatus.Correct,
                    response: this.stores[i]
                }
            }
        }
    }
   
   
    updateStores(id:number,changes: Partial<storeInterface>): storeInterface | undefined | boolean {
        for(let i =0; this.stores.length > i; i++){
            if(this.stores[i].id === id){
                this.stores[i] = {
                    ...changes,
                    ...this.stores[i]
                }
                return this.stores[i]
            }else{
               return false
            }
        }
    }

    
}

export const storeService = new Store()
