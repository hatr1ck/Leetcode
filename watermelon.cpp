//c++ learning.cpp -o executable.exe & executable
#include <array>
using namespace std;		
#include<iostream>
#include <string> 
#include <climits>
#include <stack>
#include <vector>
//c++ watermelon.cpp -o executable.exe & executable
int main()
{   
    int weight;
    cin >> weight;
    if(weight%2==0 && weight>2){
            cout << "Yes";
    }
    else{
        cout << "NO";
    }
    return 0; 
}