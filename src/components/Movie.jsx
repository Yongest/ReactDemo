// 使用不同方式，导入组件
// import React, {Component} from 'react'
import React from 'react'

export default class Movie extends React.Component {

    constructor(){
        super()
        // this.state = {}  -----相当于vue中data(){return {}}
        this.state ={
            msg:'我是state里面的数据'
        }
    }

    // 渲染函数是一个实例的方法，继承与React.Component
   /*  class 关键字创建的组件中，如果使用外界传过来的属性参数，不需要接收，直接使用，this.props.***访问*/

// render作用：渲染当前组件对应的虚拟DOM元素
    render(){
        this.state.msg = 'state里面的msg被修改了，这里面的数据是可以修改的'
        return <div>
            {/* class 内部，this表示实例对象 */}
           
            {this.props.name}----{this.props.time}
            <h2>{this.state.msg}</h2>
        </div>
    }
}


// 构造函数与class创建的组件对比。
// class 创建的组件有自己的私有数据（this.state)，组件有生命周期
// class 创建出来的组件叫 状态组件，构造函数创建的组件叫做  无状态组件。
// 区别：有无是state,有无生命周期
// 用法：需要state 则用构造函数创建的组件
