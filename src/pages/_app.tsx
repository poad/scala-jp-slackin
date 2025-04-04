import React, { JSX } from 'react';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
