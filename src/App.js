import { ThemeProvider } from "@mui/material";
import "./App.css";
import Routing from "./Router/Routing";
import theme from "./Layout/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
