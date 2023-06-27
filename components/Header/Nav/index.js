import { useState, useContext} from "react";
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
    url: "brands",
    component: <BrandsMenu />
  },
  {
    id: 2,
    name: "Products",
    url: "products",
    component: <ProductsMenu />
  },
  {
    id: 3,
    name: "Segments",
    url: "segments",
    component: <SegmentsMenu />
  },
  {
    id: 4,
    name: "Inspiration",
    url: "inspiration",
    component: <InspirationMenu />
  }
]

const NavMenu = () => {
  const [selected, setSelected] = useState(null);

  return (
    <ul className={styles.nav}>
      {items.map((item) => (
        <OverlayTrigger
        key={item.id}
        trigger={["hover", "focus"]}
        placement="bottom"
        overlay={
          <Popover id="popover-positioned-bottom" className={styles.popover} onMouseLeave={() => setSelected(null)}>
            <Popover.Header as="h3">{item.name}</Popover.Header>
            <Popover.Body>
              {item.component}
            </Popover.Body>
          </Popover>
        }
        show={selected === item.id}
        onToggle={() => setSelected(item.id)}
      >
        <li  className={styles.navItem}>
          
            <Button variant="link">
              {item.name}
            </Button>
          
        </li>
        </OverlayTrigger>
      ))}
    </ul>
  );
}

export default NavMenu;