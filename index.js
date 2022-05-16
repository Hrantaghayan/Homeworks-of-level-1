// homework4   
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