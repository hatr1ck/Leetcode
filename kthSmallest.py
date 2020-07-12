def kthSmallest(self, root, k: int) -> int:
    stack = []
    res = []
    while stack or root:
        while root:
            stack.append(root)
            root = root.left
        root = stack.pop()
        res.append(root)
        root = root.right
    return res[k-1].val


tree = {
    "val": 3,
    "left": None,
    "right": None
}
print(kthSmallest(None, tree, 1))
