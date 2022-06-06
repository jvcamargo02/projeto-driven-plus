import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import UserContext from '../context/UserContext'
import GlobalStyle from '../style/globalStyle'
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import SubscriptionScreen from './SubscriptionScreen'
import ChoiseDetails from './ChoiseDetails'
import HomeScreen from './HomeScreen'

export default function App() {

    const [token, setToken] = useState('Hello word')
    const [userData, setUserData] = useState({
        "id": 3,
        "name": "Fulano",
        "cpf": "111.111.111-11",
        "email": "fulano@email.com.br",
        "password": "123456",
        "membership": { // se o usuário não tiver assinado um plano, será null
            "id": 1,
            "name": "Driven Plus",
            "image": "https://svgshare.com/i/dSP.svg",
            "price": "39.99",
            "perks": [
                {
                    "id": 1,
                    "membershipId": 1,
                    "title": "Solicitar brindes",
                    "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    "id": 2,
                    "membershipId": 1,
                    "title": "Materiais bônus de web",
                    "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                }
            ]
        }
     })

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
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>

        </>
    )
}
