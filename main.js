import {calculator} from "./components/datos.js";

calculator.sum(10)
calculator.restar(4)
calculator.mult(4)
calculator.div(2)
calculator.resto(5)
calculator.reset()

//COMPROBACION THEN
let espero = 5
if(calculator.total==espero){console.log('El test esta Ok')}
else{console.log('Este test Falló, esperaba: '+espero)}