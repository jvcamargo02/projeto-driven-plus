import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function SignUpScreen() {

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate =  useNavigate()

    function onSubmit (e){
        e.preventDefault()

        const data = {
            name,
            cpf,
            email,
            password
        }

        console.log(data)
        navigate('/')
    }

    return(
        <Container>
            <form onSubmit={onSubmit}>
                <input required id="name" type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Nome" />
                <input required id="CPF" type="number" onChange={(e) => setCpf(e.target.value)} value={cpf} placeholder="CPF"/>
                <input required id="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="E-mail"/>
                <input required id="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Senha"/>
                <button required type="submit">Cadastrar</button>
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
            cursor: pointer;
        }
    }

    a{
        color: #FFF;
        font-weight: 500;
    }
`