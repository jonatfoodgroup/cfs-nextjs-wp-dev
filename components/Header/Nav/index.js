import { useState, useEffect} from "react";
import { Button, Popover, OverlayTrigger, FormControl } from "react-bootstrap";
import Tags from "@/components/Topics";
import BrandList from "@/components/Brands";
import styles from "./Nav.module.css";

const Brands = () => {
  return (
    <>
      <h2>Brands</h2>
      <BrandList />
    </>
  );
};

const Products = () => {
  return (
    <>
      <h2>Products</h2>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </>
  );
};

const Segments = () => {
  return (
    <>
      <p>Choose your segment to personalize your experience</p>
      <FormControl as="select" custom>
        <option value="0">Select a segment</option>
        <option value="1">Segment 1</option>
        <option value="2">Segment 2</option>
        <option value="3">Segment 3</option>
      </FormControl>
      <h2>Segments</h2>
      <ul>
        <li>Segment 1</li>
        <li>Segment 2</li>
        <li>Segment 3</li>
      </ul>
    </>
  );
};

const Inspiration = () => {
  return (
    <>
      <h2>Inspiration</h2>
      <Tags />
    </>
  );
};
const items = [
  {
    id: 1,
    name: "Brands",
    url: "#brands",
    component: <Brands />
  },
  {
    id: 2,
    name: "Products",
    url: "#products",
    component: <Products />
  },
  {
    id: 3,
    name: "Segments",
    url: "#segments",
    component: <Segments />
  },
  {
    id: 4,
    name: "Inspiration",
    url: "#inspiration",
    component: <Inspiration />
  }
]

const NavMenu = () => {
  const [selected, setSelected] = useState(null);
  return (
    <ul className={styles.nav}>
      {/* Mega menu using popover on each item */}
      {items.map((item) => (
        <li key={item.id} className={styles.navItem}>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={
              <Popover id="popover-positioned-bottom" className={styles.popover}>
                <Popover.Header as="h3">{item.name}</Popover.Header>
                <Popover.Body>
                  {item.component}
                </Popover.Body>
              </Popover>
            }
            show={selected === item.id}
            onToggle={() => {
              if (selected === item.id) {
                setSelected(null);
              } else {
                setSelected(item.id);
              }
            }}
          >
            <Button variant="link">{item.name}</Button>
          </OverlayTrigger>
        </li>
      ))}
    </ul>
  );
}

export default NavMenu;