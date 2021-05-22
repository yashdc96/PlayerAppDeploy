import './App.css';
import Search from './components/Search'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper style={{ height: "100%" }}>
          <Search  />
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
