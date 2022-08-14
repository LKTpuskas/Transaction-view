import React, { Fragment } from 'react'

import GlobalStyle from "../src/styles/GlobalStyles";
import Content from '../src/components/Content'

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Content />
    </Fragment>
  );
}

export default App