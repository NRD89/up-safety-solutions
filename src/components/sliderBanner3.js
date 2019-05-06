import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const SliderBanner3 = () => (
  <StaticQuery
    query={graphql`
      query {
        sliderBanner3: file(relativePath: { eq: "sliderbanner-3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 3500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.sliderBanner3.childImageSharp.fluid}
        alt="Slider Banner Three"
      />
    )}
  />
)
export default SliderBanner3
