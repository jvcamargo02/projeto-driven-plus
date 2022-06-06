import { useNavigate, useParams } from "react-router-dom"
import styled from 'styled-components'
import { useState, useContext } from 'react'
import UserContext from "../context/UserContext"

export default function ChoiseDetails() {

    const [options, setOptions] = useState({
        "id": 1,
        "name": "Driven Plus",
        "image": "https://svgshare.com/i/dSP.svg",
        "price": "39.99",
        "perks": [
            {
                "id": 1,
                "membershipId": 1,
                "title": "Solicitar brindes",
                "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                "id": 2,
                "membershipId": 1,
                "title": "Materiais bônus de web",
                "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                "id": 2,
                "membershipId": 1,
                "title": "Materiais bônus de web",
                "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                "id": 2,
                "membershipId": 1,
                "title": "Materiais bônus de web",
                "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            }
        ]
    })
    const {userData, setUserData} = useContext(UserContext)
    const [nameCard, setNameCard] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cvc, setCvc] = useState('')
    const [valityCard, setValityCard] = useState('')
    const [visibilityPopup, setVisibilityPopup] = useState('inherit')
    const { ID_PLANO } = useParams()
    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }

    function onSubmit(e) {
        e.preventDefault()
        setVisibilityPopup('inherit')
    }

    function sendData() {
        setUserData(options)
    }

    return (
        <Container>

            <ion-icon onClick={goBack} name="arrow-back-outline"></ion-icon>
            <img src={options.image} alt={options.name} />
            <h1>{options.name}</h1>
            <Perks>
                <div>
                    <ion-icon name="reader-outline"></ion-icon>
                    <span>Benefícios:</span>
                </div>
                {options.perks.map((option, index) =>
                    <p key={index}>{index + 1}. {option.title}</p>
                )}
            </Perks>
            <Price>
                <div>
                    <ion-icon name="cash-outline"></ion-icon>
                    <span>Preço:</span>
                </div>
                <p>R$ {options.price} cobrados mensalmente</p>
            </Price>
            <form onSubmit={onSubmit}>
                <input type='text' required onChange={(e) => setNameCard(e.target.value)} value={nameCard} placeholder='Nome impresso no cartão' />
                <input type='number' required onChange={(e) => setCardNumber(e.target.value)} value={cardNumber} maxlength='16' placeholder='Digitos do cartão' />
                <input type='number' required onChange={(e) => setCvc(e.target.value)} value={cvc} maxlength='3' placeholder='Código de segurança' />
                <input type='text' required onChange={(e) => setValityCard(e.target.value)} value={valityCard} maxlength='5' placeholder='Validade (MM/YY)' />
                <button type='submit'>Assinar</button>
            </form>
            <PopUpWrapper visibilityPopup={visibilityPopup}>
                <PopUp>
                    <ion-icon onClick={() => setVisibilityPopup("hidden")} name="close-circle"></ion-icon>
                    <div>
                        <h3>Tem certeza que deseja assinar o plano Driven Plus (R$39,99)?</h3>
                        <button onClick={() => setVisibilityPopup("hidden")}>Não</button>
                        <button onClick={sendData}>SIM</button>
                    </div>
                </PopUp>
            </PopUpWrapper>
        </Container>
    )
}

const Container = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #FFF;
    box-sizing: border-box;
    padding: 20px 20px 0 20px;
    margin-top: 60px;

    img{
        width: 140px;
        height: 95px;
        margin-left: auto;
        margin-right: auto;
    }

    h1{
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 25px;
        margin-left: auto;
        margin-right: auto;
    }

    ion-icon{
        position: fixed;
        top: 15px; left: 15px;
        font-size: 28px;
    }

    form{
        text-align: center;

        button{

            width: 305px;
            height: 50px;
            background-color: var(--button-color);
            color: #FFF;
            border: none;
            border-radius: 5px;
            font-size: 17px;
            font-weight: 700;
            cursor: pointer;
        }
    }

    input{

        height: 52px;
        width: 300px;
        border: none;
        border-radius: 8px;
        margin-bottom: 5px;
    }

    input:nth-child(n + 3){
        
        width: 145px;
        margin-right: 5px;
    }
`

const Perks = styled.div`

    margin-bottom: 15px;
    font-size: 17px;

    div{
        display: flex;
        align-items: center;
        font-size: 21px;
        margin-bottom: 10px;
    }

    ion-icon{
        color: var(--button-color);
        position: inherit;
    }
`

const Price = styled.div`

    margin-bottom: 25px;
    font-size: 17px;

    div{
        display: flex;
        align-items: center;
        font-size: 21px;
        margin-bottom: 10px;
    }

    ion-icon{
        color: var(--button-color);
        position: inherit;
        margin-right: 5px;
    }
`

const PopUpWrapper = styled.div`

    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    visibility: ${props => props.visibilityPopup};
`

const PopUp = styled.div`

    height: 100%;
    display: flex;

    ion-icon{
       left: inherit; right: 15px;
    }
    
    div{

    width: 250px;
    height: 210px;
    background-color: #FFF;
    border-radius: 12px;
    color: #000;
    font-weight: 700;
    font-size: 18px;
    box-sizing: border-box;
    text-align: center;
    padding: 25px;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;

        button{

            width: 95px;
            height: 52px;
            background-color: var(--button-color);
            color: #FFF;
            margin-top: 50px;
            border: none;
            border-radius: 5px;
            font-size: 14px;
            font-weight: 700;
            margin-right: 5px;
            cursor: pointer;
        }

        button:nth-child(2){

            background-color: rgba(0,0,0,0.4);
        }

    }
`