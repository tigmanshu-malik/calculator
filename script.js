let op1 = '';
let op2 = '';
let opr = '';
let click = 0;
display(0)

function display(num){

    let container = document.querySelector("#content")
    container.innerHTML = num
}

function collect(num) {
    if (click === 0) {
        op1 += num;
        display(op1)

    } else if (click === 1) {
        op2 += num;
        display(op2)
    }
}

function setOperator(operator) {
    if (click === 0 && op1 !== '') {
        opr = operator;
        click++;
    }

    else{
        evalu()
        opr = operator
    }
}

function evalu(){

    const expression = `${op1} ${opr} ${op2}`;
    const result = new Function('return ' + expression)();
    console.log(result);
    display(result)

    op1 = result.toString();
    op2 = '';
    opr = '';
    click = 1
}

function reset(){

    op1 = '';
    op2 = '';
    opr = '';
    click = 0;
    display(0)
}