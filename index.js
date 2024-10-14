console.log(resultadoFinal(3,4))

function calcNivel (saldoVitorias){
    if(saldoVitorias <=10){
        return "Ferro"
    }else if(saldoVitorias <=20 ){
        return "Bronze"
    }else if(saldoVitorias <= 50){
        return "Prata"
    }else if(saldoVitorias <= 80){
        return "Ouro"
    }else if(saldoVitorias <= 90){
        return "Diamante"
    }else if(saldoVitorias <=100){
        return "Lendario"
    }else{
        return "Imortal"
    }
}

function resultadoFinal(win,loser){
    let saldoVitoria = win - loser
    return `O Herói tem de saldo de **${saldoVitoria}** Saldo de Vitoria e está no nivel **${calcNivel(saldoVitoria)}**`
}