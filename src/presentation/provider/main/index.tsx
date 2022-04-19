import { themeDark, themeLight } from '@presentation/global/theme'
import { Screen } from '@presentation/screens'
import React from 'react'
import { useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components'

export const MainProvider = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
      <Screen />
    </ThemeProvider>
  )
}
