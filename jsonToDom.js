const vDom = {
  tag: 'DIV',
  attrs: {
    id: 'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [{ tag: 'A', children: [] }]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [123] },
        { tag: 'A', children: [456] },
        789
      ]
    }
  ]
};

function render(vNode) {
  // 先判断是否是text类型的数据
  if (typeof vNode === 'number') {
    return document.createTextNode(String(vNode))
  }
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode)
  }

  // 解构获取 dom属性和类型以及children
  const { tag, attrs = {}, children = [] } = vNode
  const dom = document.createElement(tag)

  // 遍历属性 给dom set上
  Object.keys(attrs).forEach((attr) => {
    dom.setAttribute(attr, attrs[attrs])
  })

  // 对children做递归调用
  children.forEach((child) => {
    dom.append(render(child))
  })
  return dom
}

render(vDom)