/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

function queDia(dia){
    if (dia < 1 , dia > 30, (typeof dia) !==  (typeof 1)){
        console.log('Dia invalido')
        return;
    }
    switch (dia) {
        case 1: 
        case 8:
        case 15:
        case 22:
        case 29:
        case 7: 
        case 14:
        case 21:
        case 28:
            console.log("Final de semana")
            break;
        default: console.log("Dia Útil")
            break;
    }
}
queDia(28)

//Soluçao da lista 
/*
    function classificaDia(numero) {
        switch (numero) {
            case 1:
                return "Fim de semana"
            case 2:
            case 3:
            case 4:
            case 5:
            case 6: 
                return "Dia útil"
            case 7:
                return "Fim de semana"
            default: 
                return "Dia inválido"
        }
    }
    
    console.log(classificaDia(1));
    console.log(classificaDia(2));
    console.log(classificaDia(3));
    console.log(classificaDia(4));
    console.log(classificaDia(5));
    console.log(classificaDia(6));
    console.log(classificaDia(7));
    console.log(classificaDia('a'));
    
*/
