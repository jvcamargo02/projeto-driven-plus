import styled from 'styled-components'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'


export default function HomeScreen (){

    const {userData} = useContext(UserContext)
    console.log(userData)    

    return(
        <Container>
            <ion-icon name="person-circle"></ion-icon>
            <img src={userData.membership.image}/>
            <h1> Olá, {userData.name}</h1>
            {userData.membership.perks.map((perk => 
                <button>
                    <a href={perk.link}>{perk.title}</a>
                </button>
                ))}
            <div>
            <button>Mudar plano</button>
            <button>Cancelar plano</button>
            </div>
        </Container>
    )
}

const Container = styled.div`

    box-sizing: border-box;
    padding: 40px 40px 0px 40px;
    color: #FFF;

    ion-icon{
        font-size: 34px;
        position: fixed;
        top: 20px; right: 20px;
        cursor: pointer;
    }

    img{
        width: 75px;
        height: 50px;
    }



    h1{
        text-align: center;
        font-weight: 700;
        font-size: 24px;
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