// homework 1 
//  level1 xndir 1 Given an object. Invert it (keys become values and values become keys). If there is
// more than key for that given value create an array.
let obj = {
        a:1,
        b:1,
        c:2,
        e:4,
        d:2,
        h:3,
        j:1,
        h:3
    }
let result = {}
for(let k in obj){
    const key = obj[k].toString()
    if(result[key]){
      if(Array.isArray(result[key])){
          result[key].push(k)
      }
      else{
          let array = []
          array.push(result[key])
          array.push(k)
          result[key]=array
      }
    }
    else{
        result[key] = k
    }
}
console.log(obj)
console.log(result)

// xndir 2 Given two objects. Write a function that performs shallow compare.
let a = {
    a:1,
    b:2
}
let b = {
    a:1,
    b:2,
    c:3
}
function shalowcompare(obj1,obj2){
    debugger
    for(let key in obj1)
     if(obj1[key] !== obj2[key] || !(key in obj2)){
         return false
    }
    for(let key in obj2){
        if(obj2[key]!== obj1[key] || !(key in obj1)){
            return false
        }
    }
    return true
}
console.log(shalowcompare(a,b))

// xnir 3 Given an array. Determine whether it consists only from uniques or not.
function isunique(array){
    let a;
    if(array.length === 0){
        return false;
    }
    for(let i = 0;i < array.length; i++){
        a = array[i]
        for(let j = i+1; j < array.length; j++){
            if(a === array[j]){
                return false
            }
        }
    }
    return true
}
let arraylength = +prompt('enter a number for arrayss lebgth')
let array = []
for (let i = 0;i<arraylength;i++){
array.push(prompt('enter anything'))
}
console.log(isunique(array))


// 4 xndirDetermine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
// word&quot;) is a word or phrase without a repeating letter.
function isIsogram(string){
    let str = string.toLowerCase()
    let firstcharacter;
    for(let i = 0; i < str.length; i++){
        firstcharacter = str[i]
        for(let j = i+1; j<str.length; j++){
            if(firstcharacter === str[j]){
                console.log('your string is not isogram')
                return false;
            }
        }
    }
    console.log('your string is isogram')
    return true;
}
let string = prompt('enter your word')
console.log(isIsogram(string))

// xndir 5Given an array of integers. All numbers are unique. Find the count of missing numbers
// between minimum and maximum elements to make integers sequence.
function  countmissinnumbers(array){
    let allcounts = 0
    let missingcounts = 0
    let max = -Infinity
    let min = Infinity
    for(let i = 0;i<array.length;i++){
        if(min>array[i]){
        min = array[i]
        }
    }
    for(let i = 0;i<array.length;i++){
        if(max<array[i]){
            max = array[i]
        }
    }
    for(let i = min;i<=max;i++){
          allcounts++
    }
    missingcounts = allcounts - array.length 
   return missingcounts
}
let array = [-5,-2,-1,1,0,2,6,9]
console.log(countmissinnumbers(array))
