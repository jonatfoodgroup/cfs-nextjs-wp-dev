import { useState, useEffect } from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import Link from 'next/link';
import styles from './Mobile.module.css';

const navItems = [
  {
    slug: 'breakfast-recipes',
    name: 'Breakfast Recipes',
    image: 'https://via.placeholder.com/300x150',
  },
  {
    slug: 'lunch-recipes',
    name: 'Lunch Recipes',
    image: 'https://via.placeholder.com/300x150',
  },
]

export default function Inspiration() {
  const [search, setSearch] = useState('');
  return (
    <div>
      <Row style={{marginBottom: 20}}>
        <Col xs={12}>
          <input
            type="text"
            placeholder="Search inspiration"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h4>Popular searches</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h4>Inspiration for you</h4>
        </Col>
      </Row>
      <Row>
        {navItems.map((item) => (
          <Col key={item.slug} xs={6} md={4} lg={3}>
            <Link style={{width: '100%'}} href={`/inspiration/${item.slug}`}>
              <div className={styles.tile} style={{background: `url(${item.image})`, width: '100%'}}>
                {item.name}
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}