import styled from "styled-components";
import { Colors } from "../variables/Colors";

const Content = styled.div<{colors: Colors}>`
  position: relative;
  display: flex;
  padding-left: 2.5rem;
  flex-direction: column;
  @media(max-width: 475px) {
    margin-top: 5rem;
    width: 100vw;
  }
  z-index: 10;
  
`

const GlobalWrap = styled.div<{isBlur: boolean}>`
  ${({isBlur}) => isBlur ? `filter: blur(5px);` : ``}
  
  
  @media(max-width: 475px) {
    
    width: 99vw;
    
  }
`

export { Content, GlobalWrap}