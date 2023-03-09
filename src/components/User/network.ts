import {formatEmail, ROLE, userInterface} from './utility'
import {userService} from './Service'
import {responseStatus} from '../response'
import {validateHash,createHash} from '../../validation/user.validate'

export class networkUser{
    //metodo login para usuarios
    public static async login(password:string,email:formatEmail){
          try {
            const {status,response}= userService.findUserEmail(email)
            if(status === responseStatus.Correct && typeof(response) === 'string'){
                const validate = await validateHash(password,response);
                validate === true? true : false
            } else if(status === responseStatus['Failed Process']){
                return response
            }
        } catch (error) {
            return error
          }
    }
    
    public static  changeInfo(idUser:number,changes:Partial<Omit<userInterface,'password'>>){
        try {
            const role = userService.returnRoleUser(idUser)
            if(role.status == responseStatus.Correct && ROLE.Warehouse_manager in role){
                const updatedUser = userService.updateUser(idUser,changes)

            }
        } catch (error) {
            
        }
    }

    public static async changePassword(idUser:number,password: string){
        const role = userService.returnRoleUser(idUser)
        if(ROLE.Store_Manager in role || ROLE.Inventory_Manager in role){
             const hashPassword:string = await createHash(password)
             const updatePassword = userService.updateUser(idUser,{password: hashPassword})
         }
    }

    public static createNewUser(idUserAdmin:number,user: userInterface){

    }
    
    public static findsUser(idUser:number,options:any){
        
    }

    public static changeStoreUser(){

    }
}