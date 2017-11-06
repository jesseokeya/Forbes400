import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Layout from './Components/Layout';
import '../Styles/style.css'

const Main = () => {
  return (<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Layout title="Forbes400"/>
  </MuiThemeProvider>);
}

export default Main;
