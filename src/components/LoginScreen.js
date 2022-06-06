import styled from 'styled-components'
import {Link, useNavigate} from "react-router-dom"
import { useState, useContext } from 'react'
import logoImg from "../assets/Driven_white 1.png"
import UserContext from '../context/UserContext'

export default function LoginScreen() {

    const {setToken, setUserData} = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    function onSubmit (e){
        e.preventDefault()

        const data = {
            email,
            password
        }

        console.log(data)

        navigate('/subscriptions')
        setUserData("resposta da api"  )
    }

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