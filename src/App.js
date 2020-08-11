import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import './App.css';
import Routes from './routes';
import {RTL} from './components/RTL';
import {blue, indigo} from '@material-ui/core/colors';

const theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    secondary: {
      main: blue[900],
    },
    primary: {
      main: indigo[700],
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', 'sans-serif'].join(','),
  },
});

class App extends Component {
  render() {
    return (
      <RTL>
        <div dir="rtl">
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </div>
      </RTL>
    );
  }
}

export default App;
