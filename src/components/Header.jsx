import styled from "styled-components";

export default function Header(){
    return(
        <HeaderDiv>
            <h3>Characters & Unit-Cost</h3>
        </HeaderDiv>
    )
}


const HeaderDiv = styled.div`
    background-color: lightblue;
    //display: center;
    text-align: center;
    font-family: Arial;
`