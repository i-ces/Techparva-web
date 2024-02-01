import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main/main'
import CodewithCoffee from './pages/codewithcoffee/codewithcoffee'
import Designthinking from './pages/designthinking/designthinking'
import Security from './pages/security/security'
import Datathon from './pages/datathon/datathon'
import Designworkshop from './pages/designthinking/designworkshop'
import SecuritySession from './pages/security/security_session'


function App() {

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<Main />} />
                    <Route exact path='/code-with-coffee' element={<CodewithCoffee />} />
                    <Route exact path='/design-workshop' element={<Designworkshop />} />
                    <Route exact path='/design-thinking' element={<Designthinking />} />
                    <Route exact path='/breaking-into-security' element={<Security />} />
                    <Route exact path='/security-session' element={<SecuritySession />} />
                    <Route exact path='/datathon' element={<Datathon />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
