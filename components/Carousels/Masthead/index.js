import {Carousel as Car} from 'react-bootstrap';

const items = [
  {
    src: 'https://picsum.photos/800/400?text=First slide&bg=373940',
    altText: 'First slide',
    caption: 'First slide label'
  },
  {
    src: 'https://picsum.photos/800/400?text=Second slide&bg=282c34',
    altText: 'Second slide',
    caption: 'Second slide label'
  },
  {
    src: 'https://picsum.photos/800/400?text=Third slide&bg=20232a',
    altText: 'Third slide',
    caption: 'Third slide label'
  }
]

const Carousel = () => {
  return (
    <Car>
      {items.map((item, index) => (
        <Car.Item key={index}>
          <img
            className="d-block w-100"
            src={item.src}
            alt={item.altText}
          />
          <Car.Caption>
            <h3>{item.caption}</h3>
          </Car.Caption>
        </Car.Item>
      ))}
    </Car>
  )
}

export default Carousel;