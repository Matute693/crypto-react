import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Form from './components/Form'
import Results from './components/Results';
import imageCripto from './img/imagen-criptos.png'

//Styled components

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`


const Heading = styled.h1`
  font-family: 'Lato', san-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a3FE;
    display: block;
    margin: 10px auto
  }
`

function App() {

  const [ currencies, setCurrencies ] = useState({});
  const [ results, setResults ] = useState({});

  useEffect(() => {
    if(Object.keys(currencies).length > 0) {
      const quoteCrypto = async () => {
        const { cryptocurrency, currency } = currencies
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

        const response = await fetch(url);
        const result = await response.json();
        setResults(result.DISPLAY[cryptocurrency][currency])
      }
      quoteCrypto()
    }
  }, [currencies])

  return (
    <Contenedor>
      <Imagen
        src={ imageCripto }
        alt='Imagenes criptomonedas'
      ></Imagen>
        <div>
        <Heading>Trade Cryptocurrencies now</Heading>
        <Form
            setCurrencies={setCurrencies}
          />  
         {results.PRICE && <Results results={results}/>}
        </div>
    </Contenedor>
  )
}

export default App
