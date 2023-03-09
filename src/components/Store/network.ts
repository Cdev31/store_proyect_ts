import { formatAddres, storeInterface } from "./utility";
import {userService} from '../User/Service'
import {storeService} from './Service'
import {responseStatus} from '../response'
import {Options} from'./utility'
import { ROLE } from "../User/utility";

export class storeManipulationInfo{

    public static updateStoreUser(changes:Partial<storeInterface>,idUser:number): undefined |storeInterface | responseStatus.Correct{
         const storeOwned = userService.ownedStoreUser(idUser);
         if(storeOwned?.status == responseStatus.Correct && typeof(storeOwned.response) == 'number'){
            const responseStore = storeService.updateStores(storeOwned.response,changes)
             if(typeof(responseStore) != 'boolean'){
                return responseStore
             }else{
                return responseStatus.Correct
             }
         }
    }
    public static findStoreUser(options: Options,idUser:number,params?: formatAddres | number){
      const role = userService.returnRoleUser(idUser)   
         if(role.status == responseStatus.Correct && ROLE.Warehouse_manager in role 
            || ROLE.Inventory_Manager in role){
            if(options == 'find all'){
               return storeService.findAll()
            }else if(options == 'find address' && typeof params == 'string'){
               return storeService.findStoreAddres(params)
            }else {
               return storeService.findStore(idUser)
            }
         }
         return false
    }
 
}