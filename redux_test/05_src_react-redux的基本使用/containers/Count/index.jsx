// 引入Count的UI组件
import CountUI from '../../components/Count'
import { createIncrementAction ,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
// 引入store
// import store from '../../redux/store'
// 引用connect用于连接UI组件与redux
import {connect} from 'react-redux'
// mapStateToProps函数返回的是一个对象：
// 返回的对象中的KEY就作为传递给UI组件props的key,value就作为爨地给UI组件props的value---状态
// mapStateToProps用于传递状态
function mapStateToProps(state) {
    return{count:state}
}
// mapDispatchToProps函数返回的是一个对象：
// 返回的对象中的KEY就作为传递给UI组件props的key,value就作为爨地给UI组件props的value---状态
// mapDispatchToProps用于传递状态

function mapDispatchToProps(dispatch) {
    return{jia:number=>
        // 通知redux执行加法
       dispatch(createIncrementAction(number)),
       jian:number=>
       dispatch(createDecrementAction(number)),
       jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
    }
    
}


//使用connect()()创建并暴露一个Count的容器组件
export default  connect(mapStateToProps,mapDispatchToProps)(CountUI)

