import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";
import CodeBlock from "../../components/CodeBlock";
import { MDXProvider } from "@mdx-js/react";

const BlogPost = ({ data }) => {
  const tags = data.mdx.frontmatter.tags;

  // && and연산자를 사용해서 data.mdx.frontmatter.hero_image에 값이 없을 시(null) getImage실행을 안하도록 함.
  const image =
    data.mdx.frontmatter.hero_image &&
    getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {image && (
        // <></> => GatsbyImage와 p를 묶어줌
        <>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <p>
            Photo Credit:{" "}
            <a
              target="_blank"
              href={data.mdx.frontmatter.hero_image_credit_link}
            >
              {data.mdx.frontmatter.hero_image_credit_text}
            </a>
          </p>
        </>
      )}
      <hr />
      <MDXProvider
        components={{
          pre: CodeBlock,
        }}
      >
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
      <hr />
      TAGS : {tags && tags.join(", ")}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        tags
      }
      body
    }
  }
`;

export default BlogPost;
