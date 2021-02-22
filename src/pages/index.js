import * as React from "react";
import Img from "gatsby-image";
import TextLoop from "react-text-loop";
import Layout from "../components/layout";
import indexStyles from "./index.module.scss";
import "fontsource-nunito";

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main className={indexStyles.main}>
        <div className={indexStyles.photoContainer}>
          <Img
            className={indexStyles.photo}
            objectFit="cover"
            fluid={data.me.childImageSharp.fluid}
          />
        </div>
        <div className={indexStyles.glass}>
          <div className={indexStyles.titleContainer}>
            <div className={indexStyles.title}>
            <TextLoop springConfig={{ stiffness: 150, damping: 12 }}>
              <div className={indexStyles.content}>Hello!</div>
              <div className={indexStyles.content}>
                I am <strong>Yoga Kurniawan</strong>
              </div>
              <div className={indexStyles.content}>Front-end Developer</div>
              <div className={indexStyles.content}>
                I <span className={indexStyles.love}>❤</span>{" "}
                <span className={indexStyles.react}>React</span>
              </div>
              <div className={indexStyles.content}>
                I <span className={indexStyles.love}>❤</span>{" "}
                <span className={indexStyles.vue}>Vue</span>
              </div>
            </TextLoop>
            </div>
            <div className={indexStyles.socialMediaContainer}>
              <div className={indexStyles.socialMedia}>
                <Img fixed={data.github.childImageSharp.fixed} />
              </div>
              <div className={indexStyles.socialMedia}>
                <Img fixed={data.linkedin.childImageSharp.fixed} />
              </div>
              <div className={indexStyles.socialMedia}>
                <Img fixed={data.twitter.childImageSharp.fixed} />
              </div>
              <div className={indexStyles.socialMedia}>
                <Img fixed={data.instagram.childImageSharp.fixed} />
              </div>
              <div className={indexStyles.socialMedia}>
                <Img fixed={data.facebook.childImageSharp.fixed} />
              </div>
              <div className={indexStyles.socialMedia}>
                <Img fixed={data.youtube.childImageSharp.fixed} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    me: file(relativePath: { eq: "me.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 280, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instagram: file(relativePath: { eq: "instagram.png" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    linkedin: file(relativePath: { eq: "linkedin.png" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    twitter: file(relativePath: { eq: "twitter.png" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    facebook: file(relativePath: { eq: "facebook.png" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    youtube: file(relativePath: { eq: "youtube.png" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    github: file(relativePath: { eq: "github.png" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
