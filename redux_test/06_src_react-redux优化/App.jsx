import React, { Component } from 'react'
// containers容器Count
import Count  from './containers/Count'


export default class App extends Component {
  render() {
    return (
      <div>App
        {/* 给容器组件传递store */}
          <Count />
      </div>
    )
  }
}
