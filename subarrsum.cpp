#include <array>
using namespace std;		
#include<iostream>
#include <string> 
#include <climits>
#include <stack>
#include <vector>
#include <map>
//c++ subarrsum.cpp -o executable.exe & executable
// array<int, 5> myarray = { 1, 2, 3, 4, 5 };
int subarraySum(vector<int>nums, int k) {
    int count = 0;
    int sum = 0;
    int *b = &sum;
    cout << *b << endl;
    map<int, int> m;
    if(nums.size()==0) return 0;
    for(int i=0; i<nums.size(); i++){
        sum+=nums[i];
        if (m.find(sum-k) != m.end()) count += m[sum-k];
        if (m.find(sum) != m.end()) m[sum] = m[sum]+1;
        else m[sum] = 1;
    }
    return count;
};
int main()
{
    vector<int> nums={1,1,1};
    int k=2;
    subarraySum(nums, k);
    return 0; 
}