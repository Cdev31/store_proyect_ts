import {userInterface} from './utility'
import {removeSensitiveData} from '../../schemas/decorators/user.decorator'
import {createHash} from '../../validation/user.validate'
import {responseType,responseStatus} from '../response'

class User{
    users: userInterface[]  =[{
       id:1,
       name: "kalet",
       surname: "chavez",
       password: "mySecret",
       email: "kalet.elsalvadorca@gmail.com",
       createAt: "23-Marzo-2020",
       dateOfBirth: "22-Abril-2004"
    },
    {
        id:2,
        name: "Eliza",
        surname: "Rivas",
        password: "mySecret",
        email: "Eliza@hotmail.com",
        createAt: "23-Enero-2020",
        dateOfBirth: "22-Febrero-2004"
     }
] 
    
   
    findAll(){
        return this.users
    }

    findUserEmail(emil:string):responseType<string>{
      for(let i =0;this.users.length > i; i++){
        if(this.users[i].email === emil){
            return {
                status: responseStatus.Correct,
                response: this.users[i].password
            }
        }
      }
      return {
        status: responseStatus['Failed Process'],
        response: 'El processo no pudo realizarse'
      }
    }

    @removeSensitiveData
    findUser(id:number): responseType<userInterface | string>{
        for(let i=0;i < this.users.length;i++){
            if(this.users[i].id === id){
                return {
                    status: responseStatus.Correct,
                    response:this.users[i] 
                }
            }
         }
         return {
            status: responseStatus['Not Founf'],
            response: `Usuario con el id ${id} no encontrado`
         }
    }
    @removeSensitiveData
    async createUser(body: Omit<userInterface,'id'>):Promise<userInterface>{
        const passHash = await createHash(body.password)    
        const newUser:userInterface = {
                id: this.users.length +1,
                ...body,
                password: passHash
            }
            this.users.push(newUser)
            return newUser
    }
    @removeSensitiveData
    updateUser(id:number,changes: Partial<userInterface>): userInterface | undefined | boolean {
        for(let i =0; this.users.length > i; i++){
            if(this.users[i].id === id){
                this.users[i] = {
                    ...changes,
                    ...this.users[i]
                }
                return this.users[i]
            }else{
               return false
            }
        }
    }

    
    deleteUser(id:number): boolean | undefined{
        for(let i =0;this.users.length > i;i++){
            if(this.users[i].id == id){
                delete this.users[i]
                return true
            }
        }
        return false
    }
}

export const userService = new User()
