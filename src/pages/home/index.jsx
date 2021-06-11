import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import './index.scss'

class Index extends Component {

  componentDidMount() {
    console.log('props', this.props)
  }

  render() {
    const { name } = this.props
    return (
      <View className='home'>
        <Text className='title'>{name}</Text>
      </View>
    )
  }
}

export default connect(({ common }) => ({ ...common }))(Index);
