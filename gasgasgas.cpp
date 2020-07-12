
#include <array>
using namespace std;		
#include<iostream>
#include <string> 
#include <climits>
#include <stack>
#include <vector>
//c++ learning.cpp -o executable.exe & executable
// array<int, 5> myarray = { 1, 2, 3, 4, 5 };
int canCompleteCircuit(vector<int>& gas, vector<int>& cost)  {
    for(int i=0; i<gas.size(); i++){
        cout << gas[i]<< endl;
    }
    int total = 0;
    int tank = 0;
    int currentIteration = -1;
    for(int i=0; i<gas.size(); i++){
        int diff = gas[i] - cost[i];
        total +=diff;
        tank +=diff;
        if(currentIteration == -1){
            currentIteration = i;
        }
        if(tank<0){
            tank=0;
            currentIteration = -1;
        }
    }
    if(total<0){
        return -1;
    }
    if(currentIteration==-1){
        return -1;
    }
    return currentIteration;
  };
int main()
{   
    vector<int> gas={1,2,3,4,5};
    vector<int> cost={3,4,5,1,2};
    cout << canCompleteCircuit(gas, cost);
    return 0; 
}