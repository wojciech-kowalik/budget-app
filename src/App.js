import React from 'react'
import GlobalStyles from './index.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { Navigation, Wrapper, LoadingIndicator } from 'components'
import theme from 'utils/theme'
import { useTranslation } from 'react-i18next'

function App() {
  const {i18n} = useTranslation()

  return (
    <React.Fragment>
      <GlobalStyles />
      <Router>
        <Navigation 
        items={[
          { content:'Homepage', to: '/' },
          { content: 'Budget', to: '/budget' },
        ]}
        RightElement={(
          <div>
            <button onClick={() => i18n.changeLanguage('pl')}>pl</button>
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
          </div>
        )}
         />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              Homepage
            </Route>
            <Route path="/budget">
              Budget
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </React.Fragment>
  );
}

const RootApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp;
