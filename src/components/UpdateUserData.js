import styled from 'styled-components'
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { useContext, useState } from "react"
import UserContext from "../context/UserContext"


export default function UpdateUserData (){

    
    const { token, userData, setUserData } = useContext(UserContext)
    const [name, setName] = useState(userData.name)
    const [email, setEmail] = useState(userData.email)
    const [currentPassword, setCurrentPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const {USER_ID} = useParams()
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const err = () => window.alert("Confira se preencheu corretamente e tente novamente")

    function success (response){

        const newUserData = {...userData, id: response.id, name: response.name, cpf: response.cpf, email: response.email, password: response.password }
        setUserData(newUserData)
        navigate(`/users/${response.id}`)
    }

    function sendData(){

       const data = {
        name,
        cpf: userData.cpf,
        email,
        currentPassword,
        newPassword
        }

        const promisse = axios.put("https://mock-api.driven.com.br/api/v4/driven-plus/users/", data, config)
            promisse.then((response) => success(response.data))
            promisse.catch(err)
    }
    
    return(
        <Container>
            <ion-icon onClick={goBack} name="arrow-back-outline"></ion-icon>
            <input type='text' onChange={(e) => setName(e.target.value)} value={name}/>
            <input disabled value={userData.cpf}/>
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input type="password" onChange={(e) => setCurrentPassword(e.target.value)} value={currentPassword} placeholder="Senha atual"/>
            <input type="password" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} placeholder="Nova senha"/>
            <button onClick={sendData}>Salvar</button>
        </Container>
    )
}

const Container = styled.div`

    height: 100vh;
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    ion-icon{
        position: fixed;
        top: 15px; left: 15px;
        font-size: 28px;
    }

    input, button{
        height: 52px;
        width: 300px;
        border: none;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 8px;
        margin-bottom: 5px;
    }

    button{
        color: #FFF;
        font-size: 18px;
        font-weight: 700;
        background-color: var(--button-color);
        cursor: pointer;
    }

    input:disabled{
        background-color: rgba(255,255,255,0.7);
    }
`