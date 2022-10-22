import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './@types/global'
import {defaultTheme} from './styles/themes/default'

import { Home } from './pages/Home'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>

  )
}
