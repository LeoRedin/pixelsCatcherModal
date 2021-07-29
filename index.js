/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const snap = true;

if (snap) {
  require('./indexSnap');
} else {
  AppRegistry.registerComponent(appName, () => App);
}
