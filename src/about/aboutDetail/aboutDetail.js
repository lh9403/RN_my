import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView,View, Text } from 'react-native';

import Section from './components/detailSection';
import Tag from '../../../components/tag'
import Divider from '../../../components/divider'

class AboutDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      tag: [],
      explain: [], // 技术栈介绍
      experience: [] // 工作经历
    }
  }

  componentDidMount() {
    this.getDetail();
  }

  async getDetail() {
    try {
      const response = await post('/users/userInfo', {
        uId: '1',
      });
      const {
        data: {user, tag, explain, experience}
      } = response
      this.setState({
        user, tag, explain, experience
      })
    } catch (e) {
      console.log(e)
    }
  }

  topView = () => {
    const {
      user: {name, age, workState}
    } = this.state
    return <View>
      <Text style={styles.topViewName}>{name}</Text>
      <Text style={styles.topViewInfo}>{age} | {workState}</Text>
    </View>
  }

  tagView = () => {
    const {
      tag
    } = this.state
    return <View style={styles.tagView}>
      {
        tag.map(i => <Tag key={i.id} title={i.name}/>)
      }
    </View>
  }

  introduce = () => {
    const {
      explain
    } = this.state
    const textStyle = {
      marginTop: 10,
      fontSize: 15
    }
    const arr = []
    explain.map(i => arr.push(<Text style={textStyle} key={i.id}>· {i.content}</Text>))
    return arr
  }

  experience = () => {
    const {
      experience
    } = this.state
    const bg = {
      marginTop: 15
    }
    const companyFont = {
      fontSize: 15,
      fontWeight: 'bold'
    }
    const jobFont = {
      marginTop: 15
    }
    const jobContentFont = {
      marginTop: 15,
      lineHeight: 20
    }
    const arr = []
    experience.map(i => {
      const {id, company, job, jobContent} = i
      arr.push(<View key={id} style={bg}>
        <Text style={companyFont}>{company}</Text>
        <Text style={jobFont}>{job}</Text>
        <Text style={jobContentFont}>{jobContent}</Text>
        <Divider style={{marginBottom: 0}}/>
      </View>)
    })
    return arr
  }

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <ScrollView style={styles.safeView}>
          <View style={styles.bg}>
            {this.topView()}
            <Divider />
            <Section title='个人技术栈标签'/>
            {this.tagView()}
            <Divider />
            <Section title='个人技术栈应用'/>
            {this.introduce()}
            <Divider />
            <Section title='工作及项目经历'/>
            {this.experience()}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  bg: {
    padding: 30,
  },
  topViewName: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  topViewInfo: {
    marginTop: 10,
    color: '#666666'
  },
  tagView: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap', // 换行
  },
})

export default AboutDetail
