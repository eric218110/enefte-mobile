import { MainProvider } from '@presentation/provider/main'
import React, { useEffect, useState } from 'react'

export const MainRouter = () => {
  const [isLoadind, setIsLoadind] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoadind(false)
    }, 200)
  }, [])

  return <MainProvider />
}
