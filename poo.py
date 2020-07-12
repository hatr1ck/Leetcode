def canCompleteCircuit(gas, cost):
    total = 0
    tank = 0
    currentIteration = 'ass'
    for i in range(len(gas)):
        diff = gas[i] - cost[i]
        total +=diff
        tank +=diff
        if(currentIteration == 'ass'):
            currentIteration = i
        if(tank<0):
            tank=0
            currentIteration = 'ass'
    if(total<0):
        return -1
    if(currentIteration == 'ass'):
        return -1
    return currentIteration
print(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))