import {useEffect, useState} from 'react';
import ChampionCard from './ChampionCard';
import styled from "styled-components";
import PropTypes from "prop-types";

export default function ChampList(){
    const [isLoading, setIsLoading] = useState(false); // state management
    const [champions, setChampions] = useState([]);

    useEffect(()=>
    {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const rawData = await fetch("https://ddragon.leagueoflegends.com/cdn/15.2.1/data/en_US/tft-champion.json");
                const TFTdata = await rawData.json(); // convert response into json, objects we can use

                const filteredChampions = Object.values(TFTdata.data).filter(champion => champion.id.includes('TFT13'));

                setChampions(filteredChampions);

                setIsLoading(false);
            } catch (error) {
                console.error('oh no, error fetching the data', error);
            }
        };
        fetchData().then();
    }, [champions.length]);

    if (isLoading) {
        <div>Loading...</div>
    }

        return (
        <PageWrapper>
                {champions.map( champion =>
                        (
                            <ChampionCard
                                key={champion.id}
                                name={champion.name}
                                image={`https://ddragon.leagueoflegends.com/cdn/15.2.1/img/tft-champion/${champion.image.full}`}
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

ChampList.propTypes={
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    tier: PropTypes.number
};


// styling here
const PageWrapper =styled.div`
    margin: auto;
    
    max-height: 100%;
    width: 80vw;
    margin-top: 100px;
    margin-bottom: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    //background-color: mediumturquoise;
    
`

