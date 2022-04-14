import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import { Main } from './app'

it('renders correctly', () => {
  renderer.create(<Main />)
})
