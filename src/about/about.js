/*
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: lh
 * @Date: 2020-05-29 12:09:36
 * @LastEditors: lh
 * @LastEditTime: 2020-06-11 10:45:51
 */ 
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import Item from './components/aboutItem';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        title: '关于我',
        id: 'about'
      }, {
        title: '历史记录',
        id: 'history'
      }]
    }
    this.itemClick = this.itemClick.bind(this);
  }

  itemClick(id) {
    this.props.navigation.navigate(id==='about'?'关于我':'历史')
  }

  render() {
    const {list} = this.state
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.bg}>
          {
            list.map(i => {
              return <Item key={i.id} item={i} onClick={this.itemClick}/>
            })
          }
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1
  },
  bg: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  }
})

export default About
