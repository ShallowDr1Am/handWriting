const data = [
  {
    id: 1,
    text: '节点1',
    parentId: 0,
    children: [
      {
        id: 2,
        text: '节点1_1',
        parentId: 1
      }
    ]
  }
]

function treeToList(data) {
  const res = []
  for (const item of data) {
    dfs(item, res)
  }

  /**
   * 遍历tree,格式化到res
   * @param {*} tree 
   * @param {*} res 
   */
  function dfs(tree, res) {
    const newTree = {
      id: tree.id,
      text: tree.text,
      parentId: tree.parentId,
    }
    res.push(newTree)
    if (tree.children) {
      for (const item of tree.children) {
        dfs(item, res)
      }
    }
  }
  return res
}

console.log(treeToList(data))

let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 6, name: '部门6', pid: 0 },
]

// O(n)
function listToTree(arr) {
  const list = []
  const hashMap = {}
  for (let i = 0; i < arr.length; i++) {
    // 存储每个id下的子元素
    let pid = arr[i].pid
    let id = arr[i].id

    // 初始化每个id值
    if (!hashMap[id]) {
      hashMap[id] = { children: [] }
    }
    // 更新id值
    hashMap[id] = { ...arr[i], children: hashMap[id].children }

    // 根据pid添加到相应的
    if (pid === 0) {
      list.push(hashMap[id])
    } else {
      if (!hashMap[pid]) {
        hashMap[pid] = {
          children: []
        }
      }
      hashMap[pid].children.push(hashMap[id])
    }
  }
  return list
}

//O(n2)
function listToTree(arr) {
  const list = []
  arr.forEach(element => {
    // 找到当前id下，所有的子id
    const children = arr.filter(ele => {
      return element.id === ele.pid
    })
    if (children.length > 0) {
      element.children = children
    }
    if (element.pid === 0) {
      list.push(element)
    }
  })
  return list
}
console.log(listToTree(arr))
