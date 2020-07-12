let numbers = [2,6,4,9,12,5,7]
function quicksort(arr){
    //pick a pivot
    let pivot = (()=>{
        return [arr[0], arr[Math.floor(arr.length / 2)], arr[arr.length-1]].sort()[1]
    })()
    for(let i=0; i<arr.length; i++)
    console.log(pivot)
}

quicksort(numbers)
//f this