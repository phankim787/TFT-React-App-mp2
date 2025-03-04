// this will hold the options at the top of website
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// make a dropmenu on one of the
export default function NavBar() {
    const [click, setClick] = useState(false);



    return(
            <StyledNav>
                <StyledLogo to={"/"}>TFT Companion</StyledLogo>
                <div className="navbar">
                    <ul>
                        <StyledLink to={"/"} activeClassName={"any"}><StyledButton>Home</StyledButton></StyledLink>
                        <StyledLink to={"/TierList"} activeClassName={"any"}>Comps</StyledLink>
                        <StyledLink to={"/Units"} activeClassName={"any"}>Champions</StyledLink>
                        <StyledLink to={"/Items"} activeClassName={"any"}>Items</StyledLink>
                    </ul>
                </div>
            </StyledNav>
    );
}




//styling here
const StyledButton =styled.button`
    border-radius: 20px;
    width: 100px;
    margin: 0;
    padding: 10px 20px;
    align-content: center;
    font-size: 20px;
    border: 0;
    outline: 0;
    cursor: pointer;
    &:active{
        color: lightcoral;
    }
    
`

const StyledLogo = styled(NavLink)`
    text-decoration: none;
    color: white;
    width: 100px;
    display: inline;
    cursor: pointer;
    font-size: large;
    padding: 10px 20px;
    
    &:active{
        color: lightcoral;
    }
    &:hover{
        color: blue;
    }
`
const StyledNav = styled.nav`
    width: 100%;
    background-color: black;
    position: fixed;
    padding: 10px;
    margin: 0;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    z-index: 10;
`

const StyledHeader = styled.header`
    .varela-round-regular {
        font-family: "Varela Round", serif;
        font-weight: 400;
        font-style: normal;
    }
    
`

const StyledLink = styled(NavLink)`
    font-size: 20px;
    font-family: "Varela Round", serif;
    letter-spacing: 0.5px;
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 10px;
    margin: 5px 20px;
    cursor: pointer;
    
    &.${props => props.activeClassName} {
        color: red;
    }
    &:active{
        color: lightcoral;
    }
`;

<StyledLink activeClassName={"any"} />;