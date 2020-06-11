import React from 'react';
import {View, Text} from 'react-native';

export default function (props) {
  const {title} = props;
  return <View style={bgStyle}>
    <Text style={spot}>○</Text>
    <Text style={titleStyle}>{title}</Text>
  </View>
}

const bgStyle = {

}

const spot = {
  position: 'absolute',
  color: 'green',
  left: -15,
  top: 3,
  fontSize: 10
}

const titleStyle = {
  fontSize: 18,
  fontWeight: 'bold',
}
