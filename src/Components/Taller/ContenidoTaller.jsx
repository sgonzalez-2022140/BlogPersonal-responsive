import styled from "styled-components"

const StyledTaller = styled.div`
    text-align: center;
    
    h1{
        font-family: Helvetica;
        font-weight: 600;
        color: #07326b
    } 
    span{
            color: #17252a;
        }

    
`
export const ContenidoTaller = () => {
  return (
    <>
        <StyledTaller>
            <h1>TALLER DE <span>INFORMÁTICA</span></h1>
        </StyledTaller>
    </>
  )
}
