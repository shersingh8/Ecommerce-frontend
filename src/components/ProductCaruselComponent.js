import { Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; 


const ProductCaruselComponent = () => {
return (
    <Carousel>
    <Carousel.Item>
      <img crossOrigin="anonymous" className='d-block w-100 img-carusel' alt="900x500" src="/images/carousel/carousel-1.png" />
      <Carousel.Caption>
      <LinkContainer className="link-container" to="/product-details/1">
        <h3>Best seller in laptop category</h3>
        </LinkContainer>
        <p>Dell Inspiron 15 3000 laptop, 15 inch HD</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img crossOrigin="anonymous" className='d-block w-100 img-carusel' alt="900x500" src="/images/carousel/carousel-2.png" />
      <Carousel.Caption>
      <LinkContainer  className="link-container" to="/product-details/2">
        <h3>Best seller in books category</h3>
        </LinkContainer>
        <p>All the best seller books avilable</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img crossOrigin="anonymous"  className='d-block w-100 img-carusel' alt="900x500" src="/images/carousel/carousel-3.png" />
      <Carousel.Caption>
        <LinkContainer className="link-container" to="/product-details/3">
        <h3>Best seller in camera category</h3>
        </LinkContainer>
        <p>All the best seller camera avilable</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)
}


export default ProductCaruselComponent;