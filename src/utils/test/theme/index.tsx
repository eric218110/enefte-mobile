import { themeDark } from '@presentation/global/theme'
import { ThemeProvider } from '@utils/test/mock/styled-component'
import React from 'react'
import 'react-native'

type ThemeProviderUtilsType = {
  children: JSX.Element
}

export const ThemeProviderUtils = ({ children }: ThemeProviderUtilsType) => {
  return {
    Component: <ThemeProvider theme={themeDark}>{children}</ThemeProvider>
  }
}
