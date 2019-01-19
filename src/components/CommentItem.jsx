// 使用不同方式，导入组件
// import React, {Component} from 'react'
import React from 'react'

import style from '@/style'
export default function CommentItem(props){
    return  <p style={style.item} key={props.name}>{props.name}---{props.age}</p>
}