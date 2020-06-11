import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

export default function (props) {
  const {onClick, item} = props
  const {title, id} = item
  return <TouchableHighlight onPress={()=>onClick(id)} underlayColor="white">
    <View style={styles.view}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  </TouchableHighlight>
}

const styles = StyleSheet.create({
  view: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 1
  },
  title: {
    marginLeft: 20
  }
})
