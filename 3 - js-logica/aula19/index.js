/* function soma(x, y){
    if( typeof x !== 'number' || typeof y !== 'number'){
        throw ('Os valores devem ser números');
    }

    return x + y;
}

try {
    console.log(soma(1,2))
    console.log(soma('1',2))
} catch (error) {
    console.log(error);
} */

/* try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
} catch (error) {
    // É executada quando há erros
} finally {
    // É executada sempre
} */

function retornaHora (data){
    if(data && !(data instanceof Date)){
        throw new TypeError('A data deve ser um objeto Date');
    }

    if( !data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try{
    const data = new Date();
    const hora = retornaHora(data);
    const hora1 = retornaHora();
    const hora2 = retornaHora(11);
    const hora3 = retornaHora('teste');
    console.log(hora)
    console.log(hora1)
    console.log(hora2)
    console.log(hora3)
}catch(e){
    // tratar erro
}