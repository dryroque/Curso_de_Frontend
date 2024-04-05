var nome = "Adryanno"
var notaDoPrimeiroBimestre = 9.4
var notaDoSecundoBimestre = 7.2
var notaDoTerceiroBimestre = 4.2
var notaDoQuartoBimestre = 2.1

var notaFinal = (notaDoPrimeiroBimestre + notaDoSecundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(2)

console.log("Suas notas " + nome)
console.log("Nota do primeiro bimestre: " + notaDoPrimeiroBimestre)
console.log("Nota do seundo bimestre: " + notaDoSecundoBimestre)
console.log("Nota do terceiro bimestre: " + notaDoTerceiroBimestre)
console.log("Nota do quarto bimestre: " + notaDoQuartoBimestre)
console.log("Nota final: " + notaFixada)

// Review: variáveis, strings, console.log, toFixed, operação matemática, concatenação