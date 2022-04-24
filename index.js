// 1. Given an array of numbers which is almost sorted in ascending order.  Find the index
// where sorting order is violated.
// 1tarberak
function isviolated(arr){
    let a;
    for(let i = 0;i<arr.length;i++){
       if(arr[i]>arr[i+1]){
           return i+1
       }
    }
    return -1
}
let arr = [1,2,3,4,5,8,6]
console.log(isviolated(arr))

// erkrord tarberak
let arr = [1,2,3,4,5,8,6]
const index = arr.findIndex(function (el,index,arr){
    if(el<arr[index - 1]){
        return true
    }
    return false
}) 
console.log(index)

// 2. Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array
// 1 tarberak 
function arraypoqracnel(arr){
    for(let i = 0;i<arr.length;i++){
        let sum = 0
        if(Array.isArray(arr[i])){
            for(let j = 0;j<arr[i].length;j++){
                 sum = sum + arr[i][j]
            }
            arr[i] = sum
        }
    }
    return arr
}
let arr = [[1], [2], [3], [4]]
console.log(arraypoqracnel(arr))

// 2tarberak
let arr = [[1], [2], [3], [4]]
const havaqarray = arr.map(function (el,index,arr){
    if(Array.isArray(el)){
        let sum = 0
        for(let i = 0;i<el.length;i++){
            sum = sum + el[i]
        }
        return sum
    }
})
console.log(havaqarray)

// 3. Given an array of integers. Write a function that return new array from first array,
// where removed even numbers, and odd numbers was multiplied with new array length
// 1tarberak
function  arraymecacnelerkarutyamb(arr){
    let result = []
    for(let i = 0;i<arr.length;i++){
        if(arr[i]%2 !== 0){
            result.push(arr[i])
        }
    }
    for(let j = 0;j<result.length;j++){
        result[j] = result[j]*result.length
    }
    return result
}
let arr = [[]]
console.log(arraymecacnelerkarutyamb(arr))

// erkrordtarberak
let arr = [[]]
const filter = arr.filter(function (el,index,arr){
    if(el%2 !== 0){
        return true
    }
})
const result = filter.map(function (el,index,filter){
    return el * filter.length
})
console.log(result)

// 4. Given a number. Write a function that calculates its sum of the digits and if that sum
// has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
// return the result.
// 1 tarberak
function sumofdigits(number){
    let sum = 0
    while(number !== 0 || sum>=10){
        if(number === 0 ){
            number = sum
            sum = 0
        }
        let c = number%10
        number = (number - c)/10
        sum = sum + c
    }
    return sum
}
console.log(sumofdigits(999999999999))

// 2tarberak
function sumofdigits(number){
    let sum = 0
    while(number!==0){
       let c = number%10
       number = (number - c)/10
       sum = sum + c
    }
    if(sum>=10||sum<=-10){
        return sumofdigits(sum)
    }
    return sum
}
console.log(sumofdigits(999999999999))

// 5. Write a recursive function which receives  a number as arguments and returns the
// fibonacci sequence as array.
function finonachi(number){
    let result = [1,1]
    if(number === 0){
        return []
    }
    if(number === 1){
        return [1]
    }
    for(let i = 2;i<number;i++){
        let fn =result[i-1]+result[i-2]
        result.push(fn)
    }
    return result
}
console.log(finonachi(10))