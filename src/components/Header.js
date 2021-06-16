import React, {useState} from 'react'
import styled from 'styled-components'
import Logo from "../assests/assets/logo.svg"
import CloseIcon from '@material-ui/icons/Close';

// rgb(23, 26, 32)

const Header = () => {

    const [burgerStatus, setBurgerStatus] = useState(false)

    return (

        <Container>
            <a href="#">
                <TeslaLogo src={Logo}/>
            </a>

            <CarMenu>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Solar Roof</a></li>
                <li><a href="#">Solar Panels</a></li>
            </CarMenu>

            <RightMenu>
                <ul>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Account</a></li>
                </ul>
                <li onClick={() => setBurgerStatus(true)} id="menu">Menu</li>
            </RightMenu>
            <BurgerNav status={burgerStatus}>
                <CloseContainer>
                    <Close onClick={() => setBurgerStatus(false)}/>
                </CloseContainer>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a>
                </li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
            </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div`
    position:fixed;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:18px 8px;
    font-weight:500;
    font-size:14px;
    top:0;
    left:0;
    right:0;
    z-index:10;
    font-size:15px;

`

const TeslaLogo = styled.img`
    flex:1;
    width:125px;
    height:20px;
`

const CarMenu = styled.div`
    display:flex;
    margin-left:10%;
    li {
        padding:0 23px;
    }
    display:none;
    
    @media (min-width: 1193px) {
        display:flex
    }
`

const RightMenu = styled.div`
    display:flex;

    ul {
        display:flex;
    }

    li {
        padding:0 15px;
        cursor:pointer;
    }
    @media (max-width: 1193px) {
        ul {
            display:none;
        }

        #menu {
            background-color:rgba(128, 128, 128, 0.125);
            padding:10px 20px;
            border-radius:12px;
        }
    }
`
const BurgerNav = styled.div`
    position:fixed;
    width:350px;
    background:white;
    top:0;
    bottom:0;
    right:0;
    padding:0px 18px;

    transform:${props => props.status ? 'translateX(0%)': 'translateX(100%)'};
    transition: transform 0.5s linear;
    li {
        font-size:15px;
        padding:13px;
        border-radius:15px;
        padding-bottom:10px;
    }

    li:hover{
        background-color:rgba(128, 128, 128, 0.125);
        transition: background-color 0.5s ease;
    }

    @media (max-width: 492px) {
        width:250px;
    }

`

const CloseContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-bottom: auto 35px;
    margin-top:30px
`

const Close = styled(CloseIcon)`
    cursor:pointer;
`