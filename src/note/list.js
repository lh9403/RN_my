/*
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: lh
 * @Date: 2020-05-29 12:09:36
 * @LastEditors: lh
 * @LastEditTime: 2020-06-11 10:33:28
 */ 
import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';

import ListItem from './components/noteListItem';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    }
    this.itemClick = this.itemClick.bind(this);
  }

  componentDidMount(){
    return post('/notes/noteList', {
      method: 'POST',
    }).then((response) => {
      const {data} = response;
      this.setState({ listData: data });
    }).catch((error) =>{
      console.error(error);
    });
  }

  itemClick(id) {
    this.props.navigation.navigate('详情', {id})
  }

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <FlatList
          data={this.state.listData}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <ListItem item={item} onClick={this.itemClick}/>}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  }
})

export default NoteList
