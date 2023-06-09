import { useState, useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap'; 

const ProductDrawer = ({ product, setProduct }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setProduct(null);

  useEffect(() => {
    if (product) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [product]);

  if (!product) return null;
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{product.name}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ProductDrawer;