import {useEffect, useState} from 'react';
import Champion from './Champion';
import styled from "styled-components";


export default function List(){
    const [champions, setChampions] = useState([]);

    useEffect(()=>
    {
        const fetchData = async () => {
            try {
                const rawData = await fetch("https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/tft-champion.json");
                const data = await rawData.json();
                setChampions(Object.values(data.data));
                //const imageURL = `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/tft-champion/${champions.image.full}`;
                //setImageURL(imageURL);
            } catch (error) {
                console.error('oh no, error fetching the data', error);
            }
        };
        fetchData().then().catch();
    }, [champions.length]);

    return (
        <PageWrapper>
                {
                    champions.map((champion)=>
                        (
                            // console.log(`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/tft-champion/${champion.image.full}`)
                            <Champion
                                key={champion.id}
                                name={champion.name}
                                image={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/tft-champion/${champion.image.full}`}
                                tier={champion.tier}
                            />
                        )
                    )
                }
        </PageWrapper>
    );
}

//https://ddragon.leagueoflegends.com/cdn/13.24.1/img/tft-champion/TFT10_Ahri.TFT_Set10.png
//example of img url
//

const PageWrapper =styled.div`
    
    max-height: 100%;
    width: 80vw;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    
    //background-color: mediumturquoise;
    
`

