import { gql } from "@apollo/client";
import client from "../app/apollo-client";
import { WhatsNext } from "@/components/ExampleModule";
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
  return (
    <>
      <h1>Next.js + Apollo Client</h1>    
      <WhatsNext />  
    </>
    
  );
}

