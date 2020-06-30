import React from 'react'
import GlobalStyles from './index.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { Navigation, Wrapper, LoadingIndicator, Button, Homepage} from 'components'
import theme from 'utils/theme'
import { useTranslation } from 'react-i18next'

function App() {
  const {i18n} = useTranslation()

  return (
    <>
      <GlobalStyles />
      <Router>
        <Navigation 
        items={[
          { content:'Homepage', to: '/' },
          { content: 'Budget', to: '/budget' },
        ]}
        RightElement={(
          <div>
            <Button variant='regular' onClick={() => i18n.changeLanguage('pl')}>pl</Button>
            <Button variant='regular' onClick={() => i18n.changeLanguage('en')}>en</Button>
          </div>
        )}
         />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/budget">
              Budget
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </>
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
