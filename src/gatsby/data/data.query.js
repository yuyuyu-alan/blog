/* eslint-disable */

// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js

// const GatsbyFluid_withWebp = `
//   base64
//   aspectRatio
//   src
//   srcSet
//   srcWebp
//   srcSetWebp
//   sizes
// `;

const GatsbyFluid = `
  base64
  aspectRatio
  src
  srcSet
  sizes
`;

module.exports.local = {
  articles: `{
    articles: allArticle(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          slug
          secret
          title
          author
          filePath
          date(
            formatString: "YYYY年MM月DD日"
            locale: "zh-CN"
          )
          dateForSEO: date
          timeToRead
          excerpt
          subscription
          body
          hero {
            full: childImageSharp {
              fluid(maxWidth: 944, quality: 85) {
                ${GatsbyFluid}
              }
            }
            regular: childImageSharp {
              fluid(maxWidth: 653, quality: 85) {
                ${GatsbyFluid}
              }
            }
            narrow: childImageSharp {
              fluid(maxWidth: 457, quality: 85) {
                ${GatsbyFluid}
              }
            }
            seo: childImageSharp {
              fixed(width: 1200, quality: 85) {
                src
              }
            }
          }
        }
      }
    }
  }`,
  authors: `{
    authors: allAuthor {
      edges {
        node {
          authorsPage
          bio
          id
          name
          featured
          social {
            url
          }
          slug
          avatar {
            small: childImageSharp {
              fluid(maxWidth: 50, quality: 100) {
                ${GatsbyFluid}
              }
            }
            medium: childImageSharp {
              fluid(maxWidth: 100, quality: 100) {
                ${GatsbyFluid}
              }
            }
            large: childImageSharp {
              fluid(maxWidth: 328, quality: 100) {
                ${GatsbyFluid}
              }
            }
          }
        }
      }
    }
  }`,
};

module.exports.contentful = {
  articles: `{
    articles: allContentfulPost(sort: {fields: [date, title], order: DESC}, limit: 1000) {
      edges {
        node {
          body {
            childMdx {
              body
              timeToRead
            }
          }
          excerpt
          title
          slug
          secret
          date(formatString: "MMMM Do, YYYY")
          dateForSEO: date
          hero {
            full: fluid(maxWidth: 944, quality: 85) {
              ${GatsbyFluid}
            }
            regular: fluid(maxWidth: 653, quality: 85) {
              ${GatsbyFluid}
            }
            narrow: fluid(maxWidth: 457, quality: 85) {
              ${GatsbyFluid}
            }
            seo: fixed(width: 1200, quality: 85) {
              src
            }
          }
          id
          author {
            name
          }
        }
      }
    }
  }
  `,
  authors: `{
    authors: allContentfulAuthor {
      edges {
        node {
          avatar {
            small: fluid(maxWidth: 50, quality: 85) {
              ${GatsbyFluid}
            }
            medium: fluid(maxWidth: 100, quality: 85) {
              ${GatsbyFluid}
            }
            large: fluid(maxWidth: 328, quality: 85) {
              ${GatsbyFluid}
            }
          }
          fields {
            authorsPage
            slug
          }
          bio
          id
          name
          social
          featured
        }
      }
    }
  }`,
};
