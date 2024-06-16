/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// appName을 통해서 android, ios를 실행할 수 있다.
// appName을 변경하면, android, ios 설정을 바꿔야한다.
AppRegistry.registerComponent(appName, () => App);