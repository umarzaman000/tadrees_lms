// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import store from '../store';
const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
    </Provider>
  );
}