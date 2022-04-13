import React, { Component } from 'react'
// 引入store ，用于获取redux中保存状态
import store from '../../redux/store'
// 移入actionCreator，专门创建action对象
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'

export default class Count extends Component {
    state={count:0}
    // componentDidMount(){
    //     // 检测redux中状态的变化，只要变化，就调用render
    //     store.subscribe(()=>{
    //     this.setState({})

    //     })
    // }
//   加法
    increment=()=>{
        const{value}=this.selectNumber
        // 通知redux加value
        // store.dispatch({type:'increment',data:value*1})
        // 通过count_action封装引入新的方法
        store.dispatch(createIncrementAction(value*1))
        // const{count}=this.state
        // this.setState({count:count+value*1})
    }
    // 减法
    decrement=()=>{
        const{value}=this.selectNumber
        // const{count}=this.state
        // this.setState({count:count-value*1})
        // store.dispatch({type:'decrement',data:value*1})
        store.dispatch(createDecrementAction(value*1))


    }
    // 基数再加
    incrementIfOdd=()=>{
        const{value}=this.selectNumber
        const count=store.getState()
        if (count % 2 !==0) {
            // store.dispatch({type:'increment',data:value*1})
        store.dispatch(createIncrementAction(value*1))


            
        }
    }
    // 异步加
    incrementAsync=()=>{
        const{value}=this.selectNumber
        // const{count}=this.state
        setTimeout(()=>{
            // store.dispatch({type:'increment',data:value*1})
        store.dispatch(createIncrementAction(value*1))



        },500)
    }
  render() {
    return (
      <div>
          <h1>当前求和为：{store.getState()}</h1>
          <select ref={c=>this.selectNumber=c}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>&nbsp;&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>当前求和为基数在加</button>&nbsp;
          <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}
