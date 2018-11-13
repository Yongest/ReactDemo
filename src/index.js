// 1.导包
import React from 'react'

import ReactDom from 'react-dom'

// 2.创建虚拟dom元素
// 虚拟dom：用js对象的形势，来表示dom 和 dom 之间的嵌套关系。
// const div = React.createElement('div',{id:'mydiv',title:'sss'},'this is a div element')

// 在js中默认不能写类似HTML的标记，需要巴贝拉来转换这些标签
// 这种在js中，混合写入类似HTML的语法，叫做jsx语法，符合xml规范的js
// 注意：jsx 语法的本质，是运行的时候，被转换成了React.createElement形式来执行

const div = <div>woshidiv <p>2222</p></div>


ReactDom.render(div,document.querySelector('#app'))