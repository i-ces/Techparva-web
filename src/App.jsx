import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main/main'
import CodewithCoffee from './pages/codewithcoffee/codewithcoffee'
import Designthinking from './pages/designthinking/designthinking'
import Security from './pages/security/security'
import Datathon from './pages/datathon/datathon'
import DesignWorkshop from './pages/designworkshop/designworkshop.jsx'
import SecuritySession from './pages/security/security_session.jsx'


function App() {

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<Main />} />
                    <Route exact path='/codewithcoffee' element={<CodewithCoffee />} />
                    <Route exact path='/design-workshop' element={<DesignWorkshop />} />
                    <Route exact path='/designthinking' element={<Designthinking />} />
                    <Route exact path='/breakingintosecurity' element={<Security />} />
                    <Route exact path='/security-session' element={<SecuritySession />} />
                    <Route exact path='/datathon' element={<Datathon />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
