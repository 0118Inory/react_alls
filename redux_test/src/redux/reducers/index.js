/** 该文件用于汇总所有的reucers为一个总的reducer */
import {combineReducers} from 'redux'

// 引入Count组件服务的reducer
import count from './count'
import persons from './person'
export default combineReducers({
    count,
    persons

})
