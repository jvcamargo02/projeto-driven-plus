import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import UserContext from '../context/UserContext'
import GlobalStyle from '../style/globalStyle'
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import SubscriptionScreen from './SubscriptionScreen'



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
                        <Route path='/subscriptions' element={<SubscriptionScreen />} />
                        <Route path='/subscriptions:ID_PLANO' element={<ChoiseDetails />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>

        </>
    )
}
