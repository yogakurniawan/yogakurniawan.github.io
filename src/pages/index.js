import * as React from "react";
import Img from "gatsby-image";
import TextLoop from "react-text-loop";
import "fontsource-nunito";
import Layout from "../components/layout";

// styles
const mainStyles = {
  minHeight: "100vh",
  color: "#232129",
  background: "linear-gradient(to right top, #65dfc9, #6cdbeb)",
  fontFamily: "-apple-system, Nunito, sans-serif, serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "5%",
  position: "relative",
};

const socialMediaContainerStyles = {
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
  marginTop: "5rem",
};

const glassStyles = {
  background: "white",
  minHeight: "60vh",
  width: "60%",
  background:
    "linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))",
  borderRadius: "2rem",
  backdropFilter: "blur(2rem)",
  display: "flex",
  justifyContent: "center",
};

const photoBoxStyles = {
  zIndex: 3,
  top: "8%",
  position: "absolute",
  width: "280px",
  height: "280px",
  borderRadius: "50%",
  background: "rgb(101, 223, 201)",
  border: "10px solid rgba(255, 255, 255, 0.7)",
};

const photoStyles = {
  borderRadius: "50%",
};

const titleStyles = {
  marginTop: "15%",
};

const contentStyles = {
  width: "700px",
  textAlign: "center",
  fontSize: "4rem",
};

const loveStyles = {
  color: "red",
};

const reactStyles = {
  color: "#61dafb",
  background: "white",
  paddingRight: "20px",
  paddingLeft: "20px",
  borderRadius: "2rem",
};

const vueStyles = {
  color: "#4fc08d",
  background: "white",
  paddingRight: "20px",
  paddingLeft: "20px",
  borderRadius: "2rem",
};

const socialMediaItemStyles = {
  background: "white",
  height: "100px",
  width: "100px",
  background:
    "linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main style={mainStyles}>
        <div style={photoBoxStyles}>
          <Img
            imgStyle={photoStyles}
            objectFit="cover"
            fluid={data.me.childImageSharp.fluid}
          />
        </div>
        <div style={glassStyles}>
          <div style={titleStyles}>
            <TextLoop springConfig={{ stiffness: 150, damping: 12 }}>
              <div style={contentStyles}>Hello!</div>
              <div style={contentStyles}>
                I am <strong>Yoga Kurniawan</strong>
              </div>
              <div style={contentStyles}>Front-end Developer</div>
              <div style={contentStyles}>
                I <span style={loveStyles}>❤</span>{" "}
                <span style={reactStyles}>React</span>
              </div>
              <div style={contentStyles}>
                I <span style={loveStyles}>❤</span>{" "}
                <span style={vueStyles}>Vue</span>
              </div>
            </TextLoop>
            <div style={socialMediaContainerStyles}>
              <div style={socialMediaItemStyles}>
                <Img fixed={data.github.childImageSharp.fixed} />
              </div>
              <div style={socialMediaItemStyles}>
                <Img fixed={data.linkedin.childImageSharp.fixed} />
              </div>
              <div style={socialMediaItemStyles}>
                <Img fixed={data.twitter.childImageSharp.fixed} />
              </div>
              <div style={socialMediaItemStyles}>
                <Img fixed={data.instagram.childImageSharp.fixed} />
              </div>
              <div style={socialMediaItemStyles}>
                <Img fixed={data.facebook.childImageSharp.fixed} />
              </div>
              <div style={socialMediaItemStyles}>
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
