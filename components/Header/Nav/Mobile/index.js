import { useState, useEffect } from 'react';
import styles from './Mobile.module.css';
import { Icon, InlineIcon } from '@iconify/react';
import Link from 'next/link';
import Segments from './Segments';
import Brands from './Brands';
import Products from './Products';
import Inspiration from './Inspiration';

const nav = [
  {
    slug: 'brands',
    name: 'Brands',
    component: <Brands />,
  },
  {
    slug: 'products',
    name: 'Products',
    component: <Products />,
  },
  {
    slug: 'segments',
    name: 'Segments',
    component: <Segments />,
  },
  {
    slug: 'inspiration',
    name: 'Inspiration',
    component: <Inspiration />,
  },
]
export default function MobileNav() {
  const [selected, setSelected] = useState(null);
  return (
    <div className={styles.mobileNav}>
      <ul className={styles.nav}>

        {!selected && (
        nav.map((item) => (
          <li key={item.slug} className={styles.navItem}>
            <button
              className={styles.navLink}
              onClick={() => setSelected(item.slug)}
            >
              {item.name}
            </button>
          </li>
        )))}

        {selected && (
          <li className={styles.navItem}>
            <button
              className={styles.navLink}
              onClick={() => setSelected(null)}
            >
              <Icon icon="bi:arrow-left" />
            </button>
          </li>
        )}

        {selected && (
          // Get the selected item from the nav array
          nav.find((item) => item.slug === selected).component
        )}
          
      </ul>
    </div>
  );
}