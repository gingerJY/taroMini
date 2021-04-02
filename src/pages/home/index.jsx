import { Component } from 'react'
import Taro from "@tarojs/taro";
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log(Taro.options.html)
    console.log('transformElement', Taro.options.html.transformElement)
    return (
      <View className='home'>
        <Text className='text1'>Hello world!</Text>
      </View>
    )
  }
}
