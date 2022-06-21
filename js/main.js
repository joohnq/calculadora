"use stict";
const btn = document.querySelectorAll("button");
const painel = document.getElementById('painel')
var valuesOperation = []
var operation = []

function atualizarPainel(btnValue){
    if(btnValue.className == 'igual' || btnValue.className == 'operation' || btnValue.className == 'comand'){
        return ''
    }else{
        painel.textContent += btnValue.textContent
    }
}

function somar(){
    painel.textContent = valuesOperation.reduce((a, b) => a + b)
}

function subtracao(){
    painel.textContent = valuesOperation.reduce((a, b) => a - b)
}

function divisao(){
    painel.textContent = valuesOperation.reduce((a, b) => a / b)
}

function multiplicacao(){
    painel.textContent = valuesOperation.reduce((a, b) => a * b)
}

function mostrarValorFinal(n = '', o){
    let number = n
    let oper = o
    if(!number == ''){
        valuesOperation.push(Number(painel.textContent))
        painel.textContent = ''
        mostrarValorFinal('', oper)
    }else{
        switch(o){
            case '+' :
                somar()
                break;
            case '-':
                subtracao()
                break;
            case '/':
                divisao()
                break;
            case '*':
                multiplicacao()
                break;
        }
    }

    valuesOperation = []
    operation = []
}

btn.forEach(b => b.addEventListener('click', (e) => {
    atualizarPainel(e.target)

    if(e.target.className == 'operation'){
        valuesOperation.push(Number(painel.textContent))
        painel.textContent = ''
        switch(e.target.textContent){
            case '+':
                if(operation.map(e => e == '+'? true : false) == false){
                    operation.push('+')
                }
                break;
            case '-':
                if(operation.map(e => e == '+'? true : false) == false){
                    operation.push('-')
                }
                break
            case '/':
                if(operation.map(e => e == '+'? true : false) == false){
                    operation.push('/')
                }
                break;
            case 'x':
                if(operation.map(e => e == '+'? true : false) == false){
                    operation.push('*')
                }
                break
        }
    }

    if(e.target.textContent == '='){
        mostrarValorFinal(painel.textContent, operation[0])
    }

    if(e.target.textContent == 'C'){
        atualizarPainel('C')
    }
}))




