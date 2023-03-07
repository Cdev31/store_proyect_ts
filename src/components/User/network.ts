import {formatEmail} from './utility'
import {userService} from './Service'
import {responseStatus} from '../response'
import {validateHash} from '../../validation/user.validate'

class networkUser{
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

    
}