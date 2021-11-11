import React, { Fragment, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { device } from './device'
import { StyledContentCenterWrapper } from './SharedStyleComponents'


const StyledWrapper = styled(StyledContentCenterWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 0 20px;
`

const StyledTitle = styled.div`
  font-size: 1.5rem;
  color: #fff;
  letter-spacing: 0.12em;
  line-height: 1.2;
  @media ${device.laptop} {
    font-size: 2rem;
  }
`
const StyledSubTitle = styled.div`
  font-family: 'Cinzel', serif;
  font-size: 1.125rem;
  color: #fff;
  letter-spacing: 0.12em;
  line-height: 1.5;
  @media ${device.laptop} {
    font-size: 1rem;
  }
`

const StyledPersistantHeader = styled.div`
  background: rgba(255,255,255, 0.9);
`

const Header = ({ siteTitle }) => {
  return (
    <Fragment>
      <StyledWrapper>
        <StyledTitle>
          Amanda Emery
        </StyledTitle>
        <StyledSubTitle>
          Guide &amp; Teacher
        </StyledSubTitle>
      </StyledWrapper>
      <StyledPersistantHeader>
        <div>
          Amanda Emery
        </div>
      </StyledPersistantHeader>
    </Fragment>
  )
}

export default Header
