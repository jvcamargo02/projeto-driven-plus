import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import UserContext from '../context/UserContext'



export default function HomeScreen (){

    const {token, userData} = useContext(UserContext)
    const navigate = useNavigate()

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    console.log(userData)

    const success = () => navigate("/subscriptions")

    const err = () => window.alert("Ops! Houve um erro ao deletar. Que tal tentar novamente?")
    
    function deleteSub (){
        const promisse = axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", config)

        promisse.then(success)
        promisse.catch(err)
    }

    return(
        <Container>
            <ion-icon onClick={() => navigate(`/users/${userData.id}`)} name="person-circle"></ion-icon>
            <img src={userData.membership.image}/>
            <h1> Olá, {userData.name}</h1>
            {userData.membership.perks.map((perk, index) => 
                <button key={index}>
                    <a href={perk.link}>{perk.title}</a>
                </button>
                )}
            <div>
            <button onClick={() => navigate('/subscriptions')}>Mudar plano</button>
            <button onClick={deleteSub}>Cancelar plano</button>
            </div>
        </Container>
    )
}

const Container = styled.div`

    box-sizing: border-box;
    padding: 40px 40px 0px 40px;
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    ion-icon{
        font-size: 34px;
        position: fixed;
        top: 20px; right: 20px;
        cursor: pointer;
    }

    img{
        width: 75px;
        height: 50px;
        position: fixed;
        top: 20px; left: 20px;
    }



    h1{
        text-align: center;
        font-weight: 700;
        font-size: 24px;
        margin-top: 50px;
        margin-bottom: 20px;
    }

    button{
        width: 305px;
        height: 50px;
        background-color: var(--button-color);
        color: #FFF;
        border: none;
        border-radius: 5px;
        font-size: 17px;
        font-weight: 700;
        margin-bottom: 8px;
        cursor: pointer;

        a{
            text-decoration: none;
            color: #FFF;
        }
        
    }

    

    div{
        position: fixed;
        bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        button:nth-child(2){
            background-color: var(--red-button-color);
        }
    }
`