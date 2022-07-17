//closure
function outer(num1){
    var x=10;

    function inner(num2){
        console.log(num1+num2+x);
    }

    return inner
}

var res=outer(5)

res(9)
