import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import PageTransition from "gatsby-v2-plugin-page-transitions"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductCatalog from "../components/productCatalog"
import { Link } from "gatsby"
import styled from "styled-components"

const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;

  li {
    padding: 5px .6rem;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: #000;
  font-size: .9rem;
  border-bottom: 1px solid #FF5100;
  transition: all ease-in-out .4s;

  &:hover { 
    border-bottom-color: #000; 
    color: #FF5100; 
  }
`

const AllProducts = ({
  data: {
    allPrismicProduct: { edges },
  },
  location,
}) => {
  return (
    <Layout>
      <PageTransition>
        <SEO title="All Products" pathname={location.pathname} />
        <div
          style={{
            textAlign: `center`,
            marginTop: `4rem`,
            marginBottom: `2rem`,
          }}
        >
          <h1>All Products</h1>
        </div>
        <h3>Sort by Category:</h3>
        <CategoryList>
          <li><StyledLink to="/category-eyewear">Eyewear</StyledLink></li>
          <li><StyledLink to="/category-first-aid-medical">First Aid/Medical</StyledLink></li>
          <li><StyledLink to="/category-head-face-protection">Head &amp; Face Protection</StyledLink></li>
          <li><StyledLink to="/category-hand-protection">Hand Protection</StyledLink></li>
          <li><StyledLink to="/category-protective-apparel">Protective Apparel</StyledLink></li>
          <li><StyledLink to="/category-foot-protection">Foot Protection</StyledLink></li>
        </CategoryList>
        <ProductCatalog products={edges} />
      </PageTransition>
    </Layout>
  )
}

export default AllProducts

AllProducts.propTypes = {
  data: PropTypes.shape({
    products: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query AllProductsPage {
    allPrismicProduct {
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
            categories {
              category {
                document {
                  data {
                    name
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
