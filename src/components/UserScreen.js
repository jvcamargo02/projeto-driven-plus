import styled from 'styled-components'
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../context/UserContext"


export default function UserScreen (){

    const { userData } = useContext(UserContext)
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
 
    console.log(userData)

    return(
        <Container>
            <ion-icon onClick={goBack} name="arrow-back-outline"></ion-icon>
            <input disabled value={userData.name}/>
            <input disabled value={userData.cpf}/>
            <input disabled value={userData.email}/>
            <button>Atualizar</button>
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
        background-color: rgba(255,255,255,0.8);
    }

    button{
        color: #FFF;
        font-size: 18px;
        font-weight: 700;
        background-color: var(--button-color);
        cursor: pointer;
    }
`