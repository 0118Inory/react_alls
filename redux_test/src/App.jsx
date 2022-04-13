import React, { Component } from 'react'
// containers容器Count
import Count  from './containers/Count'
import Person  from './containers/Person'


export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
          <Count />
          <hr/>
          <hr/>
          <hr/>
          <hr/>
          <Person/>
      </div>
    )
  }
}
