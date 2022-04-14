import { Screen } from '@presentation/atomic/screens'
import { themeDark, themeLight } from '@presentation/global/theme'
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
