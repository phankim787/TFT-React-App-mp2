import styled from 'styled-components';
import ItemCard from './ItemCard.jsx';

import {useEffect, useState} from 'react';


export default function ItemList() {
    const [items, setItems] = useState([]);
    const [components, setComponents] = useState([]);

    useEffect( () => {

        const fetchData = async () => {
            try {
                const rawData = await fetch("https://ddragon.leagueoflegends.com/cdn/15.2.1/data/en_US/tft-item.json");
                const TFTItems = await rawData.json();

                setItems(Object.values(TFTItems.data));

            } catch {
                console.error("error fetching data from api");
            }
        };
        fetchData().then();


        }, []);


    return(
        <>
            <ItemCard>



            </ItemCard>
        </>
    )
}


