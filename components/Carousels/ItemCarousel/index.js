import Slider from "react-slick";
import CampbellsCard from "@/components/CampbellsCard";

const ItemCarousel = ({ items = [], settings }) => {
  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <CampbellsCard key={index} item={item} delay={index * 100} />
      ))}
    </Slider>
  );
};

export default ItemCarousel;
