// Construído na explicação
function somar() {
    console.log("Executando ...")
    // Entrada - (INPUTS)
    let resultado = 0
    const input_01 = document.getElementById("numero_1")
    const input_02 = document.getElementById("numero_2")

    const value_01 = Number(input_01.value)
    const value_02 = Number(input_02.value)

    // Processamento
    resultado = value_01 + value_02

    // Saída
    const divResultado = document.getElementById("resultado")
    divResultado.innerText = "Resultado: " + resultado

    if (resultado > 50)
        divResultado.style.backgroundColor = "red"
    else
        divResultado.style.backgroundColor = "green"
}

// -------- CÓDIGO COM LÓGICA DE PASSOS COERENTES
// ENTRADA PROCESSAMENTO E SAÍDA
// O que quero fazer? Soma de dois números
// 1 - Evento, como disparar? Como ini o script

function clickSomar(){
    console.log("Iniciando...")
    // Entrada 
    // 1 - Pegar elementos do HTML
    // 2 - Pegar os values dos elementos
    // 3 - Transformar eles em númericos
    const valor_01 = Number(document.getElementById("numero_1").value)
    const valor_02 = Number(document.getElementById("numero_2").value)

    // Processamento
    // 1 - Utilizar os dois números capturados
    // para somar e guardar em um resultado
    const resultado = valor_01 + valor_02

    // Saída
    // 1 - Pegar elemento do HTML
    // 2 - Alterar seu texto para o resultado
    document.getElementById("resultado").innerText = "Resultado: " + resultado
}

// -------- COM ENCAPSULAMENTO
function clickSomarComAbstracao(){
    const valor_01 = pegarValorNumerico("numero_1")
    const valor_02 = pegarValorNumerico("numero_2")

    const resultado = somarDoisNumeros(valor_01, valor_02)

    mostrarResultadoNaTela(resultado)
}

function pegarValorNumerico(idElemento) {
     const valor = document.getElementById(idElemento).value

     if(isNaN(valor)) {
        alert("Valor incorreto para númerico: " + valor)
        return 0
     }

     return  Number(valor)
}

function somarDoisNumeros(num1, num2) {
    return num1 + num2
}

function mostrarResultadoNaTela(resultado){
    document.getElementById("resultado").innerText = "Resultado: " + resultado
}





