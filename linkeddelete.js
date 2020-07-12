var removeElements = function(head, val) {
    function dfs(head, prev){
            if (!head || !head.next) {
                return;
            }
            // auto node_to_delete = node->next;
            head.val = head.next.val;
            head.next = head.next.next;
            console.log(head)
            return dfs(head.next, head.val)
        return dfs(head.next, head.val)
    }
    return dfs(head)
};
console.log(removeElements({val: 1, next:  { val: 6, next:{ val: 3, next:  null} } }, 6))