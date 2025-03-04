import Header from './components/Header';
import Footer from "./components/Footer.jsx";
import List from "./components/ChampList.jsx";
import styled from "styled-components";
import NavBar from "./components/NavBar.jsx";


import RootLayout from "./pages/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Units from "./pages/Units.jsx";
import Items from "./pages/Items.jsx";
import Tierlist from "./pages/Tierlist.jsx";

import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";

//import {lazy, Suspense} from 'react';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'} element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path={"/Units"} element={<Units />} />
            <Route path={"/Items"} element={<Items />} />
            <Route path={"/Tierlist"} element={<Tierlist />}/>
        </Route>
    )
)

export default function App() {
  return (
    <Container>
        <RouterProvider router={router}/>
    </Container>
  )
}


const Container = styled.div`
    background-color: bisque;
`