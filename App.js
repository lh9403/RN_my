/*
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: lh
 * @Date: 2020-05-25 12:02:21
 * @LastEditors: lh
 * @LastEditTime: 2020-06-11 10:25:50
 */ 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import About from './src/about/about';
import AboutDetail from './src/about/aboutDetail/aboutDetail';
import HistoryList from './src/about/history/historyList';
import NoteList from './src/note/list';
import NoteDetail from './src/note/detail/noteDetail';

const TabStack = createBottomTabNavigator();
function TabStackScreen() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="文章" component={NoteList} />
      <TabStack.Screen name="关于" component={About} />
    </TabStack.Navigator>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="首页" component={TabStackScreen} />
        <Stack.Screen name="详情" component={NoteDetail} />
        <Stack.Screen name="关于我" component={AboutDetail} />
        <Stack.Screen name="历史" component={HistoryList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
