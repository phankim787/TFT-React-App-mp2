import styled from "styled-components";
import PropTypes from "prop-types";

ChampionCard.propTypes={
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    tier: PropTypes.number,
};
export default function ChampionCard( champion ){

    return (
        <>
            <StyledCard tier={champion.tier}>
                <img src={champion.image}
                     alt={champion.name} className="card-image-top"/>
                <StyledCardBody>
                    <h3 className="card-title">{champion.name}</h3>
                    <p className="tier">{`Tier: ${champion.tier}`}</p>
                </StyledCardBody>

            </StyledCard>
        </>
    );
}

//css styling below wth styled components

const StyledCardBody = styled.div`

`


const StyledCard = styled.div`
    background-color: whitesmoke;
    text-align: center;
    font-family: Calibri;
    margin: auto;
    border: solid 5px ${props =>
            props.tier === 1 ? "grey" : 
                    props.tier === 2 ? "green" :
                            props.tier === 3 ? "blue" :
                                    props.tier === 4 ? "purple" :
                                            props.tier === 5 ? "gold" :
                                                    "black"}
`;

// ^ String interpolation, passed props to styled component StyledCard with HTML tier attribute to adapt border color depending on what champion tier is