import React from 'react';
import {View, Text} from 'react-native';

export default function (props) {
  const {title} = props;
  return <View style={bgStyle}>
    <Text style={titleStyle}>{title}</Text>
  </View>
}

const bgStyle = {
  backgroundColor: '#e9f3ff',
  padding: 10,
  margin: 5,
  borderRadius: 5
}

const titleStyle = {
  fontSize: 15,
  color: '#3794ff'
}
