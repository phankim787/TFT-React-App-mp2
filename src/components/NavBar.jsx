// this will hold the options at the top of website
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// make a dropmenu on one of the
export default function NavBar() {
    return(
            <StyledNav>
                <StyledLogo to={"/*"}>TFT Companion</StyledLogo>
                <div className="navbar">
                    <ul>
                        <StyledLink to={"/*"}>Home</StyledLink>
                        <StyledLink to={"/pages/TierList"}>Comps</StyledLink>
                        <StyledLink to={"/pages/Units"}>Champions</StyledLink>
                        <StyledLink to={"/pages/Items"}>Items</StyledLink>
                    </ul>
                </div>
            </StyledNav>
    );
}

//styling here
const StyledLogo = styled(NavLink)`
    text-decoration: none;
    color: black;
    width: 100px;
    display: inline;
    
    
    
`
const StyledNav = styled.nav`
    width: 100%;
    background-color: white;
    position: fixed;
    padding: 4px;
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
    color: black;
    text-decoration: none;
    display: inline-block;
    padding: 10px;
    margin: 5px 20px;
    
    
`

