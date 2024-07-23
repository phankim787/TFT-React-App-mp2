import Header from './components/Header';
import Footer from "./components/Footer.jsx";
import List from "./components/List.jsx";
import styled from "styled-components";


export default function App() {

  return (
    <Container>

        <h3>Teamfight Tactics Remix Rumble </h3>


        <Header/>

        <List/>

        <Footer/>
    </Container>
  )
}


const Container = styled.div`
    background-color: bisque;
`