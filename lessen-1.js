//Syntaxis & Mistakes
'Uncaught SyntaxError:' - ненайденая синтаксическая ошибка.
'Unexpected Token' ; - инторпритатор прочел что-то, чего прочесть не ожидал, а иненно: точку с запятой - ; .
() - скобки всегда ходят парами.

'ReferenceError' - ошибка обращения.
'Is not defined' - новая переменная не задана.
'undefined' - подобный ответ означает, что вы пока не определили, что именно должен вернуть (RETURN) вам в качестве ответа интерпретатор JavaScript.

//Example
var перваяЧастьПриветствия = "Привет,"; //undefined
let втораяЧастьПриветствия = "Мир"; //undefined
let одиночныйПробел = " "; //undefined
let полноеПриветствие = перваяЧастьПриветствия + одиночныйПробел +
втораяЧастьПриветствия; //undefined
полноеПриветствие; //'Привет, Мир'


// Example 2
let komboA = 6.75; //undefined
let komboB = 3.15; //undefined
let komboC = 9.95; //undefined
let komboD = 12.95; //undefined
let stoimNabora = komboA + komboB + komboC + komboD; //undefined
stoimNabora; //32.8
let vsegoNaborov = 4; //undefined
let srednqqStoimoctNabora = stoimNabora / vsegoNaborov; //undefined
srednqqStoimoctNabora; //8.2

//new terms + new Kombo
vsegoNaborov = 5;
srednqqStoimoctNabora = stoimNabora + komboNew; //50.78999999999999
srednqqStoimoctNabora = stoimNabora / vsegoNaborov; //6.56
