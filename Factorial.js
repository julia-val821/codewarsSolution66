https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

    function factorial(n){
        let num = 1;
        let factorialNum = 1;
        while(num <= n){
            factorialNum *= num;
            num++;
        }
        return factorialNum;
    }