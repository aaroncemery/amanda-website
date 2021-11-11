import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { device } from './device'
import { StyledContentWrapperRight, StyledContainer } from './SharedStyleComponents'
import HeroImage from './HeroImage'

const StyledRightWrapper = styled(StyledContentWrapperRight)`
  
`

const StyledContent = styled.div`
  position: relative;
  max-width: 600px;
  padding: 60px;
  background: rgba(255,255,255, 0.9);
  border-radius: 4px;
  color: #000C2C;
  z-index: 10;
`

const StyledImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`

export const Hero = () => {
  const data = useStaticQuery(HeroQuery)
  const imageData = data.sanityHeroBanner.image.asset.gatsbyImageData
  return (
    <>
      <StyledImage image={imageData} alt={`alt`} />
      <StyledContainer>
        <StyledRightWrapper>
          <StyledContent>
            <h1>{data.sanityHeroBanner.title}</h1>
            <p>{data.sanityHeroBanner.subtitle}</p>
          </StyledContent>
        </StyledRightWrapper>
        </StyledContainer>
    </>
  )
}

const HeroQuery = graphql`
  query HeroQuery {
    sanityHeroBanner(name: {eq: "Main Banner"}) {
      title
      subtitle
      image {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`
