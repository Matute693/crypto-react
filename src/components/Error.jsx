import styled from '@emotion/styled';

const Text = styled.div`
    background-color: #B7322C;
    color: #FFF;
    border-radius: 8px;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`

const Error = ({ children }) => {
  return (
    <Text>{ children }</Text>
  )
}

export default Error