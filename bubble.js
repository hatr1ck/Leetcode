function countSwaps(a) {
    var swapCount = 0;
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                swapCount++;
                console.log(a[j], a[j + 1])
                var temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    console.log(`Array is sorted in ${swapCount} swaps`)
    console.log('First Element: ' + a[0])
    console.log('Last Element: ' + a[a.length-1])
    }
    countSwaps([3,2,1]) //3
//     Array is sorted in 3 swaps.
// First Element: 1
// Last Element: 3