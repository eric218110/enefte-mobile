import 'styled-components'

type Color = {
  primary: string
  secondary: string
}

type Background = {
  dark: string
  light: string
  grayLight: string
  grayDark: string
}

type Actions = {
  sucess: string
  error: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color
    background: Background
    actions: Actions
  }
}
