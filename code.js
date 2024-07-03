nota = parseInt(prompt("Digite uma nota!")) // exemplo de nota
if (nota > 90){
    exemplo = "A"
    console.log("O aluno tirou " + exemplo)
}
if (nota >=80 && nota <= 90){
    exemplo = "B"
    console.log("O aluno tirou " + exemplo)
}
if (nota >= 70 && nota <= 79){
    exemplo = "C"
    console.log("O aluno tirou " + exemplo)
}
if (nota >= 60 && nota <=69){
    exemplo = "D"
    console.log("O aluno tirou " + exemplo)
}
if (nota < 60){
    exemplo = "F"
    console.log("O aluno tirou " + exemplo)
}