// 1. Get array of node ids from tree (keys).
function createarrayofobj(obj,result = []){
     debugger
     for(let key in obj){
       if(typeof obj[key]==='object'&&obj[key]!==null ){
         result.push(key)
         esim(obj[key],result)
       }
     }
     return result
   } 
    let result = esim(obj)
    result.sort((a,b)=>{
      if(Number(a)<Number(b)){
        return - 1
      }
    })
    console.log(result)


// 2. Get array of nodes from tree.
// You need to print
// [ { id: 0, children: [1, 2] }, { id: 1, children: [ 3, 4 ] }, …….. ]
// Order doesn&#39;t matter.
let obj = {
    0:{
    1:{
        3:{
            
        },
        4:{
            6:{
                
            }
        }
    },
        2:{
            5:{
                
            }
        }
    }
  }
   function createObj(obj,result = []){
     debugger
     for(let key in obj){
       if(typeof obj[key]==='object'&&obj[key]!==null ){
         let node = {}
         node.id = key
         node.children = []
         for(let k in obj[key]){
          node.children.push(k)  
       }
       result.push(node)
       esim(obj[key],result)
      }
     }
     return result
   } 
    let data = esim(obj)
    data.sort((a,b)=>{
      if(Number(a.id)<Number(b.id)){
        return - 1
      }
    })
    console.log(result)

// 3 Implement binary search.
// First you need to research binary search WITHOUT the
// implementation itself.
function binearysearch (arr,value){
    let sortedarray = arr.sort((a,b)=>{
        if(a<b){
            return - 1
        }
    })
    let start = 0
    let end = sortedarray.length-1
  //   debugger
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(sortedarray[mid]===value){
            return mid
        }
        else if(sortedarray[mid]<value){
            start = mid+1
        }
        else{
            end = mid-1
        }
    }
  return false
  }