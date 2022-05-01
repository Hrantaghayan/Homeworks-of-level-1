// homework 3 
// 1 Given an array. Write a recursive function that removes the first element and returns the given
// array. (without using arr.unshift(),assign second element to first, third element to second...)
function removefirstelement(arr,i){
    debugger
    arr[i] = arr[i+1]
    i++
if(i>=arr.length){
    arr.pop()
    return arr
}
return removefirstelement(arr,i)
}
function foruser(arr){
    return removefirstelement(arr,0)
}

// 2Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function
// that concats arrays).
function flatternarr(arr){
    debugger
    let result = []
    for(let i = 0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
        result = result.concat(flatternarr(arr[i]))
        }
        else{
            result.push(arr[i])
        }
    }
    return result
}

// 3Given an array and a number N.  Write a recursive function that rotates an array N places to the
// left. (Hint: to add element to the beginning use arr.unshift())
function rotateArray(arr,n){
    debugger
    if(n===0){
        return arr
    }
    arr.push(arr.shift())
    n--
    return rotateArray(arr,n)
}

// 4Given the list of the following readers:
// Output the books sorted by the percent in descending order which readStatus is true.
const filter = arr.filter(function(el,index,arr){
    if(el.readStatus===true){
        return true
    }
})   
const result = filter.sort(function(a,b){
    if(a.percent>b.percent){
        return -1
    }
})     

// 5 Implement “map” method for plain objects (same as Array map method.)
function custommapforobjects(fn){
    debugger
    if (typeof fn !== 'function'){
        console.log(fn +' is not function')
        return
    }
let result = {}
for(let key in this){
    if(fn(this[key],key,this)){
    result[key] = fn(this[key],key,this)
    }
    if(fn(this[key],key,this)===undefined){
        if(result[key]!== fn){
            result[key] = undefined 
        }
    }
}
return result
}