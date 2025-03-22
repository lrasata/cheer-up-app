import './app.css'
import LandingPage from "./page/landing-page.jsx";
import AppContextProvider from "./store/app-context.jsx";

import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }
});



function App() {
    return <ThemeProvider theme={theme}>
        <AppContextProvider><LandingPage/></AppContextProvider>
    </ThemeProvider>;
}

export default App
