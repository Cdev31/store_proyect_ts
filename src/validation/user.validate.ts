import bcrypt from 'bcrypt'

/*Funcion que hashea la contraseña
Parametros: password = contraseña
retorno: contraseña encryptada
*/
export const createHash = async (password:string): Promise<string>=>{
    const hashedPassword =  await bcrypt.hash(password,10); 
    return hashedPassword
}
/*Funcion que valida la contraseña
Parametros: Password = contraseña, HashedPassword = el hash
retorno: True o False depende de si el hash corresponde al password
*/
export const validateHash = async (password:string,hashedPassword:string): Promise<boolean>=>{
    const isPasswordValid = await bcrypt.compare(password,hashedPassword);       
    return isPasswordValid
}

