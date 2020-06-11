/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';

import {post} from './utils/request';
global.post = post;

// AppRegistry.registerComponent(appName, () => <NavigationContainer>><App/></NavigationContainer>);
AppRegistry.registerComponent(appName, () => App);
