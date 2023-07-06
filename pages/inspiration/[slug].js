import { useState, useEffect } from 'react';
import GET_POST from '@/app/graphql/queries/GET_POST';
import client from '@/app/apollo-client';
import { gql } from '@apollo/client';
import { Container, Row, Col } from 'react-bootstrap';

// If its a category page, we need to get the category slug and pass it to the query
export async function getStaticProps({ params }) {
  const { data, loading, error } = await client.query({
    query: GET_POST,
    variables: {
      slug: params.slug,
    },
  });

  return {
    props: {
      post: data.post,
    },
  };
}

// getStaticPaths
export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query AllPosts {
        posts {
          nodes {
            slug
          }
        }
      }
    `,
  });

  return {
    paths: data.posts.nodes.map((post) => `/inspiration/${post.slug}`) || [],
    fallback: false,
  };
}

export default function InspirationCategory({
  post,
}) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}