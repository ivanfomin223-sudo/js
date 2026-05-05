// Task 1.
let a = 7;
let b = 9;
console.log(a*b);
// Task 2.
let c = 7;
let d = 9;
document.querySelector('.out-2').textContent = c/d;
// Task 3.
let e = 3;
let f = 5;
document.querySelector('.out-3').textContent = e + f;

// Task 4.
let e1 = '3';
let f1 = 5;
document.querySelector('.out-4').textContent = e1 + f1;
// Task 5.
let e2 = 3;
let f2 = 0;
document.querySelector('.out-5').textContent = e2/f2;
// Task 6.
let e3 = 3;
let f3 = 'Hello';
document.querySelector('.out-6').textContent = e3 + f3;

// Task 7.
let e4 = 3;
let f4 = 'Hello';
document.querySelector('.out-7').textContent = e4 * f4;

// Task 8.
let inputIn1 = document.querySelector('.i-8');
let button = document.querySelector('.b-8');
let output1 = document.querySelector('.out-8');
button.onclick = function t8() {  
    let val = inputIn1.value;
    output1.innerHTML = val;  
}

// Task 9.
function t9() {
    let input = document.querySelector('.i-9');
    let out = document.querySelector('.out-9');
    out.textContent = input.value;
    input.value = '';
}
document.querySelector('.b-9').onclick = t9;

// Task 10.
function t10() {
    let input = document.querySelector('.i-10');
    let out = document.querySelector('.out-10');
    out.textContent = input.value * 20;
    input.value = '';
}
document.querySelector('.b-10').onclick = t10;
// Task 11.
function t11() {
    let input = document.querySelector('.i-11');
    let out = document.querySelector('.out-11');
    out.textContent = input.value + 55;
    input.value = '';
}
document.querySelector('.b-11').onclick = t11;
// Task 12.
let name = document.querySelector ('.i-12-1').value;
let surname = document.querySelector ('.i-12-2').value;
function t12() {
    let name = document.querySelector ('.i-12-1').value;
    let surname = document.querySelector ('.i-12-2').value;
    document.querySelector('.out-12').textContent = `Hello ${name} ${surname}`; 
}


document.querySelector('.b-12').onclick = t12;

// Task 13.

function t13() {
    let number1 = +document.querySelector ('.i-13-1').value;
    let number2 = +document.querySelector ('.i-13-2').value;
    document.querySelector('.out-13').textContent = number1 + number2;
}

document.querySelector('.b-13').onclick = t13;

// Task 14.
function t14() {
    let input = document.querySelector('.i-14');
    input.value = 'Go';
}
document.querySelector('.b-14').onclick = t14;
// Task 15.
function t15() {
    let input = document.querySelector('.i-15');
    input.style.border = "4px solid red";
}
document.querySelector('.b-15').onclick = t15;
// Task 16.
function t16() {
    let input1 = document.querySelector('.i-16-1');
    let input2 = document.querySelector('.i-16-2');
    let out = document.querySelector('.out-16');
    out.textContent = input1.value + input2.value;
}
document.querySelector('.b-16').onclick = t16;
// Task 17.
function t17() {
    let input = document.querySelector('.i-17');
    let out = document.querySelector('.out-17');
    let data = input.value;
    out.innerHTML = `Множення на 1: ${data * 1} <br> Через Number(): ${Number(data)}`;
}
document.querySelector('.b-17').onclick = t17;
// Task 18.
function t18() {
    let a = document.querySelector('.i-18').value;
    let out = document.querySelector('.out-18');
    out.textContent = parseFloat(a);
}
document.querySelector('.b-18').onclick = t18;
// Task 19.

function t19() {
    let number1 = +document.querySelector ('.i-19-1').value;
    let number2 = +document.querySelector ('.i-19-2').value;
    let output = document.querySelector('.out-19');
    if (number1 < 0 && number2 < 0) {
        output.textContent = number1 + number2;
    }
    else{
        output.textContent = 'Помилка'
    }

}

document.querySelector('.b-19').onclick = t19;

// Task 20

let count = 0 
function t20() { 
    count++;
    let output = document.querySelector('.out-20');
    output.textContent = count.toString();
}

document.querySelector('.b-20').onclick = t20;