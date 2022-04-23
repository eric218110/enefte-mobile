import { MainProvider } from '@presentation/provider/main'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import ReactNativeSplashScreen from 'react-native-splash-screen'

export const MainRouter = () => {
  useEffect(() => {
    setTimeout(() => {
      ReactNativeSplashScreen.hide()
    }, 5000)
  }, [])
  return (
    <React.Fragment>
      <StatusBar backgroundColor={'red'} />
      <MainProvider />
    </React.Fragment>
  )
}
