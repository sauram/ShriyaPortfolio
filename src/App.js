import { Provider } from '@react-spectrum/provider';
import { theme as defaultTheme } from '@react-spectrum/theme-default';
import { theme as darkTheme } from '@react-spectrum/theme-dark';
import Layout from './Layout';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

const v3Theme= {
  ...defaultTheme,
  dark: darkTheme.light
}
function App() {
  return (
    // TODO: Remove colorScheme prop after development
    <Provider theme={ v3Theme } colorScheme='light'>
      {/* <Layout /> */}
      <BrowserRouter>
        <Layout />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
