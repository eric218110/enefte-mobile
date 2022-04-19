import { MainProvider } from '@presentation/provider/main'
import React, { useEffect } from 'react'
import ReactNativeSplashScreen from 'react-native-splash-screen'

export const MainRouter = () => {
  useEffect(() => {
    setTimeout(() => {
      ReactNativeSplashScreen.hide()
    }, 5000)
  }, [])
  return <MainProvider />
}
