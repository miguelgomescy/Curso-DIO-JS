/*

Função pode ser atribuída a variável

Passar uma função para outra função

*/


function falarNome(){
    console.log("Meu nome é Miguel")
}

function falarSobrenome(){
    falarNome();
    console.log('Gomes de Lima');
}

falarSobrenome(falarNome);

//A grande diferença das funções é o hoisting


/*

Diferença de função e arrow function

Arrow não tem this

This e objeto*/





























