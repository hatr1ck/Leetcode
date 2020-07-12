// var canCompleteCircuit = function(gas, cost) {
//     let tank = 0;
//     for(let i=0; i<gas.length; i++){
//         if(gas[i]-cost[i]>=0){
//             for(let j=i; j<gas.length+i; j++){
//                 tank += gas[j]-cost[j];
//                 if(j==gas.length-1){
//                     j=-1;
//                 }
//                 if(j==i-1 && tank>=0){
//                     return i;
//                 }
//                 if(j==i-1 && tank<=0){
//                     breal;
//                 }
//                 if(tank<=0){
//                     tank=0;
//                     break;
//                 }
//             }
//         }
//     }
//     return -1;
// };

var canCompleteCircuit = function(gas, cost) {
    let total = 0;
    let tank = 0;
    let currentIteration = 'ass';
    for(let i=0; i<gas.length; i++){
        let diff = gas[i] - cost[i];
        total +=diff;
        tank +=diff;
        if(currentIteration === 'ass'){
            currentIteration = i;
        }
        if(tank<0){
            tank=0;
            currentIteration = 'ass';
        }
    }
    if(total<0){
        return -1;
    }
    if(currentIteration=='ass'){
        return -1
    }
    return currentIteration
  };
  console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))