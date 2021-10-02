import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${ ({ theme }) => theme.color.header};
    padding: 40px 0;
    h1 {
        color: red;
    }
    &:hover{
        background-color: blue;
    }
`


/* background-color: ${({ bg }) => bg}; */
