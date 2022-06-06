import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import UserContext from '../context/UserContext'



export default function SubscriptionScreen() {

    const {token} = useContext(UserContext) 
    const [options, setOptions] = useState([])
    const navigate = useNavigate()

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {

        const promisse = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config)
        promisse.then((response) => setOptions(response.data))
    }, [])

    function OpenChoise(id) {
        navigate(`/subscriptions/${id}`)
    }

    return (
        <Container>
            <h1>Escolha seu plano</h1>
            {options.length !== 0 ?

                options.map((option, index) =>
                    <OptionBox key={index} onClick={() => OpenChoise(option.id)}>
                        <img src={option.image} alt={`Plano ${option.id}`} />
                        <span>{option.price}</span>
                    </OptionBox>
                ) : 
                
                <p>Carregando...</p>}

        </Container>
    )
}


const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 30px 40px;
    color: white;
    font-size: 32px;

    h1{
        margin-bottom: 25px;
        font-weight: 700;
    }
`

const OptionBox = styled.div`

    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
    padding: 50px 15px;
    border: 2px solid #FFF;
    border-radius: 10px;
    cursor: pointer;
`