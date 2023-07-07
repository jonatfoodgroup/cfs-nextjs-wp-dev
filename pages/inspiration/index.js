import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import client from "@/app/apollo-client";
import GET_TAGS from "@/app/graphql/queries/GET_TAGS";
import GET_POSTS from "@/app/graphql/queries/GET_POSTS";
import GET_CATEGORIES from "@/app/graphql/queries/GET_CATEGORIES";
import GET_SEGMENTS from "@/app/graphql/queries/GET_SEGMENTS";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import Link from "next/link";


const Inspiration = () => {
  return (
    <>
    
      <Masthead />
      <Pillars />
      <Topics />
      <Segments />
      <Posts />
    </>
  );
};

const Segments = () => {
  const { loading, error, data } = useQuery(GET_SEGMENTS, {
    client: client,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p>Displaying {data.segments.nodes.length} segments</p>
            {data.segments.nodes.map((segment) => (
              <div key={segment.id}>
                <h3>{segment.title}</h3>
              </div> 
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};


const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS, {
    client: client,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p>Displaying {data.posts.nodes.length} posts</p>
            {data.posts.nodes.map((post) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                {/* Display categories if they exist */}
                {post.categories.nodes.length > 0 && (
                  <div>
                    <p>Categories:</p>
                    <ul>
                      {post.categories.nodes.map((category) => (
                        <li key={category.name}>{category.name}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/*Display tags if they exist */}
                {post.tags.nodes.length > 0 && (
                  <div>
                    <p>Tags:</p>
                    <ul>
                      {post.tags.nodes.map((tag) => (
                        <li key={tag.name}>{tag.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Pillars = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES, {
    client: client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="pillars">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h2 data-aos="fade-in">Pillars</h2>
          </Col>
        </Row>
        <Row>
          {data.categories.nodes.map((category) => (
            <Col md={4} key={category.id}>
              <div className="pillar">
                {category.title}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const Topics = () => {
  const { loading, error, data } = useQuery(GET_TAGS, {
    client: client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="topics">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h2 data-aos="fade-in">Topics</h2>
          </Col>
        </Row>
        <Row>
          {data.tags.nodes.map((tag) => (
            <Col md={4} key={tag.id}>
              <div className="topic">
                {tag.title}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const Masthead = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(
      `https://campbellsf1dev.wpengine.com/wp-json/wp/v2/search?search=${search}&type=post&subtype=post`
    );
    const results = await res.json();
    setSearchResults(results);
  };

  useEffect(() => {
    if (search.length > 3) {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  }, [search]);
  return (
    <div className="masthead" style={{ padding: "2rem 0" }}>
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h1 data-aos="fade-in">Inspiration Hub Page Title</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <form
              className="form-inline d-flex justify-content-center"
              style={{ padding: "2rem 0" }}
            >
              <input
                className="form-control form-control-lg flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                id="search"
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="btn btn-primary mx-auto"
                type="submit"
                style={{ marginLeft: "1rem" }}
              >
                Search
              </button>
            </form>
            {
              searchResults.length > 0 && (
                <div>
                  <h3>Search Results</h3>
                  <ul>
                    {searchResults.map((result) => (
                      <li key={result.id}>
                        <Link href={result.url}><div dangerouslySetInnerHTML={{ __html: result.title }} /> - {result.subtype}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Inspiration;
