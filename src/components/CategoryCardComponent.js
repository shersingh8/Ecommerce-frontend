import { Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryCardComponent = ({category, index}) => {
   const {category:categoryName, product} =  category ?? {}
    return (
        <Card>
      <Card.Img crossOrigin="anonymous" variant="top" src={product.image_url} />
      <Card.Body>
        <Card.Title>{categoryName}</Card.Title>
        <Card.Text>
         {product.description}
        </Card.Text>
        <LinkContainer className="link-container" to="/product-list">
        <Button variant="primary">Go to the Category</Button>
       </LinkContainer>
        
      </Card.Body>
    </Card>
    ) 
}

export default CategoryCardComponent;