// 使用不同方式，导入组件
// import React, {Component} from 'react'
import React from 'react'
import CommentItem from  '@/components/CommentItem'

import css from '@/css/title.scss'
import  'bootstrap/dist/css/bootstrap.css'
// 外部样式

export default class Comment extends React.Component{
    constructor(){
        super()
        this.state ={
            userList:[
                {name:'张三',age:18},
                {name:'张5',age:19},
                {name:'张',age:15},
            ],
            msg:"我是评论组件"
        }
    }

    render(){
        return <div>
            <h2 className={css.title}>我是头部</h2>
            <h6>{this.state.msg}</h6>
            <input type="text" value={this.state.msg} onChange={(e)=>{this.txtChange(e)}} ref='txt' />
            <hr/>
            <button className='btn' onClick={()=>this.show()}>按钮</button>
            {this.state.userList.map(item=>
                <CommentItem {...item} key={item.name}></CommentItem>
            )}
        </div>
    }

    txtChange(e){
        let value = this.refs.txt.value;
        this.setState({
            // msg:e.target.value
            msg:value
        })
    }
    show=()=>{
// 异步方法
        this.setState({
            msg:'事件用法'
        },function(){
            console.log(this.state.msg)
        })
    }
}
