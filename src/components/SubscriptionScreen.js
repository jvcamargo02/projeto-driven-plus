import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'


export default function SubscriptionScreen() {

    const [options, setOptions] = useState([
        {
            "id": 1,
            "image": "https://svgshare.com/i/dSP.svg",
            "price": "39.99"
        },
        {
            "id": 2,
            "image": "https://svgshare.com/i/dSP.svg",
            "price": "39.99"
        },
        {
            "id": 3,
            "image": "https://svgshare.com/i/dSP.svg",
            "price": "39.99"
        }
    ])
    const navigate = useNavigate()

    function OpenChoise (id){
        navigate(`/subscriptions/${id}`)
    }

    return (
        <Container>
            <h1>Escolha seu plano</h1>
            {options.map((option, index) =>
                <OptionBox key={index} onClick={() => OpenChoise(option.id)}>
                <img src={option.image} alt={`Plano ${option.id}`}/>
                <span>{option.price}</span>
                </OptionBox>
            )}

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