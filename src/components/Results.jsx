import styled from '@emotion/styled';

const Result = styled.div`
    color: white;
    font-family: 'Lato', sans-serif;
    margin-top: 25px;
    display: flex;
    align-items: start;
    gap: 20px;
    `

const Image = styled.img`
    display: block;
    border-radius: 10px;
    width: 150px;
`

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Results = ({ results }) => {
    const { PRICE, HIGHDAY, LOWDAY, IMAGEURL, CHANGEPCT24HOUR, LASTUPDATE} = results
  return (
    <Result>
        <Image 
            src={`https://www.cryptocompare.com${IMAGEURL}`} 
            alt="crypto image" 
        />
        <div>
            <Price>The price is: <span>{ PRICE }</span></Price>
            <Text>The lowest price of the day: <span>{ LOWDAY }</span></Text>
            <Text>The highest price of the day: <span>{ HIGHDAY }</span></Text>
            <Text>Variation in 24 hours: <span>{ CHANGEPCT24HOUR }</span></Text>
            <Text>Last update: <span>{ LASTUPDATE }</span></Text>
        </div>
    </Result>
  )
}

export default Results