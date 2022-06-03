import styled from "styled-components"
import { Link } from "react-router-dom"

export default function SignUpScreen() {
    return(
        <Container>
            <form onSubmit={(e) => e.preventDefault()}>
                <input id="name" type="text" placeholder="Nome" />
                <input id="CPF" type="number" placeholder="CPF"/>
                <input id="email" type="text" placeholder="E-mail"/>
                <input id="password" type="password" placeholder="Senha"/>
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">
                <h6>Já possui uma conta? Entre</h6>
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