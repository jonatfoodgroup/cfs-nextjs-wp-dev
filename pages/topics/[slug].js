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
        tags {
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

  useEffect(() => {
    console.log(tag);
  }, [tag]);
  // If the tag doesn't exist in WP, show "doesn't exist"
  if (!tag) return <div>doesnt exist</div>;
  return (
    <>
      <h1>Topic: {tag.name}</h1>
      <div className="posts">
        {tag.posts.nodes.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </div>
        ))}
      </div>
    </>
  );
}