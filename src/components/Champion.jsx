import styled from "styled-components";
export default function Champion(champion){
    return (
        <>

            <StyledCard>
                <img src={champion.image}
                     alt={champion.name} className="card-image-top"/>
                <StyledCardBody>
                    <h3 className="card-title">{champion.name}</h3>
                    <p>{`Tier: ${champion.tier}`}</p>
                </StyledCardBody>

            </StyledCard>
        </>
    );


}

const StyledCard = styled.div`
    border: solid 2px darkblue;
    background-color: whitesmoke;
    text-align: center;
    font-family: Calibri;
    margin: auto;
    
    
`
const StyledCardBody = styled.div`
    
`
