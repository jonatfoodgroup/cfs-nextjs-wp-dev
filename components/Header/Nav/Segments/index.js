import GET_SEGMENTS from "@/app/graphql/queries/GET_SEGMENTS";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";
import styles from "./Segments.module.css";

const SegmentsMenu = () => {
  const { loading, error, data } = useQuery(GET_SEGMENTS, {
    client: client,
  });
 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <Row xs="auto">
        <Col >
        <strong>BY SEGMENT</strong>
          <ul className={styles.linkList}>
            {data.segments.nodes.map((segment) => (
              <li key={segment.id}>
                
                <Link href={`/segments/${segment.slug}`}>{segment.title}</Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col md>
          <strong>FEATURED CONTENT</strong><br />
          <MenuContentCard
            postLink={"https://google.com"}
            featuredImg={"https://via.placeholder.com/100"}
            altText={"some alt text"}
            postTitle={"Some Post Title Here"}
            postTopic={"Post Topic"}
          />
          <MenuContentCard
            postLink={"https://google.com"}
            featuredImg={ "https://via.placeholder.com/100"}
            altText={"some alt text"}
            postTitle={"Another Post Title Here"}
            postTopic={"Post Topic"}
          />        
        </Col>
      </Row>
    </>
  );
};

export default SegmentsMenu;

{/*
list of all props in order of use:
post link
featured image
image alt text
post title
post topic
*/  
}

const MenuContentCard = ( {postLink, featuredImg, altText, postTopic, postTitle} ) => {
  return (
    <>
      <Link href={postLink} className={styles.menuContentCardLink}>
        <div className={styles.menuContentCard}>
          <div>
            <img className={styles.menuContentCardImg} src={featuredImg} alt={altText} />
            </div>

          <div>
            <span className={styles.menuTopic}>{postTopic}</span>
          <h6>{postTitle}</h6></div>
        </div>
      </Link>
    </>);
};

