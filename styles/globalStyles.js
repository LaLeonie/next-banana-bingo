import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    font-family: ${({ theme: { fonts } }) => fonts.regular[0]}; 
    font-size: ${({ theme: { fontSizes } }) => fontSizes.regularPlus}; 
    background-color: ${({ theme: { colors } }) => colors.neutrals[50]}; 
    color: ${({ theme: { colors } }) => colors.neutrals[600]}
}
`;

export default GlobalStyle;
