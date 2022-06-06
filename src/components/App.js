import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import UserContext from '../context/UserContext'
import GlobalStyle from '../style/globalStyle'
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import SubscriptionScreen from './SubscriptionScreen'
import ChoiseDetails from './ChoiseDetails'
import HomeScreen from './HomeScreen'
import UserScreen from './UserScreen'

export default function App() {

    const [token, setToken] = useState('')
    const [userData, setUserData] = useState({})

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <UserContext.Provider value={{ token, setToken, userData, setUserData }}>
                    <Routes>
                        <Route path='/' element={<LoginScreen />} />
                        <Route path='/sign-up' element={<SignUpScreen />} />
                        <Route path='/subscriptions' element={<SubscriptionScreen />} />
                        <Route path='/subscriptions/:ID_PLANO' element={<ChoiseDetails />} />
                        <Route path='/home' element={<HomeScreen />} />
                        <Route path='/users/:USER_ID' element={<UserScreen />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>

        </>
    )
}
