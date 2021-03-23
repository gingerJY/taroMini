import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { KAppBar } from '../../components/index'
import './index.scss'

export default class User extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='user'>
        <KAppBar
          title='我的'
          background='#fff'
          back
          home
          onBack={this.handlerGobackClick}
          onHome={this.handlerGohomeClick}
        />
        {/* <KAppBar renderLeft={<Text className='text1'>Hello world!</Text>} /> */}
        <Text className='text1'>Hello world!</Text>
      </View>
    )
  }
}
