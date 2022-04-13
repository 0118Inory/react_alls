/* 
该文件专门为Count组件生成action对象

*/ 
// import store from './store'

import {INCREMENT,DECREMENT} from '../constant'

// 所谓的同步action，就是值action的值为函数

export const increment = data=>({type:INCREMENT,data})
export const decrement = data=>({type:DECREMENT,data})
// 所谓的异步action，就是值action的值为函数  异步action中一般都会调用同步action，异步不是必须要用的
export const incrementAsync = (data,time)=>{
    return(dispatch)=>{
        setTimeout(() => {
            dispatch(increment(data))
        }, time);
    }
}