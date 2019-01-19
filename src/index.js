// 1.导包
import React from 'react'

import ReactDom from 'react-dom'

// 2.创建虚拟dom元素
// 虚拟dom：用js对象的形势，来表示dom 和 dom 之间的嵌套关系。
// const div = React.createElement('div',{id:'mydiv',title:'sss'},'this is a div element')

// 在js中默认不能写类似HTML的标记，需要巴贝拉来转换这些标签
// 这种在js中，混合写入类似HTML的语法，叫做jsx语法，符合xml规范的js
// 注意：jsx 语法的本质，是运行的时候，被转换成了React.createElement形式来执行

let arr = [3,2,5,7,0]
const div = <div>woshidiv <p>2222</p></div>

let newArr = [];
arr.forEach((item,i)=>{
    newArr.push (<h2 key={i}>{item}</h2>)
})
// 没有导出的写法。
// import '@/class'

// import '@/classSuper'

// import Hello from '@/components/Hello'

// import Movie from '@/components/Movie'
let dog = {
    name:'小黄',
    age:5,
    gender:'雄',
    time:'晚上九点开播'
}

// 导入评论组件
import Comment from '@/components/Comment'


ReactDom.render(<div>
{/* // {newArr} */}
<hr/>
{/* // {arr.map(item=><div key={item}><h2>{item}</h2></div>)} */}
<hr/>
{/* <div className='blue'>好了</div> */}
{/* 组件的第一种用法 */}
{/* <Hello name={dog.name} age={dog.age}></Hello> */}

{/* 展开运算符的用法 */}
{/* <Hello {...dog}></Hello> */}
<hr/>

{/* <Movie {...dog}></Movie> */}
<Comment></Comment>

</div>,document.querySelector('#app'))