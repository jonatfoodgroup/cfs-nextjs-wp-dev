import { useState, useContext, useEffect } from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import styles from "./Nav.module.css";
import BrandsMenu from "./Brands";
import SegmentsMenu from "./Segments";
import ProductsMenu from "./Products";
import InspirationMenu from "./Inspiration";
import { Icon, InlineIcon } from "@iconify/react";
import MobileNav from "./Mobile";
// Use navigation 
import { useRouter } from 'next/router';

const NavMenu = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  const items = [
    {
      id: 1,
      name: "Brands",
      url: "brands",
      component: <BrandsMenu setSelected={setSelected} />,
    },
    {
      id: 2,
      name: "Products",
      url: "products",
      component: <ProductsMenu setSelected={setSelected} />,
    },
    {
      id: 3,
      name: "Segments",
      url: "segments",
      component: <SegmentsMenu setSelected={setSelected} />,
    },
    {
      id: 4,
      name: "Inspiration",
      url: "inspiration",
      component: <InspirationMenu setSelected={setSelected} />,
    },
  ];

  const navigate = (url) => {
    // Ensure the url goes to /{url} and not appending to the current url
    router.push(`/${url}`);
    // Also close the menu
    setSelected(null);
  }
  return (
    <>
    <MobileNav />
    <ul className={styles.nav}>
      {items.map((item) => (
        <OverlayTrigger
          key={item.id}
          trigger={["hover", "focus"]}
          placement="bottom"
          overlay={
            <Popover
              id="popover-positioned-bottom"
              className={styles.popover}
              onMouseLeave={() => setSelected(null)}
            >
              <Popover.Header as="h3">{item.name}</Popover.Header>
              <Popover.Body>{item.component}</Popover.Body>
            </Popover>
          }
          show={selected === item.id}
          onToggle={() => setSelected(item.id)}
        >
          <li className={styles.navItem}>
            <Button variant="link"
              onClick={() => navigate(item.url)}
            >{item.name} <Icon icon="akar-icons:chevron-down" /></Button>
          </li>
        </OverlayTrigger>
      ))}
    </ul>
    {/* Mobile nav */}
    <ul className={styles.mobileNav}>
      {items.map((item) => (
        <li key={item.id} className={styles.mobileNavItem}>
        {item.name}
        </li>
      ))}
    </ul>
    </>
  );
};

export default NavMenu;
