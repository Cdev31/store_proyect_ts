//decorador para transformar a fullName y a age
export function removeSensitiveData(target:object,property:string,descriptor:PropertyDescriptor){
      const originalMethod = descriptor.value

      descriptor.value = function(...args:(string | Date )[]){
       const result = originalMethod.apply(this,args);
       delete result.password;
       delete result.createAt
       result.fullName = `${result.name} ${result.surname}`
       delete result.name;
       delete result.surname; 
       return result
    }
    return descriptor
}

