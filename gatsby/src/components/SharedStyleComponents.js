import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  place-content: start;
`

export const StyledFullScreenWrapper = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  overflow: hidden;
`

export const StyledContentCenterWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  justify-items: center;
  text-align: center;
  color: #ccc;
`

export const StyledContentWrapperRight = styled(StyledContentCenterWrapper)`
  justify-items: end;
  text-align: left;
  align-items: end;
  
`

export const StyledContentWrapperLeft = styled(StyledContentCenterWrapper)`
  max-width: 960px;
  margin: auto 53% auto auto;
`

export const StyledImageWrapper = styled.div`
  max-width: ${props => props.maxWidth || 300}px;
  margin: 0 auto 1.45rem;
`

export const StyledLink = styled(Link)`
  margin-left: 0.32rem;
`