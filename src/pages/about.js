import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Shop Oaxaca's mission is to democratize e-commerce. 100% of profits
            go to the creators.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Oaxaca style without the long flight.</figcaption>
          </figure>
          <h3 id="dynamic-styles">Buy with Pride</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
            sollicitudin lacus. Nunc scelerisque egestas ipsum, dignissim
            vulputate lectus. Aenean sed lacus nisl. Duis vehicula viverra eros,
            iaculis tincidunt odio aliquam a. Nulla mollis ex placerat,
            fermentum lorem quis, lacinia dolor. Quisque malesuada, lorem nec
            gravida eleifend, libero lorem pellentesque lacus, sit amet porta
            justo velit ac sem. Donec sed ligula dapibus ligula scelerisque
            fringilla nec a est. Suspendisse potenti. In eleifend facilisis
            diam, non bibendum augue sagittis sit amet.
          </p>
          <p>
            Quisque faucibus, dolor vel dignissim commodo, urna dolor fermentum
            orci, eget ultricies nisl magna id turpis. Quisque at nulla finibus,
            elementum purus eget, placerat ligula. Proin turpis arcu, pretium id
            libero quis, congue euismod lorem. Etiam tristique venenatis nulla
            ut facilisis. Aenean iaculis tellus et.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
