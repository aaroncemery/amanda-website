import React from 'react'
import styled from 'styled-components'

import { StyledContentCenterWrapper } from './SharedStyleComponents'

const StyledWrapper = styled(StyledContentCenterWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(237, 232, 228,.68);
  padding: 12px 0 20px;
`

const StyledTitle = styled.div`
  font-size: 2.5rem;
  color: #000000;
  letter-spacing: 0.12em;
  line-height: 1.5;
`
const StyledSubTitle = styled.div`
  font-family: 'Cinzel', serif;
  font-size: 1.125rem;
  color: #000000;
  letter-spacing: 0.12em;
  line-height: 1.5;
`

const Header = ({ siteTitle }) => (
  <StyledWrapper className="header">
    <StyledTitle>
      Amanda Emery
    </StyledTitle>
    <StyledSubTitle>
      Guide &amp; Teacher
    </StyledSubTitle>
  </StyledWrapper>
)

export default Header
