"use stict";
const btn = document.querySelectorAll("button");
const painel = document.getElementById('painel')
const previousValue = document.getElementById('previous-value')

var valuesOperation = []
var operation = []

function atualizarPainel(btnValue){
    if(btnValue.className == 'igual' || btnValue.className == 'operation' || btnValue.className == 'comand'){
        return ''
    }else{
        painel.textContent += btnValue.textContent
    }

    if(painel.textContent.length > 10 && painel.textContent.length < 14){
        painel.style.fontSize = '3em'
    }else if(painel.textContent.length > 14 && painel.textContent.length < 21){
        painel.style.fontSize = '2em'
    }else if(painel.textContent.length > 21){
        painel.style.fontSize = '1em'
    }else if(painel.textContent.length > 41){
        painel.style.fontSize = '1em'
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
        previousValue.textContent += ` ${painel.textContent} ${e.target.textContent}`
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

    switch(e.target.textContent){
        case 'C':
            previousValue.textContent = ''
            operation = []
            valuesOperation = []
            break
        case 'CE':
            painel.textContent = ''
            previousValue.textContent = ''
            operation = []
            valuesOperation = []
            break;
        case 'DEL':
            const painelSting = `${painel.textContent}`
            painel.textContent = painelSting.substring(0, painelSting.length - 1)
            break;
        case '=':
            mostrarValorFinal(painel.textContent, operation[0])
            previousValue.textContent = ''
            break;
    }
}))




