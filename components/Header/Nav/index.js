import { useState, useEffect} from "react";

const items = [
  {
    id: 1,
    name: "Brands",
    url: "#brands",
  },
  {
    id: 2,
    name: "Products",
    url: "#products",
  },
  {
    id: 3,
    name: "Segments",
    url: "#segments",
  },
  {
    id: 4,
    name: "Inspiration",
    url: "#inspiration",
  }
]

const NavMenu = () => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default NavMenu;