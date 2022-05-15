// homework4
//1 Create a function that builds a tree like object given an array with object which
// contains parent and id properties.
let arr = [
        {parent:null,id:0},
        {parent:0,id:1},
        {parent:0,id:2},
        {parent:1,id:3},
        {parent:1,id:4},
        {parent:2,id:5},
        {parent:4,id:6},
    ]
    function objtree(arr){
        let sortarr = arr.sort(function (a,b){
            if(a.id<b.id){
                return - 1
            }
        })
        let result = {}
        for(let node of sortarr){
            debugger
            if(node.parent === null){
                result[node.id] = {}
            }
            else{
                let branch = findbranch(node)
                let item1 = result 
                for(let value of branch){
                    item1 = item1[value.id]
                }
                item1[node.id] = {}
            }
        }
        function findbranch(object){
            debugger
            let result = []
            while(object.parent !== null){
                let item2 = sortarr.find(function (el,index,sortarr){
                    debugger
                    return el.id === object.parent
                })
                object = item2
                result.push(item2)
            }
            return result.reverse()
        }
        return result
    }
    console.log(objtree(arr))
    
//  3 Write a recursive function to determine whether all digits of the number are odd or
// not.
 function isOdd(number){
    debugger
    if(number % 2===0&&number !==0){
        return false
    }
    if(number === 0){
        return true
    }
    let c = number %10
    number = (number -c)/10
    return isOdd(number)
}


// 4Given an array of numbers. Write a recursive function to find its minimal positive element. (if
// such element does not exist, return -1)․
 function findMinel(arr,i=0,min = Infinity){
  if(arr[i]<min&&arr[i]>=0){
      min = arr[i]
  }
  if(i===arr.length&& min === Infinity){
      return - 1
  }
  if(i===arr.length){
      return min
  }
   i++
  return findMinel(arr,i,min)
}
let arr = [56, -9, 87, -23, 0, -105, 55, 1]
console.log(findMinel(arr))

function getmin(...args){
    debugger
    let min = Infinity 
    let sortedarr =  args.sort(function (a,b){
        if(a<b){
            return - 1
        }
    })
  for(let i = 0;i<sortedarr.length;i++){
      if(sortedarr[i]<0){
      continue
      }
      else{
          min = sortedarr[i]
          break
      }
  }
  if(min === Infinity){
      return - 1
  }
  else{
      return min
  }
}