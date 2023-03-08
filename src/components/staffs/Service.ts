import {employeeInterface} from './utility'
import {responseStatus,responseType} from '../response'

class Employee {
    staffs: Array<employeeInterface> =[
        {
         id: 1,
         name: 'Ana',
         surname: 'Alvaro',
         salary: 566.34,
         dateOfBirth: new Date(1998,12,23),
         belongingStore: 1,
         workArea: 'Administration'
        },
        {
        id: 2,
        name: 'Juan',
        surname: 'Ramirez',
        salary: 678.34,
        dateOfBirth: new Date(1997,12,23),
        belongingStore: 1,
        workArea: 'Administration'
        },
        {
        id: 3,
        name: 'Julio',
        surname: 'Ventura',
        salary: 395.34,
        dateOfBirth: new Date(1996,12,23),
        belongingStore: 2,
        workArea: 'Cleaning'
        }
    ]

    findAll(): Array<employeeInterface>{
        return this.staffs
    }

    findEmployee(idEmployee:number):responseType<employeeInterface| string> | undefined{
        for(let i=0;this.staffs.length> i;i++){
            if(this.staffs[i].id == idEmployee){
                return {
                      status: responseStatus.Correct,
                      response: this.staffs[i]
                }
            }
        }return {
              status: responseStatus['Not Found'],
              response: 'Employee not found'
        }
    }

    createEmployee(body: employeeInterface): responseType<employeeInterface | string> | undefined{
       const newEmployee= body;
       if(body){
        this.staffs.push(body)
        return {
            status: responseStatus.Created,
            response: newEmployee
        }
       }
       return {
        status: responseStatus['Failed Process'],
        response: 'Employee not created'
    }
    }

    updateEmployee(idEmployee: number,changes: Partial<employeeInterface>): 
    responseType<Partial<employeeInterface> | string>| undefined {
       for (let i =0;this.staffs.length > i;i++){
        if(this.staffs[i].id == idEmployee){
            this.staffs[i] = {
                ...changes,
                ...this.staffs[i]
            }
            return {
                status: responseStatus.Updated,
                response: this.staffs[i]
            }
        }return {
            status: responseStatus['Not Found'],
            response: 'Producto not found'
        }
       }
       return {
        status: responseStatus['Failed Process'],
        response: 'Employee not updated'
       }
    }

    deleteEmployee(idEmployee:number): responseType<number | boolean> |undefined{
        for(let i =0;this.staffs.length > i;i++){
            if(this.staffs[i].id == idEmployee){
               delete this.staffs[i]
               return {
                  status: responseStatus.Deleted,
                  response: idEmployee
               }
            }
        }return {
            status: responseStatus['Failed Process'],
            response: 'Employee not deleted'
        }
    }

}