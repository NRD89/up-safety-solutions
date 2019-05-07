import React from "react"
import PageTransition from "gatsby-v2-plugin-page-transitions"
import { Link } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Header from "../components/header"
import Footer from "../components/Footer"
import FeaturedFrontPage from "../components/FeaturedFrontPage"
import styled from "styled-components"
import PropTypes from "prop-types"

import SEO from "../components/seo"
import SliderBanner1 from "../components/sliderBanner1"
import SliderBanner2 from "../components/sliderBanner2"
import SliderBanner3 from "../components/sliderBanner3"
import SmallBanner1 from "../components/smallBanner1"
import SmallBanner2 from "../components/smallBanner2"
import SmallBanner3 from "../components/smallBanner3"

const SmallBannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-content: space-evenly;
  margin-top: 1.45rem;
  margin-bottom: 1.45rem;

  @media (max-width: 568px) {
    display: block;
  }
`

const FeaturedProducts = styled.div`
  text-align: center;

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
  }
`
const SmBannerWrapper = styled.div`
  @media (max-width: 568px) {
    margin-bottom: 1.45rem;
  }
`

const IndexPage = ({
  data: {
    products: { edges },
  },
}) => {
  return (
    <>
      <Header />
      <PageTransition>
        <SEO
          title="Home"
          keywords={[
            `Up Safety Solutions`,
            `safety equipment`,
            `safety equipment store`,
            `safety equipment suppliers`,
            `safety equipment companies`,
            `safety equipment for cannabis industry`,
            `safety`,
            `safety clothing`,
            `safety gear`,
          ]}
        />
        <Carousel showStatus={false} showThumbs={false}>
          <div>
            <Link to="/all-products">
              <SliderBanner1 />
            </Link>
          </div>
          <div>
            <Link to="/category-hand-protection">
              <SliderBanner2 />
            </Link>
          </div>
          <div>
            <SliderBanner3 />
          </div>
        </Carousel>
        <div
          style={{
            margin: `1rem auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <SmallBannerContainer>
            <SmBannerWrapper>
              <SmallBanner1 />
            </SmBannerWrapper>
            <SmBannerWrapper>
              <SmallBanner2 />
            </SmBannerWrapper>
            <SmBannerWrapper>
              <SmallBanner3 />
            </SmBannerWrapper>
          </SmallBannerContainer>
          <FeaturedProducts>
            <h2>Featured Products</h2>
          </FeaturedProducts>
          <FeaturedFrontPage products={edges} />
        </div>

        <Footer />
      </PageTransition>
    </>
  )
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    products: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query HomePage {
    products: allPrismicProduct(
      filter: {
        data: {
          front_page_products: {
            elemMatch: {
              featured_on: {
                document: {
                  elemMatch: { data: { featured: { eq: "Front Page" } } }
                }
              }
            }
          }
        }
      }
    ) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            name_hmac {
              text
            }
            name {
              text
            }
            price_hmac {
              text
            }
            price
            cart_image_hmac {
              text
            }
            cart_image {
              url
            }
            item_code_hmac {
              text
            }
            item_code_sku {
              text
            }
            weight_hmac {
              text
            }
            weight
            front_page_products {
              featured_on {
                document {
                  data {
                    featured
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
