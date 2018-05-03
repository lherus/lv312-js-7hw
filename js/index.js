// let a = 1, b = 1, n = 15;
// document.write(a +  '<br>');
// document.write(b +  '<br>');
//     let j = 2, i = 2;
//     while (i < n) {
//         j = a + b;
//         a = b;
//         b = j;
// document.write(" " + j + '<br>');
//         i++;
// }


let n = parseFloat(prompt('Enter a number'));
function fib(n) {
    if (n <= 1) {
        return n;
    } return fib(n-1) + fib(n-2);
}
document.write(fib(n));