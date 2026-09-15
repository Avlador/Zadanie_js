
capitalizmFirstletter = (str) =>{
    if(!str) return str
    return str[0].toUpperCase() + str.slice(1)
}
console.log(capitalizmFirstletter('привет'));

reverseString = (str) =>{
 return str.split('').reverse().join('')
}
console.log(reverseString('привет'));





countVowels = (str) =>{
    der = 'a, e, i, o, u'
    count = 0
for(let char of str.toLowerCase()){
if(der.includes(char)){
    count++
    
}
}
return count
}

console.log(countVowels('rfghjkbnj'));
console.log(countVowels('Hello'));





truncateText=(str, maxLength)=>{
    maxLength 
    if(str.length > maxLength){
        return str.slice(0, maxLength) + '...';
    }
    return str
}
console.log(truncateText('Слишком длинная строка', 10))




removeSpaces = (str) =>{
    return str.replaceAll(' ', '')
}
console.log(removeSpaces(' g h jg k l l l jg f i e '));





sumArray=(arr)=>{
    summ = 0;
    for(let i = 0; arr.length > i; i++){
        summ += arr[i]
    }
    return summ
}

console.log(sumArray([1,2,3,4,5]));




filterEvenNumbers=(arr)=>{
    result = []
    for(let i =0; arr.length > i; i++){
        if(arr[i] % 2 ==0){
            result.push(arr[i])
        }
    }return result
}
console.log(filterEvenNumbers([1,2,3,4]));






findMax=(arr)=>{
    return Math.max(...arr)
}
console.log(findMax([1,2,5,6,3]));



flattenArray=(arr)=>{
    return [].concat(...arr)
}
console.log(flattenArray([[1, 2], [3, [4]]]));




uniqueValues = (arr) =>{
    return new Set(arr)
}
console.log(uniqueValues([1, 1, 2, 3, 4, 4]));





printNumbers=(n)=>{
for(let i = 1; n >= i; i++){
    console.log(i);
    
}
}
printNumbers(5);





calculateFactorial =(n)=> {
    let result = 1;
    for(let i =2; i <= n; i++){

        result *=i
    }
    return result
}
console.log(calculateFactorial(5));




 generateMultiplicationTable=(n)=>{
    for(let num = n; num <= n; num++){
        for(let i= 1; i <= 10; i++){
            let result = num * i;
            console.log(`${num} * ${i} = ${result}`);
            
        }
    }
 }

 generateMultiplicationTable(5)






  sumOfDigits=(num)=>{
    let summ = 0
    for(let i = 1; i <= num; i++ ){
       summ += i
    }
    return summ
  }
  console.log(sumOfDigits(5));






  repeatString=(str, count)=>{
    let result = ''

    for(let i = 0; i < count; i++){
        result += str;
    }
    return result
  }

  console.log(repeatString('ad', 3));
  
  