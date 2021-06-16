import React from 'react'
import Section from './Section'
import styled from 'styled-components'

import models from "../assests/assets/model-s.jpeg"
import modelsmobile from "../assests/assets/model-s-mobile.jpeg"

import modely from "../assests/assets/model-y.jpeg"
import modelymobile from "../assests/assets/model-y-mobile.jpeg"

import model3 from "../assests/assets/model-3.jpeg"
import model3mobile from "../assests/assets/model-3-mobile.jpeg"

import modelx from "../assests/assets/model-x.jpeg"
import modelxmobile from "../assests/assets/model-x-mobile.jpeg"

import solarPanel from "../assests/assets/solar-panel.jpg"
import solarPanelMobile from "../assests/assets/solar-panel-mobile.jpeg"

import solarRoof from '../assests/assets/solar-roof.jpg'
import solarRoofMobile from "../assests/assets/solar-roof-mobile.jpeg"



const Home = () => {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order Online for '
                span='Touchless Delivery'
                bgImage={models}
                mobileImg={modelsmobile}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title='Model Y'
                description='Order Online for '
                span='Touchless Delivery'
                bgImage={modely}
                mobileImg={modelymobile}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title='Model 3'
                description='Order Online for '
                span='Touchless Delivery'
                bgImage={model3}
                mobileImg={model3mobile}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title='Model X'
                description='Order Online for '
                span='Touchless Delivery'
                bgImage={modelx}
                mobileImg={modelxmobile}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />

            <Section 
                title='Lowest Cost Solar Panels in America'
                description='Money-back guarantee'
                span=''
                bgImage={solarPanel}
                mobileImg={solarPanelMobile}
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />

            <Section 
                title='Solar for New Roofs'
                description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
                span=''
                bgImage={solarRoof}
                mobileImg={solarRoofMobile}
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
        </Container>
        
    )
}

export default Home

const Container = styled.div`
    overflow:scroll;
    overflow-x:hidden;
    height:100vh;
    scroll-snap-type: y mandatory;
`


