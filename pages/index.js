import { gql } from "@apollo/client";
import client from "../app/apollo-client";
import { useEffect } from "react";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          nodes {
            title
            content
            excerpt
            id
            author {
              node {
                name
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.posts.nodes
    },
 };
}

export default function Home({ posts }) {
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <>
      <h1>Next.js + Apollo Client</h1>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>

            <h3>{post.author.node.name}</h3>

            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </div>

          
        ))}
      </div>
      
    </>
    
  );
}

