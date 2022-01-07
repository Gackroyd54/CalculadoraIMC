var nome = document.getElementById('nome')
var altura = document.getElementById("altura")
var peso = document.getElementById("peso")
var resultado = document.getElementById("resultado") 
let grupo

/*Entre 30 e 34,99	Obesidade I
Entre 35 e 39,99	Obesidade II (severa)
Acima de 40	Obesidade III (mórbida)
*/ 





function calcular()
{
    var imc = peso.value/(altura.value)**2
if(imc<17){
    grupo = 'muito abaixo do peso'
}
else if (imc>=17&&imc<=18.49){
    grupo = 'abaixo do peso'
}
else if (imc>=18.50 && imc<=24.99){
    grupo = 'com peso normal'
}
else if (imc>=25&&imc<=29.99){
    grupo = 'acima do peso'
}
else if(imc>=30&&imc<=34.99){
    grupo = 'com obesidade I'
}
else if (imc>=35&&imc<=39.99){
    grupo = 'com obesidade II'
}
else if (imc>=40){
    grupo = 'com besidade III'
}

resultado.value = `${nome.value},o seu Índice de massa corpórea é ${imc} e você está ${grupo}`
nome.value = ''
    peso.value = ''
    altura.value = ''
}
