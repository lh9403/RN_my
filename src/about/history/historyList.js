import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import About from '../about';

class HistoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.bg}>

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

export default HistoryList
