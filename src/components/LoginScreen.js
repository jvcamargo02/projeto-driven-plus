import styled from 'styled-components'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import { useState, useContext } from 'react'
import logoImg from "../assets/Driven_white 1.png"
import UserContext from '../context/UserContext'


export default function LoginScreen() {

    const {setToken, setUserData} = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const userDataString = localStorage.getItem("userCredentials");

    function validateUser () {
        const  credentials = JSON.parse(userDataString);

        if(credentials !== null){
            const data = {
                email: credentials.email,
                password: credentials.password
            }

            const promisse = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', data)
            promisse.then((response) => success(response.data , data))
            promisse.catch(err)
        }
    }

    function success(response , data){

        const credentials = JSON.stringify(data)
        localStorage.setItem("userCredentials", credentials)
        setToken(response.token)
        setUserData(response)
        if(response.membership === null){

            navigate('/subscriptions')

        } else {

            navigate('/home')

        }
    }

    function err (){
        window.alert("Ops! Confira se os dados estão corretos e tente novamente")
    }

    function onSubmit (e){
        e.preventDefault()

        const data = {
            email,
            password
        }

        const promisse = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", data)
            promisse.then((response) => success(response.data, data))
            promisse.catch(err)

    }

    validateUser()

    return (
        <Container>
            <img src={logoImg} alt="Logo" />
            <form onSubmit={onSubmit}>
                <input required id="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="E-mail" />
                <input required id="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Senha" />
                <button type="submit">Entrar</button>
            </form>
            <Link to="/sign-up">
                <h6>Não possui uma conta? Cadastre-se</h6>
            </Link>
        </Container>
    )
}

const Container = styled.div`

    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    form{
        margin-top: 100px;
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
        gap: 16px;

        input, button{
            width: 300px;
            height: 52px;
            font-size: 15px;
            border-radius: 8px;
            border: none;
            box-sizing: border-box;
            padding: 10px;
        }

        button{
            background-color: var(--button-color);
            color: #FFF;
            font-weight: 700;
            cursor: pointer;
        }
    }

    a{
        color: #FFF;
        font-weight: 500;
    }
`