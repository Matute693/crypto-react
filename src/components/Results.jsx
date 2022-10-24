import styled from '@emotion/styled';

const Result = styled.div`
    color: white;
    font-family: 'Lato', sans-serif;
    margin-top: 25px;
    font-weight: 700;
    font-size: 18px;
`

const Text = styled.p`
    
`

const Price = styled.p`
    
`

const Results = ({ results }) => {
    const { PRICE, HIGHDAY, LOWDAY, IMAGEURL, CHANGEPCT24HOUR, LASTUPDATE} = results
  return (
    <Result>
        <img src={IMAGEURL} alt="" />
        <Price>The price is: <span>{ PRICE }</span></Price>
        <Text>The lowest price of the day: <span>{ LOWDAY }</span></Text>
        <Text>The highest price of the day: <span>{ HIGHDAY }</span></Text>
        <Text>Variation in 24 hours: <span>{ CHANGEPCT24HOUR }</span></Text>
        <Text>Last update: <span>{ LASTUPDATE }</span></Text>
    </Result>
  )
}

export default Results