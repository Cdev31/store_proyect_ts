import { storeInterface } from "./utility";
import {userService} from '../User/Service'
import {storeService} from './Service'
import {responseStatus} from '../response'

class storeManipulationInfo{

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
    public static findStoreUser(){

    }
}