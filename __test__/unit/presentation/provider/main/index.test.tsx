import { MainProvider } from '@presentation/provider/main'
import { ThemeProviderUtils } from '@test/utils/test/theme'
import { render } from '@testing-library/react-native'
import React from 'react'

describe('<MainProvider />', () => {
  const makeSut = () => {
    const { Component: sut } = ThemeProviderUtils({
      children: <MainProvider />
    })
    return { sut }
  }

  it('should MainProvider to be render', () => {
    const { sut } = makeSut()

    const { toJSON } = render(sut)

    console.log(toJSON())
  })
})
