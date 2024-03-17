import CategoryCardComponent from "../components/CategoryCardComponent";
import ProductCaruselComponent from "../components/ProductCaruselComponent";
import { Container, Row, Col } from "react-bootstrap";
import { DUMMY_CATEGORY } from "../dummyData";


const HomePage = () => {
    return(
        <>
       
        <ProductCaruselComponent/>
        <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
        {
         DUMMY_CATEGORY.map((category, index) =>  <CategoryCardComponent key={index} category={category} index={index}/>)
       }
       </Row>
            
        </Container>
       
      
        </>
    )
}

export default HomePage;