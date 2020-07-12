
#include <array>
using namespace std;		
#include<iostream>
#include <string> 
#include <climits>
#include <stack>
#include <vector>
//c++ bfs.cpp -o executable.exe & executable
// array<int, 5> myarray = { 1, 2, 3, 4, 5 };
    class ass{
        int one = 1;
        public:
        void set(int n){
            one=n;
        }
        int get(){
            return one;
        }
    };
int main()
{   
    ass occurence[3];
    int i;
    for(i=0; i<3; i++){
        occurence[i].set(i);
    }
    for(int i=0; i<3; i++){
        cout << occurence[i].get() << endl;
    }
    return 0; 
}