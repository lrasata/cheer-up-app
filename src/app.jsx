import './app.css'
import LandingPage from "./page/landing-page.jsx";
import QuestionContextProvider from "./store/question-context.jsx";


function App() {
    return <QuestionContextProvider><LandingPage/></QuestionContextProvider>;
}

export default App
