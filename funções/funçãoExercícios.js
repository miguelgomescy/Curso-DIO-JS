function escrevaMeuNome(nome){
   return ("Seu nome é: " + nome);
}




function checarIdade(idade){
    if(idade<18){
        console.log ("Menor de idade ");
    }

    else if( idade >= 18 && idade <= 60){
        console.log (escrevaMeuNome("Miguel") + " Idade adulta");
    }

    else if(idade > 60){
        console.log("Idoso");
    }
}


checarIdade(55);