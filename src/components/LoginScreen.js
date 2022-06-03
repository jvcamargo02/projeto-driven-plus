import styled from 'styled-components'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import logoImg from "../assets/Driven_white 1.png"
import UserContext from '../context/UserContext'



export default function LoginScreen() {

    const {token, setToken} = useContext(UserContext)

    return (
        <Container>
            <img src={logoImg} alt="Logo" />
            <form onSubmit={(e) => e.preventDefault()}>
                <input id="email" type="text" placeholder="E-mail" />
                <input id="password" type="password" placeholder="Senha" />
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
        }
    }

    a{
        color: #FFF;
        font-weight: 500;
    }
`