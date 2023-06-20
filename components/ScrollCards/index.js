import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

let exampleItems = [
  {
    id: 1,
    imageUrl: '',
    altText: '',
    width: 100,
  },
  {
    id: 2,
    imageUrl: '',
    altText: '',
    width: 100,
  },
]
const ScrollCards = ({ items }) => {
  const handleClick = (id) => {
    console.log('Item clicked',id); 
  }
  if (!items) return null;
  return (
    <ScrollMenu>
      {items.map((item) => {
        return (
          <div
            itemId={item.id} // NOTE: itemId is required for track items
            title={item.id}
            key={item.id}
            onClick={handleClick(item.id)}
          >
            <img src={item.imageUrl} alt={item.altText} style={{width: item.width}} />
          </div>
        );
      })}
    </ScrollMenu>
  );
};

export default ScrollCards;