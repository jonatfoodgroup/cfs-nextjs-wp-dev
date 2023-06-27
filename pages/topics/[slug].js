import { gql } from "@apollo/client";
import client from "../../app/apollo-client";
import { useEffect } from "react";

// Get the tag by slug from the wordpress graphql api
export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query Tag($slug: ID!) {
        tag(id: $slug, idType: SLUG) {
          name
          posts {
            nodes {
              title
              excerpt
              slug
              content
              id
            }
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });

  return {
    props: {
      tag: data.tag,
    },
  };
}

// getStaticPaths
export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query Tags {
        tags(first:100) {
          nodes {
            slug
          }
        }
      }
    `,
  });

  return {
    paths: data.tags.nodes.map((tag) => `/topics/${tag.slug}`) || [],
    fallback: false,
  };
}

// Display the tag name and posts
export default function Tag({ tag }) {
  if (!tag) return <div>doesnt exist</div>;
  return (
    <>
      <h1>Topic: {tag.name}</h1>
      <div className="posts">
        {tag.posts.nodes.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        ))}
      </div>
    </>
  );
}