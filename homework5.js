// 1. Create a function that builds a tree.
        const treeNodes = [
        {id: 'root', children: [1, 2]},
        {id: 1, children: [3]},
        {id: 2, children: [4, 5]},
        {id: 3, children: [6]},
        {id: 4, children: [7]},
        {id: 5, children: []},
        {id: 6, children: []},
        {id: 7, children: [8, 9]},
        {id: 8, children: []},
        {id: 9, children: [10]},
        {id: 10, children: []},
        ]
    function find(arr){
        debugger
        let tree = {}
        for(let i = 0;i<arr.length;i++){
            if(Array.isArray(arr[i].children)){
            if(arr[i].id === 'root'){
                for(let j = 0;j<arr[i].children.length;j++){
               tree[arr[i].children[j]] = {}
                }
            }
         }
       }
        return tree 
    }
    function objtree(arr,tree = find(arr),count = 0){
        debugger
        if(count===arr.length){
            return tree 
        }
        for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr[i].children.length;j++){
            if(tree.hasOwnProperty(arr[i].id) === true){
                tree[arr[i].id][arr[i].children[j]] = {}
                count++
                objtree(arr,tree[arr[i].id],count)
            }
          }
        }
    return tree 
    }
    console.log(objtree(treeNodes,tree=find(treeNodes),count = 0))

    // 2. Write a JavaScript function to get all possible subsets of given length of the given
    // array.
    // Assume that all elements in the array are unique.
function finish (arr1,result,index = 0,data = []){
  // debugger
  if(index === result.length){
      return data
  }
  let findindex =find(arr1,result,index) 
  for(let i = findindex+1;i<arr.length;i++){
     data.push(result[index].concat(arr[i])) 
  }
  index++
  function find(arr1,result,inddex){
  // debugger
  let hamar;
  for(let i = 0;i<arr1.length;i++){
      if(arr1[i]===result[index][result[index].length-1]){
          hamar = i
          break
      }
  }
  return hamar 
}
  return finish(arr1,result,index,data)
}
function createsubarrays(arr,length){
  let number = length 
  let resultoffindindex;
  let index = 0
  let data = []
  // debugger
  let result = []
  if(number === 2){
      for(let i = 0;i<arr.length - 1;i++){
          result.push([arr[i]])
      }
      return result 
  }
  function check(result,number){
         for(let i = 0;i<result.length;i++){
             if(result[i].length===number-1){
                 return true
             }
            return false 
         }
     }
  for(let i = 0;i<length;i++){
      result.push([arr[i]])
  }
 function colect(arr,length,index,data,result,number){
     if(check(data,number)===true&&length === 0){
         return data 
     }
     // debugger
     if( check(data,number)===false&&length === 0){
         result = data 
         data = []
         index = 0
         return colect(arr,result.length,index,data,result,number)
     }
      function findindex (arr,result,index){
         // debugger
         let ind;
         for(let i = 0;i<arr.length;i++){
             if(arr[i]===result[index][result[index].length-1]){
                  ind = i
                 break
             }
         }
         return ind
     }
      resultoffindindex = findindex(arr,result,index)
     for(let i = resultoffindindex+1;i<arr.length-1;i++){
        let x =  result[index].concat(arr[i])
             data.push(x)
         }
     length--
     index = index+1
     return colect(arr,length,index,data,result,number)
 }
  return colect(arr,result.length,index,data,result,number)
}
let arr = [1,2,3,4]
console.log(finish(arr,createsubarrays(arr,3)))


// 3. Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds.
function delay(fn,ms){
    let savethis = this
    function res(...args){
        setTimeout(function (){
            return fn.apply(savethis,args)
        },ms)
    }
    return res 
}

// 4. Implement Debounce decorator
function debonce(fn,ms){
    debugger
    let savethis = this
    let timeid;
    function res(...args){
        debugger
        clearTimeout(timeid)
         timeid = setTimeout(function (){
             return fn.apply(savethis,args)
         },ms)
    }
    return res 
}

