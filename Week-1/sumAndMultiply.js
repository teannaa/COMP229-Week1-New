function SumX(a,b,...args){
    let sum = 0;
    let mul = 1;
    sum = a+b;
    for(const arg of args){
        mul = mul*arg;
    }
    var result = [];
    result.push(sum,mul);
    return result;
}
var myArray =[4,5,7,2,4];
var resultArray = SumX(...myArray);
console.log("sum:",resultArray[0]);
console.log("multiplied value:",resultArray[1]);