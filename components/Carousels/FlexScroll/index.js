import styles from "./flexscroll.module.css";
import GET_POSTS from "@/app/graphql/queries/GET_POSTS";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import { useState } from "react";
export function Resource({
  link,
  thumb,
  cardTag,
  alttext,
  doctitle,
  linkCopy,
  delay,
}) {
  return (
    <>
      <li className={styles.card} data-aos="fade-up" data-aos-duration="750" data-aos-delay={delay}>
        <div>
          <div variant="primary" className={styles.cardTag}>
            {cardTag}
          </div>
          <img className={styles.cardImage} src={thumb} alt={alttext} />
          <div className={styles.cardContent}>
            <h3 style={{fontSize: '1.2rem'}}>{doctitle}</h3>
            </div>

          <div className={styles.cardLinkWrapper}>
            <a href="" className={styles.cardLink}>
              {linkCopy}
            </a>
          </div>
        </div>
      </li>
    </>
  );
}

const FlexScroll = () => {
  const { loading, error, data } = useQuery(GET_POSTS, {
    client: client,
    variables: { first: 6 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <div className={styles.cardsWrapper}>
        <ul className={styles.cards}>
          {
            data.posts.nodes.map((post, index) => (
              <Resource
                key={index}
                link={post.uri}
                cardTag={post.categories.nodes[0].name}
                thumb={post.featuredImage?.node.sourceUrl}
                alttext={post.featuredImage?.node.altText}
                doctitle={post.title}
                linkCopy={"View Resource"}
                delay={index * 100}
              />
            ))
          }
        </ul>
      </div>
    </>
  );
};

export default FlexScroll;
