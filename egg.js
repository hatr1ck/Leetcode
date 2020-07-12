// A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking.

// If an egg is dropped from above that floor, it will break. If it is dropped from that floor or below, it will be completely undamaged and you can drop the egg again.

// Given two eggs, find the highest floor an egg can be dropped from without breaking, with as few drops as possible.

let arr1 = new Array(100).fill(0).map((e,i)=>i+1)
function eggDrop(arr, dropAt){
    let part1 = arr.slice(0, arr.length/2)
    let part2 = arr.slice(arr.length/2, arr.length )
    if(dropAt == 1 ) return console.log(1);
    console.log('execute')
    if(arr[1] == dropAt){
        console.log(arr[0]+1)
        return arr[0]+1
    }
    if(part2[0]<dropAt){
        eggDrop(part2, dropAt)
    }
    else{
        eggDrop(part1, dropAt)
    }
}
eggDrop(arr1, 48)
