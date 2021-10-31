import React from 'react'
import styled from 'styled-components'

import { StyledContentWrapperRight, StyledContainer } from './SharedStyleComponents'
import HeroImage from './HeroImage'

// let headerHeight = document.querySelector('.header')
// console.log(headerHeight.offsetHeight)

const StyledRightWrapper = styled(StyledContentWrapperRight)`
  margin-top: 5rem;
`

const StyledOutsideLink = styled.a`
  margin-left: 0.32rem;
`

const StyledContent = styled.div`
  max-width: 600px;
  padding-top: 170px;
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
