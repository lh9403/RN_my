/*
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: lh
 * @Date: 2020-05-29 12:09:36
 * @LastEditors: lh
 * @LastEditTime: 2020-06-11 10:44:16
 */ 
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const INJECTEDJAVASCRIPT = `
  const meta = document.createElement('meta'); 
  meta.setAttribute('content', 'initial-scale=1, maximum-scale=1, user-scalable=0'); 
  meta.setAttribute('name', 'viewport'); 
  document.getElementsByTagName('head')[0].appendChild(meta); 
  const p = document.getElementsByTagName('p');
  for ( var i=0;i<p.length;i++ ) {
    p[i].style = "font-size: 15px;";     
  }
`;

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      networkData: []
    }
    this.getDetail = this.getDetail.bind(this);
  }

  componentDidMount(){
    this.getDetail()
  }

  async getDetail()  {
    const {id} = this.props.route.params
    try {
      const response = await post('/notes/noteDetail', {
        id
      })
      const {data} = response
      this.setState({ networkData: data })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const {title, content} = this.state.networkData
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.bg}>
          <Text style={styles.title}>{title}</Text>
          <WebView
            style={styles.webview}
            // originWhitelist={['*']}
            // source={{ uri: 'https://www.lhintro.com' }}
            source={{ html: this.state.networkData.content }}
            // automaticallyAdjustContentInsets
            // javaScriptEnabled={true}
            // domStorageEnabled={true}
            // scalesPageToFit={false}
            injectedJavaScript={INJECTEDJAVASCRIPT}
            onMessage={e=>console.log(e)}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  bg: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  webview: {
    marginTop: 20
  }
})

export default NoteDetail
