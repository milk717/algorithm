class Node:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None

class BinaryTreeSearch:
  def __init__(self):
    self.root = None

  def insert(self, value):
    if self.root is None:
      self.root = Node(value)
      return 
    
    current = self.root
    while True:
      if value < current.value:
        if current.left is None:
          current.left = Node(value)
          return
        current = current.left
      else:
        if current.right is None:
          current.right = Node(value)
          return
        current = current.right

  def pre_order(self, node):
    if node is not None:
      print(node.value)
      self.pre_order(node.left)
      self.pre_order(node.right)
  
  def in_order(self, node):
    if node is not None:
      self.in_order(node.left)
      print(node.value)
      self.in_order(node.right)
      
  def post_order(self, node):
    if node is not None:
      self.post_order(node.left)
      self.post_order(node.right)
      print(node.value)

bst = BinaryTreeSearch()

for i in [10, 5, 15, 3, 7, 12, 18]:
  bst.insert(i)

bst.in_order(bst.root)