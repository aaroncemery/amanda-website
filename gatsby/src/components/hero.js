import React from 'react'
import styled from 'styled-components'

import { device } from './device'
import { StyledContentWrapperRight, StyledContainer } from './SharedStyleComponents'
import HeroImage from './HeroImage'

const StyledRightWrapper = styled(StyledContentWrapperRight)`
  margin-top: 5rem;
  padding-top: 95px;
  @media ${device.laptop} {
    padding-top: 100px;
  }
`

const StyledContent = styled.div`
  max-width: 600px;
  padding: 60px;
  background: rgba(255,255,255, 0.9);
  border-radius: 4px;
  color: #000C2C;
`

const Hero = ({paddingOffset}) => (
  <HeroImage>
    <StyledContainer>
      <StyledRightWrapper>
        <StyledContent>
          <h1>Find Relief and Deeper Meaning</h1>
          <p>Counseling and guidance for both individuals and couples.</p>
        </StyledContent>
      </StyledRightWrapper>
      </StyledContainer>
  </HeroImage>
)

export default Hero
