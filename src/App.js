import React from 'react'
import GlobalStyles from './index.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { Navigation } from 'components'
import theme from 'utils/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navigation items={[
          { content: 'Homepage', to: '/' },
          { content: 'Budget', to: '/budget' },
        ]} />
        <Switch>
          <Route exact path="/">
            Homepage
          </Route>
          <Route path="/budget">
            Budget
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
