
#include <array>
using namespace std;
#include <iostream>
#include <string>
#include <climits>
#include <stack>
#include <vector>
//c++ kthSmallest.cpp -o executable.exe & executable
struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
int kthSmallest(TreeNode *root, int k)
{
    stack<TreeNode *> st;
    TreeNode *cur = root;
    while (cur || !st.empty())
    {
        while (cur)
        {
            st.push(cur);
            cur = cur->left;
        }
        cur = st.top();
        st.pop();
        k--;
        if (k == 0)
        {
            return cur->val;
        }
        cur = cur->right;
    }
    return -1;
}
int main()
{
    cout << kthSmallest();
    return 0;
}