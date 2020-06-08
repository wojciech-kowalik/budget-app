import React from 'react'
import GlobalStyles from './index.css'

import { ThemeProvider } from 'styled-components'
import { Navigation } from 'components'
import theme from 'utils/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Navigation items={[]} />
      </div>
    </ThemeProvider>
  );
}

export default App;
