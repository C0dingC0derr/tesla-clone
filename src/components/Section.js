import React from 'react'
import styled from 'styled-components'
import ArrowDown from "../assests/assets/down-arrow.svg";

const Section = (props) => {
    return (
        <Container bgImage={props.bgImage} mobileImg={props.mobileImg}>
            <ItemSection>
                <h1>{props.title}</h1>
                <p>{props.description}<span>{props.span}</span></p>
            </ItemSection>

            <Btns>
                <LeftBtn>
                {props.leftBtnText}
                </LeftBtn>
                <RightBtn>
                    {props.rightBtnText}
                </RightBtn>
            </Btns>
            <Icon src={ArrowDown}/>
        </Container>
    )
}

export default Section


const Container = styled.div`
    display:flex;
    flex-direction:column;
    background-image: ${props => `url('${props.bgImage}')`};
    background-position:center;
    height:100vh;
    width:100%;
    background-size:cover; 
    @media (max-width: 583px) {
        background-image:${props => `url('${props.mobileImg}')`};
    }
    scroll-snap-align:end;
`

const ItemSection = styled.div`
    padding-top:15vh;
    text-align:center;
    flex-grow:1;
    
    h1 {
        font-size: 40px;
        font-weight:500;
    }
    span {
        text-decoration:underline;
    }
`
const Btns = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:10px;

    @media (max-width: 583px) {
        width:100%;
        flex-direction:column;
        align-items:center;
    }
`

const LeftBtn = styled.div`
    cursor:pointer;
    color:white;
    background:rgba(23, 26, 32, 0.8); 
    width:256px;
    margin:10px 10px 0 10px;
    display:flex;
    justify-content:center;
    align-items:center;
    height:40px;
    border-radius:5rem;
    opacity:0.85;
    text-transform:uppercase;
    font-size:13px;
    font-weight:500;
`

const RightBtn = styled(LeftBtn)`
    background-color:white;
    opacity:0.65;
    color:black;
`

const Icon = styled.img`
    height:40px;
    margin-bottom:20px;
    animation: animationDown infinite 1.5s;
`
