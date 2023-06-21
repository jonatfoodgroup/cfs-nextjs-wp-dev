import { useState} from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import styles from "./Nav.module.css";
import BrandsMenu from "./Brands";
import SegmentsMenu from "./Segments";
import ProductsMenu from "./Products";
import InspirationMenu from "./Inspiration";

const items = [
  {
    id: 1,
    name: "Brands",
    url: "#brands",
    component: <BrandsMenu />
  },
  {
    id: 2,
    name: "Products",
    url: "#products",
    component: <ProductsMenu />
  },
  {
    id: 3,
    name: "Segments",
    url: "#segments",
    component: <SegmentsMenu />
  },
  {
    id: 4,
    name: "Inspiration",
    url: "#inspiration",
    component: <InspirationMenu />
  }
]

const NavMenu = () => {
  const [selected, setSelected] = useState(null);
  return (
    <ul className={styles.nav}>
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