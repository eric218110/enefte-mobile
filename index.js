import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import { Main } from './src/main/app'

AppRegistry.registerComponent(appName, () => Main)
