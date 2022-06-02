import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/puppy.jpeg"
      />
    </Layout>
  );
};

export default IndexPage;
