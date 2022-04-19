import { MainProvider } from '@presentation/provider/main'
import { ThemeProviderUtils } from '@test/utils/test/theme'
import { render } from '@testing-library/react-native'
import React from 'react'

describe('<MainProvider />', () => {
  const makeSut = () => {
    const { Component: Sut } = ThemeProviderUtils({
      children: <MainProvider />
    })
    return { Sut }
  }

  it('should MainProvider to be render', () => {
    const { Sut } = makeSut()

    const { toJSON } = render(Sut)

    console.log(toJSON())
  })
})
