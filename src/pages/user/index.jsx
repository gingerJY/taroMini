import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { ColorfulShadow } from '@/components/cute/index'
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
        <Text className='text1'>Hello world!</Text>
        <ColorfulShadow />
      </View>
    )
  }
}
