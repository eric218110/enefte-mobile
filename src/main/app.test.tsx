import { ThemeProviderUtils } from '@utils/test/theme'
import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import { Main } from './app'

it('renders correctly with Theme Provider', () => {
  const { Component } = ThemeProviderUtils({ children: <Main /> })

  renderer.create(Component)
})
