import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

export default function (props) {
  const {onClick, item} = props
  const {title, id, simpleContent} = item
  return <TouchableHighlight onPress={()=>onClick(id)} underlayColor="white">
    <View style={styles.view}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.content}>
        {simpleContent}
      </Text>
    </View>
  </TouchableHighlight>
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  content: {
    fontSize: 15,
    marginTop: 10
  }
})
