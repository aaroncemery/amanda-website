import BackgroundImage from 'gatsby-background-image'
import React from 'react'
import styled from 'styled-components'

import { device } from './device'
import { graphql, useStaticQuery } from 'gatsby'
import { StyledFullScreenWrapper } from './SharedStyleComponents'

/**
 * In this functional component a fullscreen <BackgroundImage />  is created.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components.
 * @return {*}
 * @constructor
 */
const FullBackground = ({ className, children, image }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "header.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  // Single Image Data
  const imageData = desktop.childImageSharp.fluid
  console.log(imageData);

  return (
    <StyledFullScreenWrapper>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={image}
        backgroundColor={`#040e18`}
        title="Fullscreen Background"
        id="fullscreenbg"
        role="img"
        aria-label="Fullscreen Background"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </StyledFullScreenWrapper>
  )
}

const StyledFullBackground = styled(FullBackground)`
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`

export default StyledFullBackground