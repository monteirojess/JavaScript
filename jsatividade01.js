/* Obtenha dados da altura e o sexo (M ou F) de 15 pessoas e apresente os seguintes resultados:

- A maior e a menor altura do grupo;
- A média de altura dos homens;
- O número de mulheres.*/

var contador_f = 0
var contador_h = 0
var contador_alturah = 0
var media_homens = 0
var todas_alturas = []


for (var i = 0; i < 15; i++) {
var sexo = prompt("Digite o seu sexo ? M (Masculino) / F ( Feminino):").toUpperCase()
var altura = parseFloat(prompt("Digite a sua altura:"))

    if (sexo == "M"){
        contador_h = contador_h
        ++contador_h
        contador_alturah += altura
        media_homens = contador_alturah / contador_h
        media_homens = media_homens.toFixed(2)
    

    }else if (sexo == "F") {
        contador_f = contador_f
        ++contador_f

    } 
    
todas_alturas.push(altura)
var max = Math.max(...todas_alturas)
var min = Math.min(...todas_alturas)
}


console.log("A maior altura do grupo foi:" + max)
console.log("A menor altura do grupo foi:" + min)
console.log("A média das somas das alturas dos homens é:" + media_homens)
console.log("Tivemos",contador_f,"mulheres !")