
var deleteDuplicates = function(head) {
    if(head == null) return;
    console.log(head.val)
    if(head.val < head.next.val){
        return deleteDuplicates(head.next)
    }
    else{
        return deleteDuplicates(head.next.next)
    }
};
let obj = {
    val:1,
    next:{
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 3,
                    next: null
                }
            }
        }
    }
}
console.log(deleteDuplicates(obj))

//1->1->2->3->3