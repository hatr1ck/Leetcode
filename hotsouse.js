var minTimeToVisitAllPoints = function(p) {
    let count = 0;
        for(let i=0; i<p.length-1; i++){
            count+= Math.max(Math.abs(p[i+1][1] - p[i][1]), Math.abs(p[i+1][0] - p[i][0]))
        }
        return count
    };
console.log(minTimeToVisitAllPoints([[3,2],[-2,2]]))

// let p1 = 0;
// let p2 = 1;
// let move = 0;
// while(move < 10){
//     if(points[p1][0] === points[p2][0] && points[p1][1] === points[p2][1]){
//         p1++
//         p2++
//     }
//     else if(points[p1][0] < points[p2][0] && points[p1][1] < points[p2][1]){
//         points[p1][0]++
//         points[p1][1]++
//         move++
//     }
//     else if(points[p1][0] < points[p2][0]){
//         points[p1][0]++
//         move++
//     }
//     else if(points[p1][1] < points[p2][1]){
//         points[p1][1]++
//         move++
//     }
//     else if(points[p1][0] > points[p2][0]){
//         points[p1][0]--
//         move++
//     }
//     else if(points[p1][1] > points[p2][1]){
//         points[p1][1]--
//         move++
//     }
// }
// return points