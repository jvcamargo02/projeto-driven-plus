import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import UserContext from '../context/UserContext'
import GlobalStyle from '../style/globalStyle'
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'

export default function App() {

    const [token, setToken] = useState('Hello word')

    return (
        <>
            <GlobalStyle />

            <BrowserRouter>
                <UserContext.Provider value={{ token, setToken }}>
                    <Routes>
                        <Route path='/' element={<LoginScreen />} />
                        <Route path='/sign-up' element={<SignUpScreen />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>

        </>
    )
}
