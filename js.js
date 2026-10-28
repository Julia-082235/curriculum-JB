let peso = parseFloat( prompt ("Digite o seu peso (KG)"))
let altura = parseFloat( prompt ("Digite a sua altura (m)"))

let IMC = calcularIMC(peso, altura)

function calcularIMC(peso, altura){
    let IMC = peso / (altura * altura)
    return IMC
}

function classificarIMC (IMC){
    if (IMC >= 40){
        alert("Obesidade Grave")
    } else if (IMC >= 35){
        alert("Obesidade Grau II")
    } else if (IMC >= 30){
        alert("Obesidade Grau I")
    } else if (IMC >= 25){
        alert("Sobrepeso")
    } else if (IMC >= 18,5){
        alert("Suadável") 
    } else if (IMC < 18,5){
        alert("Magreza")
    }
}

gerarRelatorio (peso, altura)


gerarRelatorio(peso, altura)
function gerarRelatorio(peso, altura){
        let gerar = calcularIMC (peso, altura)
        classificarIMC (IMC) 
}
