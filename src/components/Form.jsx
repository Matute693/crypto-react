import { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import Error from './Error';
import useSelectCurrency from './../hooks/useSelectCurrency';
import { coins } from './../data/currency'

const InputSubmit = styled.input`
    width: 100%;
    background-color: #0c8f8f;
    color: #FFF;
    padding: 10px 5px;
    border: none;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;  
    &:hover {
        cursor: pointer;
        transition: 800ms;
        background-color: #007878;
    }
`

const Form = ({ setCurrencies }) => {
    const [ cryptos, setCryptos ] = useState([]);
    const [ error, setError ] = useState(false);
    
    const [ currency, SelectCurrency ] = useSelectCurrency('Select coins', coins);
    const [ cryptocurrency, SelectCryptocurrency ] = useSelectCurrency('Choose a cryptocurrency', cryptos);

    useEffect(() => {
        const apiRequest = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD';
            const response = await fetch(url);
            const result = await response.json();

            const arrayCryptos = result.Data.map( crypto => {
                const object = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }
                return object;
            });

            setCryptos(arrayCryptos)
        }
        apiRequest();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
       if([ currency, cryptocurrency ].includes('')) {
            setError(true)
           return
       }
       setError(false)
       setCurrencies({
           currency,
           cryptocurrency
       })
    }

  return (
      <>
        {error &&<Error>All fields are required</Error>}
        <form onSubmit={handleSubmit}>
            <SelectCurrency />
            <SelectCryptocurrency />


            <InputSubmit 
                type="submit" 
                value="quote" 
            />
        </form>
      </>
  )
}

export default Form