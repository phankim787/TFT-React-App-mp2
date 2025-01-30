import Header from './components/Header';
import Footer from "./components/Footer.jsx";
import List from "./components/List.jsx";
import styled from "styled-components";

import NavBar from "./components/NavBar.jsx";

import {Route, Routes, BrowserRouter, Link} from "react-router-dom";

export default function App() {
  return (
    <Container>
        <h3> Teamfight Tactics Into the Arcane </h3>
        <Header/>
        <BrowserRouter>
            <NavBar/>
        </BrowserRouter>

        <List/>
        <Footer/>
    </Container>
  )
}


const Container = styled.div`
    background-color: bisque;
`