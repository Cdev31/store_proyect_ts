console.clear()

import readLine from 'readline';

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '!> ',
    completer: (line:string)=>{
        const completions = ['Kalet', 'Juan', 'Jeni']
        const hits = completions.filter((c)=> c.startsWith(line));
        return [hits.length ? hits : completions,line]
    }
})


console.log(rl)