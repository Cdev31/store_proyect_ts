import  readline from 'readline'

function promptCredential(){
    const rl = readline.createInterface({
        input: process.stdin,
        output:process.stdout
    })
    
    return new Promise((resolve,reject)=>{
        rl.question('ingrese su email: ',(email)=>{
            rl.question('ingrese su password: ',(password)=>{
             rl.close()
             resolve({email,password})
            });
        });
    })
}


export {promptCredential}



