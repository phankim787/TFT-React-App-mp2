import styled from "styled-components";
export default function Footer() {
    let name="Kim Phan"
    return(
        <StyledFooter>
            <p>All Rights Reserved by {name} <a href="credits"> Credits </a> &#169; </p>
        </StyledFooter>
    )
}


const StyledFooter = styled.div`
    background-color: dimgrey;
    text-align:center;
    padding: 10px;
`