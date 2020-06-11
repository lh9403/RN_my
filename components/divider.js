import React from 'react';
import {View} from 'react-native';

export default function (props) {
  const {style} = props
  return <View style={[bgStyle, style]} />
}

const bgStyle = {
  height: 1,
  backgroundColor: '#f5f5f5',
  width: '100%',
  marginTop: 20,
  marginBottom: 20,
}

